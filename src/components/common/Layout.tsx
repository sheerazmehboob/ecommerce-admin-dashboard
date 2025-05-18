import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen ml-56 transition-all duration-200">
        <TopBar pageTitle={pageTitle} />
        <main className="flex-1 flex flex-col items-center pt-8 p-8 w-full bg-gray-900 text-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 
