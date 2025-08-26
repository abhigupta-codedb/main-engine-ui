"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Upload, X, Send, Plus, FileText } from "lucide-react";
import {
  NotesSchema,
  type NotesFormData,
  type RecipientFormData,
  type ApproverFormData,
} from "@/lib/validations";
import { apiClient, ApiError } from "@/lib/api";
import AddUserForm from "./AddUserForm";
import RecipientList from "./RecipientList";
import Modal from "./Modal";
import { title } from "process";

export default function NoteForm() {
  const [recipients, setRecipients] = useState<RecipientFormData[]>([]);
  const [approvers, setApprovers] = useState<ApproverFormData[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [deliveryType, setDeliveryType] = useState("fixed_date");
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"recipient" | "approver">(
    "recipient"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<NotesFormData>({
    resolver: zodResolver(NotesSchema),
  });

  const watchedImage = watch("image");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setValue("image", undefined);
    setImagePreview(null);
  };

  const addRecipient = (recipient: RecipientFormData) => {
    setRecipients([...recipients, recipient]);
    setIsModalOpen(false);
  };

  const addApprover = (approver: ApproverFormData) => {
    setApprovers([...approvers, approver]);
    setIsModalOpen(false);
  };

  const openRecipientModal = () => {
    setModalType("recipient");
    setIsModalOpen(true);
  };

  const openApproverModal = () => {
    setModalType("approver");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removeRecipient = (index: number) => {
    setRecipients(recipients.filter((_, i) => i !== index));
  };

  const removeApprover = (index: number) => {
    setApprovers(approvers.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: NotesFormData) => {
    if (recipients.length === 0) {
      setSubmitStatus({
        type: "error",
        message: "Please add at least one recipient",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        title: data.title,
        content: data.content,
        image: data.image,
        recipients: recipients,
        deliveryType,
        scheduledDate: data.scheduledDate
          ? data.scheduledDate.toISOString()
          : null,
      };

      const result = await apiClient.createNote(payload);

      setSubmitStatus({
        type: "success",
        message: "Note created successfully!",
      });

      // Reset form
      reset();
      setRecipients([]);
      setImagePreview(null);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof ApiError ? error.message : "Failed to create note",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">
            {deliveryType === "death_date" ? "Death Note" : "My Note"}
          </h1>
        </div>

        {submitStatus && (
          <div
            className={`p-4 rounded-md mb-6 ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              {...register("title")}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter note title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <textarea
              {...register("content")}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
              placeholder="Write your note content here..."
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">
                {errors.content.message}
              </p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image (Optional)
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <Upload className="w-4 h-4" />
                <span>Choose Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {watchedImage && (
                <span className="text-sm text-gray-600">
                  {watchedImage.name}
                </span>
              )}
            </div>

            {imagePreview && (
              <div className="mt-3 relative inline-block">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-xs max-h-48 rounded-lg border"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Type *
            </label>
            <select
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="fixed_date">On Fixed Date</option>
              <option value="death_date">On Death Date</option>
            </select>
          </div>

          {/* Scheduled Date */}
          {deliveryType === "fixed_date" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scheduled Date *
              </label>
              <div className="relative">
                <input
                  {...register("scheduledDate", { valueAsDate: true })}
                  type="datetime-local"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min={new Date().toISOString().slice(0, 16)}
                />
                <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              {errors.scheduledDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.scheduledDate.message}
                </p>
              )}
            </div>
          )}

          {/* Recipients Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">Recipients</h3>
              <button
                type="button"
                onClick={openRecipientModal}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Recipient
              </button>
            </div>

            <RecipientList
              recipients={recipients}
              onRemove={removeRecipient}
              label="Recipients"
            />
          </div>

          {/* Approver Section */}
          {deliveryType === "death_date" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800">
                  Add Death Approvers
                </h3>
                <button
                  type="button"
                  onClick={openApproverModal}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Approver
                </button>
              </div>

              <RecipientList
                recipients={approvers}
                onRemove={removeApprover}
                label="Approvers"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting || recipients.length === 0}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Creating Note...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Create Note
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Modal for Adding Users */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalType === "recipient" ? "Add Recipient" : "Add Approver"}
        size="lg"
      >
        <AddUserForm
          onAdd={modalType === "recipient" ? addRecipient : addApprover}
          onCancel={closeModal}
          label={modalType === "recipient" ? "Add Recipient" : "Add Approver"}
        />
      </Modal>
    </div>
  );
}
