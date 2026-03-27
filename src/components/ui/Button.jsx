import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-body font-bold rounded-btn transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const variantStyles = {
    primary: 'bg-accent-orange text-primary-blue hover:opacity-90 active:scale-95 focus:ring-accent-orange',
    secondary: 'bg-secondary-blue text-white hover:bg-opacity-90 active:scale-95 focus:ring-secondary-blue',
    outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white active:scale-95 focus:ring-primary-blue',
    ghost: 'text-primary-blue hover:bg-primary-blue/10 active:scale-95 focus:ring-primary-blue',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed active:scale-100' : '';

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`;

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
