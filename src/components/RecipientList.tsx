"use client";

import React from "react";
import { Trash2, User, Phone, Mail, Hash } from "lucide-react";
import { type RecipientFormData } from "@/lib/validations";

interface RecipientListProps {
  recipients: RecipientFormData[];
  onRemove: (index: number) => void;
  label: string;
}

export default function RecipientList({
  recipients,
  onRemove,
  label,
}: RecipientListProps) {
  if (recipients.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <User className="w-12 h-12 mx-auto mb-3 text-gray-300" />
        <p>No {label} added yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h4 className="font-medium text-gray-800 mb-3">
        {label} ({recipients.length})
      </h4>
      {recipients.map((recipient, index) => (
        <div
          key={index}
          className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative"
        >
          <button
            onClick={() => onRemove(index)}
            className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800 hover:bg-red-100 rounded"
            title="Remove recipient"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <div className="pr-8">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-800">
                {recipient.name}
              </span>
              {/* <span className="text-sm text-gray-500">({recipient.age} years old)</span> */}
            </div>

            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-3 h-3" />
                <span>{recipient.contact_number_1}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-3 h-3" />
                <span>{recipient.contact_number_2}</span>
              </div>

              {recipient.email && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-3 h-3" />
                  <span>{recipient.email}</span>
                </div>
              )}

              {recipient.socialMedia && recipient.socialMedia.length > 0 && (
                <div className="space-y-1">
                  {recipient.socialMedia.map((social, socialIndex) => (
                    <div
                      key={socialIndex}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <Hash className="w-3 h-3" />
                      <span>
                        {social.platform}: {social.handle}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
