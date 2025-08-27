import { z } from "zod";

export const socialMediaSchema = z.object({
  platform: z.string().min(1, "Platform is required"),
  handle: z.string().min(1, "Handle is required"),
});

export const recipientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  contact_number_1: z
    .string()
    .min(10, "Contact number must be at least 10 digits"),
  contact_number_2: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .optional(),
  relationship: z.string().min(1, "Relationship is required"),
  socialMedia: z.array(socialMediaSchema).optional(),
});

export const approverSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  contact_number_1: z
    .string()
    .min(10, "Contact number must be at least 10 digits"),
  contact_number_2: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .optional(),
  relationship: z.string().min(1, "Relationship is required"),
  socialMedia: z.array(socialMediaSchema).optional(),
});

export const FixedDateNoteSchema = z.object({
  notesId: z.string().uuid("Invalid notes ID format"),
  deliveryDate: z.date().min(new Date(), "Delivery date must be in the future"),
  deletionDate: z.date().min(new Date(), "Deletion date must be in the future"),
});

export const DeathDateNoteSchema = z.object({
  notesId: z.string().uuid("Invalid notes ID format"),
  deliveryDate: z.date().min(new Date(), "Delivery date must be in the future"),
  deletionDate: z.date().min(new Date(), "Deletion date must be in the future"),
});

export const NotesSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  images: z.array(z.instanceof(File)).optional(),
  attachments: z.array(z.string()).optional(),
  recipientsId: z.array(z.string().min(1, "Recipient ID is required")),
  scheduledDate: z
    .date()
    .min(new Date(), "Scheduled date must be in the future")
    .optional(),
});

export type FixedDateNoteFormData = z.infer<typeof FixedDateNoteSchema>;
export type DeathDateNoteFormData = z.infer<typeof DeathDateNoteSchema>;
export type RecipientFormData = z.infer<typeof recipientSchema>;
export type ApproverFormData = z.infer<typeof approverSchema>;
export type SocialMediaFormData = z.infer<typeof socialMediaSchema>;
export type NotesFormData = z.infer<typeof NotesSchema>;
