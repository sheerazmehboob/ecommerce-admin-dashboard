import React from 'react';
import Modal from '../common/Modal';
import { XMarkIcon } from '@heroicons/react/24/outline';
import type { Product } from '../../types/product';

interface ProductDetailsModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  open, onClose, product
}) => (
  <Modal open={open} onClose={onClose}>
    {product && (
      <div className="relative">
        <button onClick={onClose} className="absolute top-0 right-0 m-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-full p-2 shadow focus:outline-none">
          <XMarkIcon className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center mb-4">
          <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover rounded-lg mb-2 border-2 border-gray-700" />
          <h2 className="text-2xl font-bold text-gray-100 mb-1">{product.name}</h2>
        </div>
        <div className="mb-4 text-gray-200 text-center">{product.description}</div>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <div className="bg-gray-900 rounded p-3 min-w-[120px] text-center">
            <div className="text-xs text-gray-400">Category</div>
            <div className="font-semibold text-gray-100">{product.category}</div>
          </div>
          <div className="bg-gray-900 rounded p-3 min-w-[120px] text-center">
            <div className="text-xs text-gray-400">Price</div>
            <div className="font-semibold text-gray-100">${product.price}</div>
          </div>
          <div className="bg-gray-900 rounded p-3 min-w-[120px] text-center">
            <div className="text-xs text-gray-400">Stock</div>
            <div className="font-semibold text-gray-100">{product.stock}</div>
          </div>
        </div>
      </div>
    )}
  </Modal>
);

export default ProductDetailsModal;
