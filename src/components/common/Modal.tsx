import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40" onClick={onClose}>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md relative border border-gray-700 text-gray-100" onClick={e => e.stopPropagation()}>
        {title && <h2 className="text-lg font-semibold mb-2 text-gray-100">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Modal; 
