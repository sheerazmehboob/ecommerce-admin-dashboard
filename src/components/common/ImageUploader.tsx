import React from 'react';

interface ImageUploaderProps {
  onUpload: (file: File, url: string) => void;
  previewUrl?: string;
  disabled?: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload, previewUrl, disabled }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => onUpload(file, ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        className="border rounded px-3 py-2 w-full"
        onChange={handleChange}
        disabled={disabled}
      />
      {previewUrl && <img src={previewUrl} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />}
    </div>
  );
};

export default ImageUploader; 
