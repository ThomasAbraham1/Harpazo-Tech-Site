import React from 'react';

export const Heading = ({
  level = 2,
  children,
  className = '',
  gradient = false,
  ...props
}) => {
  const Tag = `h${level}`;
  
  const baseStyles = 'font-heading font-bold text-primary-blue tracking-tight';
  const sizeStyles = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl',
  };

  const gradientStyles = gradient ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-secondary-blue' : '';
  
  const classes = `${baseStyles} ${sizeStyles[level]} ${gradientStyles} ${className}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export const Text = ({
  size = 'base',
  subtle = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-body font-light text-primary-blue leading-relaxed';
  const sizeStyles = {
    xs: 'text-[8px]',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const colorStyle = subtle ? 'opacity-70' : '';
  const classes = `${baseStyles} ${sizeStyles[size]} ${colorStyle} ${className} tracking-widest`;

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
