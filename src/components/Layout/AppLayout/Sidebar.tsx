import { SearchIcon } from '@/components/Elements';

import SideNavigation from './SideNavigation';

const Sidebar: React.FC = () => {
  return (
    <div className="relative col-span-1 p-4 bg-gradient-to-b from-indigo-500 to-blue-500">
      <div className="flex flex-row gap-2 mb-4">
        <form role="search" className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
          </div>
          <input
            className="w-48 py-1.5 ps-8 pl-8 rounded-lg border-2 border-transparent placeholder:text-gray-400 text-sm transition focus-visible:border-[#646cff] duration-300"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>
        </form>
        <form method="post" className="w-full">
          <button
            className="w-full h-full px-3 py-1.5 rounded-lg text-sm border-2 border-transparent transition hover:border-[#646cff] duration-300"
            title="Add note"
          >
            Add
          </button>
        </form>
      </div>
      <nav>
        <SideNavigation />
      </nav>
    </div>
  );
};

export default Sidebar;
