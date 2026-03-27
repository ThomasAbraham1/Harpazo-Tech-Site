import React from 'react';

const Card = ({
  children,
  variant = 'default',
  className = '',
  hoverEffect = false,
  ...props
}) => {
  const baseStyles = 'rounded-card overflow-hidden font-body transition-all duration-300';
  
  const variantStyles = {
    default: 'bg-white border border-gray-100 shadow-soft',
    outlined: 'bg-white border-2 border-secondary-blue/30',
    elevated: 'bg-white shadow-elevated',
    glass: 'bg-white/70 backdrop-blur-md border border-white/40 shadow-card',
  };

  const hoverStyles = hoverEffect ? 'hover:-translate-y-1 hover:shadow-card' : '';
  const classes = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
