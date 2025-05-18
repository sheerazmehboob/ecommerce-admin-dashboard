import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

interface OrdersRevenueChartProps {
  chartData: { label: string; orders: number; revenue: number }[];
  timeframe: string;
  onTimeframeChange?: (tf: string) => void;
  noData?: boolean;
}

const OrdersRevenueChart: React.FC<OrdersRevenueChartProps> = ({ chartData, noData }) => (
  <div className="bg-gray-800 rounded-lg shadow p-8 min-h-[340px] flex flex-col text-gray-100 relative">
    <span className="font-semibold text-lg mb-4">Orders vs Revenue Over Time</span>
    <div className="flex-1 relative">
      {noData ? (
        <div className="flex items-center justify-center h-full text-gray-400 text-lg">No data available for the selected filters.</div>
      ) : (
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={chartData} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="label" tick={{ fontSize: 13, fill: '#d1d5db' }} />
            <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 13, fill: '#d1d5db' }} allowDecimals={false} />
            <YAxis yAxisId="right" orientation="right" tickFormatter={v => `$${Number(v).toFixed(2)}`} tick={{ fontSize: 13, fill: '#d1d5db' }} />
            <Tooltip cursor={false} contentStyle={{ background: '#1f2937', border: '1px solid #374151', color: '#f3f4f6' }} labelStyle={{ color: '#60a5fa' }} formatter={(value: number, name: string) => name === 'revenue' ? `$${Number(value).toFixed(2)}` : value} />
            <Legend wrapperStyle={{ color: '#f3f4f6' }} />
          <Line yAxisId="left" type="monotone" dataKey="orders" stroke="#3B82F6" name="Orders" strokeWidth={2} />
          <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#10B981" name="Revenue" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      )}
    </div>
  </div>
);

export default OrdersRevenueChart; 
