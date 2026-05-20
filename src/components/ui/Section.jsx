import React from 'react';

const Section = ({ 
  children, 
  variant = 'default', 
  padding = 'md',
  className = '', 
  ...props 
}) => {
  const paddingStyles = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
  };

  const variantStyles = {
    default: 'bg-white',
    muted: 'bg-canvas-yellow/20', // subtle yellow tint
    highlight: 'bg-canvas-yellow',
    dark: 'bg-primary-blue text-white',
    darkSecondary:'text-white bg-gradient-to-b from-primary-blue to-secondary-blue',
    darker: 'bg-slate-950 text-white',
  };

  const classes = `w-full ${paddingStyles[padding]} ${variantStyles[variant]} ${className}`;

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

export default Section;
