import React from 'react';

interface DateRangeOption {
  label: string;
  value: number;
}

interface DateRangeFilterProps {
  dateRange: number;
  onDateRangeChange: (value: number) => void;
  options: DateRangeOption[];
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ dateRange, onDateRangeChange, options }) => (
  <div className="flex gap-2">
    {options.map(r => (
      <button
        key={r.value}
        className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors duration-150 
          ${dateRange === r.value ? 'bg-blue-600 text-white shadow' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}
        onClick={() => onDateRangeChange(r.value)}
      >
        {r.label}
      </button>
    ))}
  </div>
);

export default DateRangeFilter; 
