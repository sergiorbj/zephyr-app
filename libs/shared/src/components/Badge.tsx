import React from 'react';

export interface BadgeProps {
  variant: 'premium' | 'outOfStock' | 'inStock';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant,
  children,
  className = '',
}) => {
  const baseStyles = 'rounded-full font-mono text-xs px-3 py-1 inline-block';

  const variantStyles = {
    premium: 'bg-gold text-pitch-black',
    outOfStock: 'bg-error text-cream',
    inStock: 'bg-success text-cream',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
