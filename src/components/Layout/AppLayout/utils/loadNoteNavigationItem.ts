import { Note, listNotes } from '@/features/notes';

export type loadNoteNavigationItemResultType = {
  notes: Note[] | undefined;
};

const loadNoteNavigationItem =
  async (): Promise<loadNoteNavigationItemResultType> => {
    const notes = await listNotes(null);
    return { notes };
  };

export default loadNoteNavigationItem;
