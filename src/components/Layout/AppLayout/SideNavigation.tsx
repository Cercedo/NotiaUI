import { Link, NavLink, useLoaderData } from 'react-router-dom';

import {
  AddIcon,
  LogoutIcon,
  NotesIcon,
  Spinner,
} from '@/components/Elements';
import { Note } from '@/features/notes';

import NoteNavigationItem from './NoteNavigationItem';
import composeNoteNavigationItemClass from './utils/composeNoteNavigationItemClass';
import { loadNoteNavigationItemResultType } from './utils/loadNoteNavigationItem';

const SideNavigation: React.FC = () => {
  const { notes } = useLoaderData() as loadNoteNavigationItemResultType;

  const composeNoteNavigationItems = (_notes: Note[]) => {
    return _notes.map((note) => {
      return <NoteNavigationItem key={note.id} note={note} />;
    });
  };

  return (
    <ul id="side-navigation">
      <li className="side-navigation-item">
        <NavLink
          to={`notes/`}
          className={({ isActive }) =>
            composeNoteNavigationItemClass(isActive)
          }
        >
          <span>
            <NotesIcon />
          </span>
          <span>Notes</span>
        </NavLink>
      </li>
      <li className="side-navigation-item">
        <form method="post" className="w-full">
          <button
            className="text-white w-full p-0 border-0 font-semibold text-sm text-start flex items-center gap-2"
            type="submit"
          >
            <span>
              <AddIcon />
            </span>
            <span>Add note</span>
          </button>
        </form>
      </li>

      <li className="mt-4">
        <div className="text-white px-2 text-xs">WORKSPACE</div>
        <ul className="mt-2">
          {notes ? (
            composeNoteNavigationItems(notes)
          ) : (
            <li className="side-navigation-item">
              <Spinner size="sm" className="text-white" />
            </li>
          )}
        </ul>
      </li>

      <li className="p-4 absolute bottom-0 left-0 w-full flex items-center">
        <Link
          to="/app"
          className="block bg-transparent text-white text-sm font-semibold hover:text-white"
        >
          <span className="p-1 rounded-lg bg-white">🐦</span>
          <span className="ml-2 font-semibold">Notia</span>
        </Link>
        <Link to="/" className="bg-transparent ml-auto">
          <LogoutIcon className="text-white" />
        </Link>
      </li>
    </ul>
  );
};

export default SideNavigation;
