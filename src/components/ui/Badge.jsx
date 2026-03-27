import React from 'react';

const Badge = ({
  children,
  variant = 'solid',
  color = 'accent-orange', // Default maps to our primary accent
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-pill text-xs font-bold font-body uppercase tracking-wide';
  
  // Custom mapping for our specific palette to ensure accessibility
  const colorMap = {
    'accent-orange': {
      solid: 'bg-accent-orange text-primary-blue',
      outline: 'border border-accent-orange text-accent-orange',
      soft: 'bg-accent-orange/10 text-accent-orange',
    },
    'primary-blue': {
      solid: 'bg-primary-blue text-white',
      outline: 'border border-primary-blue text-primary-blue',
      soft: 'bg-primary-blue/10 text-primary-blue',
    },
    'secondary-blue': {
      solid: 'bg-secondary-blue text-white',
      outline: 'border border-secondary-blue text-secondary-blue',
      soft: 'bg-secondary-blue/10 text-secondary-blue',
    },
    'canvas-yellow': {
      solid: 'bg-canvas-yellow text-primary-blue',
      outline: 'border border-canvas-yellow text-primary-blue', // Usually hard to read, included for completeness
      soft: 'bg-canvas-yellow/50 text-primary-blue',
    }
  };

  const selectedColor = colorMap[color] || colorMap['primary-blue'];
  const variantStyles = selectedColor[variant];
  const classes = `${baseStyles} ${variantStyles} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
