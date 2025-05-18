import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  error?: string;
  textarea?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type = 'text', value, onChange, disabled, error, textarea }) => (
  <div>
    <label className="block font-semibold mb-1 text-gray-200" htmlFor={name}>{label}</label>
    {textarea ? (
      <textarea
        id={name}
        name={name}
        className={`border rounded px-3 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0 ${error ? 'border-red-500' : ''}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        className={`border rounded px-3 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0 ${error ? 'border-red-500' : ''}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    )}
    {error && <div className="text-red-400 text-xs mt-1">{error}</div>}
  </div>
);

export default FormInput; 
