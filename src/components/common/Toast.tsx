import React, { useEffect } from 'react';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className={`fixed top-6 right-6 z-50 px-4 py-2 rounded shadow text-white text-base font-semibold 
      ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>{message}</div>
  );
};

export default Toast; 
