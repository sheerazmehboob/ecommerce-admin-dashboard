import React from 'react';
import Modal from '../common/Modal';
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import type { Product } from '../../types/product';

interface DeleteProductModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
  deleting: boolean;
  onDelete: () => void;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  open, onClose, product, deleting, onDelete
}) => (
  <Modal open={open} onClose={onClose}>
    {product && (
      <div className="relative p-2">
        <button onClick={onClose} className="absolute top-0 right-0 m-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-full p-2 shadow focus:outline-none">
          <XMarkIcon className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center gap-2 mb-4 mt-6">
          <ExclamationTriangleIcon className="h-10 w-10 text-yellow-400 mb-2" />
          <img src={product.imageUrl} alt={product.name} className="w-14 h-14 object-cover rounded border-2 border-gray-700" />
          <span className="font-semibold text-gray-100 text-lg mt-2">{product.name}</span>
        </div>
        <p className="text-red-400 text-sm mb-4 text-center">
          Are you sure you want to delete this product? This action cannot be undone.
        </p>
        <div className="flex gap-2 mt-2">
          <button
            className="flex-1 bg-red-600 text-white rounded px-3 py-2 font-semibold disabled:opacity-60"
            onClick={onDelete}
            disabled={deleting}
          >
            {deleting ? (
              <span className="inline-block animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : 'Delete'}
          </button>
          <button
            className="flex-1 bg-gray-700 text-gray-200 rounded px-3 py-2 font-semibold"
            onClick={onClose}
            disabled={deleting}
          >
            Cancel
          </button>
        </div>
      </div>
    )}
  </Modal>
);

export default DeleteProductModal;
