const composeNoteNavigationItemClass = (isActive: boolean) => {
  const isActiveClass = isActive ? 'active' : '';
  return `text-white bg-transparent font-semibold text-sm hover:text-white flex items-center gap-2 ${isActiveClass}`;
};

export default composeNoteNavigationItemClass;
