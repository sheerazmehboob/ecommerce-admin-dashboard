import React from 'react';

interface ProductSearchBarProps {
  search: string;
  setSearch: (s: string) => void;
  category: string;
  setCategory: (c: string) => void;
  categories: string[];
}

const ProductSearchBar: React.FC<ProductSearchBarProps> = ({
  search, setSearch, category, setCategory, categories
}) => (
  <div className="flex gap-4 mb-4 flex-wrap items-center">
    <input
      type="text"
      className="border rounded px-2 py-1 text-sm bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0"
      placeholder="Search by name or category..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
    <select
      className="border rounded px-2 py-1 text-sm bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0"
      value={category}
      onChange={e => setCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  </div>
);

export default ProductSearchBar;
