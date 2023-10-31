import { useEffect, useState } from 'react';

import listNotes from '../api/listNotes';
import { Note } from '../types';

const NoteList: React.FC<Record<string, never>> = () => {
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
    return <p>Loading...</p>;
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

export default NoteList;
