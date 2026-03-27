import React from 'react';

const Select = React.forwardRef(({
  label,
  options = [],
  error,
  helperText,
  id,
  className = '',
  placeholder = 'Select an option',
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;

  return (
    <div className={`flex flex-col gap-1 w-full font-body ${className}`}>
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-primary-blue">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          className={`w-full px-4 py-2 bg-white border rounded-md outline-none appearance-none transition-colors 
            ${hasError 
              ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
              : 'border-gray-300 focus:border-secondary-blue focus:ring-1 focus:ring-secondary-blue'
            }
            text-primary-blue`}
          {...props}
        >
          <option value="" disabled selected hidden>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom Chevron Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
          </svg>
        </div>
      </div>
      {hasError && <p className="text-xs text-red-500 mt-1">{error}</p>}
      {!hasError && helperText && <p className="text-xs text-gray-500 mt-1">{helperText}</p>}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
