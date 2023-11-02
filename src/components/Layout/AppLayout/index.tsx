import { Outlet } from 'react-router-dom';

import MainLayout from './MainLayout';

export const AppLayout: React.FC = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
