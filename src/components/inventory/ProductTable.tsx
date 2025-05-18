import React from 'react';
import { PencilSquareIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import type { Product } from '../../types/product';

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
  onView: (product: Product) => void;
  lowStockThreshold: number;
  searchBar?: React.ReactNode;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products, onEdit, onDelete, onView, lowStockThreshold, searchBar
}) => (
  <div className="flex flex-col w-full min-h-[500px]">
    {searchBar && <div className="mb-4">{searchBar}</div>}
    <div className="overflow-x-auto rounded shadow bg-gray-800 min-h-[400px] w-full flex-1">
      <table className="min-w-full text-sm text-gray-100">
      <thead>
          <tr className="bg-gray-900 text-gray-200">
          <th className="px-4 py-2 text-left">Product</th>
          <th className="px-4 py-2 text-left">Category</th>
          <th className="px-4 py-2 text-right">Price</th>
          <th className="px-4 py-2 text-right">Stock</th>
          <th className="px-4 py-2 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center py-6 text-gray-400">No products found.</td>
          </tr>
        ) : products.map(product => (
            <tr key={product.id} className="border-t border-gray-700 hover:bg-gray-700/50">
            <td className="px-4 py-2 flex items-center gap-2">
              <img src={product.imageUrl} alt={product.name} className="w-8 h-8 object-cover rounded" />
                <span className="font-medium text-gray-100">{product.name}</span>
            </td>
              <td className="px-4 py-2 text-gray-200">{product.category}</td>
              <td className="px-4 py-2 text-right text-gray-100">${product.price}</td>
              <td className={`px-4 py-2 text-right ${product.stock <= lowStockThreshold ? 'text-red-400 font-bold' : 'text-gray-100'}`}>{product.stock}</td>
            <td className="px-4 py-2 text-center">
              <button
                  className="inline-flex items-center p-1 text-blue-400 hover:bg-blue-600/20 rounded mr-1"
                title="View"
                onClick={() => onView(product)}
              >
                <EyeIcon className="h-5 w-5" />
              </button>
              <button
                  className="inline-flex items-center p-1 text-green-400 hover:bg-green-600/20 rounded mr-1"
                title="Edit Stock"
                onClick={() => onEdit(product)}
              >
                <PencilSquareIcon className="h-5 w-5" />
              </button>
              <button
                  className="inline-flex items-center p-1 text-red-400 hover:bg-red-600/20 rounded"
                title="Delete"
                onClick={() => onDelete(product)}
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
);

export default ProductTable;
