import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <div className="h-screen grid grid-cols-5 gap-4">
      <Sidebar />
      <main className="col-span-4 p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
