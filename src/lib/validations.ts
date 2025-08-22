import { z } from 'zod';

export const socialMediaSchema = z.object({
  platform: z.string().min(1, 'Platform is required'),
  handle: z.string().min(1, 'Handle is required'),
});

export const recipientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().min(1, 'Age must be at least 1').max(150, 'Age must be less than 150'),
  contactNo: z.string().min(10, 'Contact number must be at least 10 digits'),
  email: z.string().email('Invalid email format').optional().or(z.literal('')),
  socialMedia: z.array(socialMediaSchema).optional(),
});

export const noteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  content: z.string().min(1, 'Content is required').max(1000, 'Content must be less than 1000 characters'),
  image: z.instanceof(File).optional(),
  recipients: z.array(recipientSchema).min(1, 'At least one recipient is required'),
  scheduledDate: z.date().min(new Date(), 'Scheduled date must be in the future'),
});

export type NoteFormData = z.infer<typeof noteSchema>;
export type RecipientFormData = z.infer<typeof recipientSchema>;
export type SocialMediaFormData = z.infer<typeof socialMediaSchema>;
