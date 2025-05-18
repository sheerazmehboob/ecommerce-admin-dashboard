import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const LowStockBanner: React.FC<{ count: number }> = ({ count }) => (
  count > 0 ? (
    <div className="flex items-center gap-2 bg-yellow-900 text-yellow-300 px-4 py-2 rounded mb-4 border border-yellow-700">
      <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
      <span> {count} product{count > 1 ? 's' : ''} low on inventory</span>
    </div>
  ) : null
);

export default LowStockBanner;
