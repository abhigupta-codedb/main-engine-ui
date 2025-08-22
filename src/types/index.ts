export interface Recipient {
  id: string;
  name: string;
  age: number;
  contactNo: string;
  email?: string;
  socialMedia?: {
    platform: string;
    handle: string;
  }[];
}

export interface Note {
  id?: string;
  title: string;
  content: string;
  image?: File | string;
  recipients: Recipient[];
  scheduledDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateNoteRequest {
  title: string;
  content: string;
  image?: File;
  recipients: Omit<Recipient, 'id'>[];
  scheduledDate: string; // ISO string for API
}
