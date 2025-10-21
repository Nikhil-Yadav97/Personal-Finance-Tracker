import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { validateEmail } from '../../utils/helper';

function Input({ value, onChange, placeholder, label, type = 'text', className = '' }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      {label && (
        <label className="text-[13px] text-gray-600 font-medium">
          {label}
        </label>
      )}

      {/* Input Field */}
      <div className={`input-box flex items-center border-b border-slate-300 py-1 ${className}`}>
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-[14px] text-slate-900 placeholder:text-slate-400"
          value={value}
          onChange={onChange}
        />

        {/* Password Toggle Icon */}
        {type === 'password' && (
          showPassword ? (
            <FaRegEye
              size={20}
              className="text-primary cursor-pointer"
              onClick={toggleShowPassword}
            />
          ) : (
            <FaRegEyeSlash
              size={20}
              className="text-slate-400 cursor-pointer"
              onClick={toggleShowPassword}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Input;
