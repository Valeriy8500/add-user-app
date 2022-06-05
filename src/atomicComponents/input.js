import React from 'react';

export const Input = ({
  id,
  className,
  type,
  placeholder,
  required,
  onChange,
  value,
  ...props
}) => {

  return (
    <div>
      <input
        {...props}
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value === null || value === undefined ? '' : value}
      />
    </div>
  );
};