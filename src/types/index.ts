export interface Recipient {
  name: string;
  email: string;
  contact_number_1: string;
  contact_number_2?: string;
  relationship: string;
  socialMedia?: {
    platform: string;
    handle: string;
  }[];
}

export interface Note {
  id?: string;
  title: string;
  content: string;
  images?: File[] | string[];
  recipients: Recipient[];
  scheduledDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateNoteRequest {
  title: string;
  content: string;
  images?: File[];
  recipients: Recipient[];
  deliveryType: "fixed_date" | "death_date";
  scheduledDate?: Date;
}
