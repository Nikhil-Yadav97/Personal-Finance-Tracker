import React, { useState, useRef } from 'react';
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

function ProfilePhotoSelector({ image, setImage }) {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (inputRef.current) inputRef.current.value = ''; // Reset file input
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Display default user icon or uploaded image */}
      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative">
          <LuUser className="text-4xl text-primary" />
          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center bg-gray-500 text-white absolute rounded-full -bottom-1 -right-1 hover:scale-105 transition-transform"
            onClick={onChooseFile}
          >
            <LuUpload size={14} />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
          />
          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 right-1 hover:bg-red-600 transition-colors"
            onClick={handleRemoveImage}
          >
            <LuTrash size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfilePhotoSelector;
