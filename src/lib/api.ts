import { CreateNoteRequest } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export const apiClient = {
  async createNote(noteData: CreateNoteRequest): Promise<{ id: string; message: string }> {
    const formData = new FormData();
    
    // Add text fields
    formData.append('title', noteData.title);
    formData.append('content', noteData.content);
    formData.append('scheduledDate', noteData.scheduledDate);
    formData.append('recipients', JSON.stringify(noteData.recipients));
    
    // Add image if present
    if (noteData.image) {
      formData.append('image', noteData.image);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/notes`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new ApiError(response.status, errorData.message || 'Failed to create note');
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, 'Network error occurred');
    }
  },

  async getNotes(): Promise<any[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/notes`);
      
      if (!response.ok) {
        throw new ApiError(response.status, 'Failed to fetch notes');
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, 'Network error occurred');
    }
  }
};
