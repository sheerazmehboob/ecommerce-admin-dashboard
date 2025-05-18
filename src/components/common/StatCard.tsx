import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  color?: string;
  large?: boolean;
}

function formatValue(value: string | number) {
  if (typeof value === 'number') return Math.round(value);
  if (typeof value === 'string' && value.startsWith('$')) {
    const num = parseFloat(value.replace(/[^\d.]/g, ''));
    return `$${Math.round(num).toLocaleString()}`;
  }
  if (typeof value === 'string' && value.match(/^[-+]?\d+(\.\d+)?%$/)) {
    return value;
  }
  return value;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, color, large }) => (
  <div className={`bg-gray-800 rounded-lg shadow ${large ? 'p-10 min-w-[260px]' : 'p-6 min-w-[180px]'} flex flex-col gap-3 border-t-4 ${color ?? 'border-blue-500'}`}>
    <div className="flex items-center gap-3">
      <span className={`flex items-center justify-center ${large ? 'h-10 w-10 text-3xl' : 'h-6 w-6'} ${color ?? 'text-blue-400'}`}>{icon}</span>
      <span className={`font-semibold ${large ? 'text-lg' : 'text-sm'} text-gray-300`}>{title}</span>
    </div>
    <span className={`font-bold ${large ? 'text-4xl' : 'text-2xl'} text-gray-100`}>{formatValue(value)}</span>
    {change && <span className={`text-xs font-semibold ${change.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>{change}</span>}
  </div>
);

export default StatCard; 
