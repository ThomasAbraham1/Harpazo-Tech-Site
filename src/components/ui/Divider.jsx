import React from 'react';

const Divider = ({ 
  label, 
  vertical = false, 
  className = '', 
  ...props 
}) => {
  if (vertical) {
    return <div className={`w-px h-full bg-gray-200 ${className}`} {...props} />;
  }

  if (label) {
    return (
      <div className={`relative flex py-5 items-center ${className}`} {...props}>
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink-0 mx-4 text-gray-400 font-body text-sm font-medium">{label}</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>
    );
  }

  return <hr className={`border-t border-gray-200 w-full ${className}`} {...props} />;
};

export default Divider;
