import React from 'react';

const Textarea = React.forwardRef(({
  label,
  error,
  helperText,
  id,
  className = '',
  rows = 4,
  ...props
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;

  return (
    <div className={`flex flex-col gap-1 w-full font-body ${className}`}>
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-primary-blue">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={`w-full px-4 py-2 border rounded-md outline-none transition-colors resize-y
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

Textarea.displayName = 'Textarea';

export default Textarea;
