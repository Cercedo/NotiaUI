import { API_URL } from '@/config';

export const NOTE_API_ENDPOINTS = {
  list: () => `${API_URL}/note/note/`,
  create: () => `${API_URL}/note/note/`,
  get: (id: number) => `${API_URL}/note/note/${id}/`,
  update: (id: number) => `${API_URL}/note/note/${id}/`,
  delete: (id: number) => `${API_URL}/note/note/${id}/`,
};
