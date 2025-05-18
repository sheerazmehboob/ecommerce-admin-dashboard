import React from 'react';

interface TopBarProps {
  pageTitle: string;
  userAvatar?: string;
}

const TopBar: React.FC<TopBarProps> = ({ pageTitle, userAvatar }) => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-900 border-b border-gray-700 w-full sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-gray-100 tracking-wide">{pageTitle}</h1>
      <div className="flex items-center gap-3">
        {userAvatar ? (
          <img src={userAvatar} alt="User Avatar" className="w-8 h-8 rounded-full object-cover border-2 border-blue-500" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 font-bold border-2 border-gray-600">A</div>
        )}
      </div>
    </header>
  );
};

export default TopBar; 
