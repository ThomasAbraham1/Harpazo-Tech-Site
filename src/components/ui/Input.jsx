import React from 'react';

const Input = React.forwardRef(({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;

  return (
    <div className={`flex flex-col gap-1 w-full font-body ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-primary-blue">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={`w-full px-4 py-2 border rounded-md outline-none transition-colors 
          ${hasError 
            ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
            : 'border-gray-300 focus:border-secondary-blue focus:ring-1 focus:ring-secondary-blue'
          }
          text-primary-blue placeholder:text-gray-400`}
        {...props}
      />
      {hasError && <p className="text-xs text-red-500 mt-1">{error}</p>}
      {!hasError && helperText && <p className="text-xs text-gray-500 mt-1">{helperText}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
