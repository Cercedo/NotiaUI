import { useEffect, useState } from 'react';

import { Spinner } from '@/components/Elements';

import { listNotes } from '../api/listNotes';
import { Note } from '../types';

export const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<Note[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const data = listNotes(signal);
    data.then((notes) => {
      if (!notes) return;
      setNotes(notes);
    });

    return () => {
      controller.abort();
    };
  }, []);

  const buildNotesListItems = (notes: Note[]) => {
    return notes.map((note) => {
      let short_body = note.body.substring(0, 100);
      short_body = `${short_body}...`;
      return <li key={note.id}>{short_body}</li>;
    });
  };

  if (!notes) {
    return (
      <p className="flex items-center text-indigo-500">
        <Spinner size="sm" />
        <span className="ml-2 italic">Loading...</span>
      </p>
    );
  }

  if (notes.length === 0) {
    return null;
  }

  return (
    <div>
      <ul>{buildNotesListItems(notes)}</ul>
    </div>
  );
};
