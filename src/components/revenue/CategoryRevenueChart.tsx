import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface CategoryRevenueChartProps {
  categoryData: { category: string; revenue: number }[];
  noData?: boolean;
}

const CategoryRevenueChart: React.FC<CategoryRevenueChartProps> = ({ categoryData, noData }) => (
  <div className="bg-gray-800 rounded-lg shadow p-8 min-h-[340px] flex flex-col text-gray-100 relative">
    <span className="font-semibold text-lg mb-4">Category-wise Revenue</span>
    <div className="flex-1 relative">
      {noData ? (
        <div className="flex items-center justify-center h-full text-gray-400 text-lg">No data available for the selected filters.</div>
      ) : (
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={categoryData} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="category" tick={{ fontSize: 13, fill: '#d1d5db' }} />
            <YAxis tickFormatter={v => `$${Number(v).toFixed(2)}`} tick={{ fontSize: 13, fill: '#d1d5db' }} />
            <Tooltip cursor={false} contentStyle={{ background: '#1f2937', border: '1px solid #374151', color: '#f3f4f6' }} labelStyle={{ color: '#60a5fa' }} formatter={(value: number) => `$${Number(value).toFixed(2)}`} />
            <Legend wrapperStyle={{ color: '#f3f4f6' }} />
          <Bar dataKey="revenue" fill="#3B82F6" name="Revenue" />
        </BarChart>
      </ResponsiveContainer>
      )}
    </div>
  </div>
);

export default CategoryRevenueChart; 
