import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChartBarIcon, Squares2X2Icon, PlusIcon } from '@heroicons/react/24/outline';

const sections = [
  { name: 'Revenue', icon: ChartBarIcon, path: '/revenue' },
  { name: 'Inventory', icon: Squares2X2Icon, path: '/inventory' },
  { name: 'Add Product', icon: PlusIcon, path: '/products/new' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="bg-gray-800 h-screen w-56 flex flex-col fixed left-0 top-0 z-30 shadow-lg border-r border-gray-700">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <span className="font-bold text-blue-400 text-2xl tracking-wide">Admin</span>
      </div>
      <nav className="flex-1 flex flex-col gap-2 mt-8">
        {sections.map(({ name, icon: Icon, path }) => {
          const isSelected = location.pathname === path;
          if (isSelected) {
            return (
              <div
                key={name}
                className="flex items-center gap-4 px-6 py-3 rounded-lg mx-2 text-base font-semibold bg-blue-600 text-white shadow cursor-default"
              >
                <Icon className="h-6 w-6" />
                <span>{name}</span>
              </div>
            );
          }
          return (
            <Link
              key={name}
              to={path}
              className="flex items-center gap-4 px-6 py-3 rounded-lg mx-2 text-base font-semibold text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-150"
            >
              <Icon className="h-6 w-6" />
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar; 
