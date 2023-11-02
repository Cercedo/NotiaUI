import { NOTE_API_ENDPOINTS } from '../params';
import { Note } from '../types';

export const listNotes = async (
  signal: AbortSignal | null = null
): Promise<Note[] | undefined> => {
  const url = NOTE_API_ENDPOINTS.list();
  const init: RequestInit = {
    signal: signal,
  };

  try {
    const response = await fetch(url, init);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    if (signal?.aborted) {
      return;
    }
    console.error(`Could not list notes: ${error}`);
  }
};
