import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-body rounded-lg transition-colors duration-300 px-6 py-3';

  const variantStyles = {
    primary: 'bg-cinnamon-wood hover:bg-coral-glow text-cream',
    secondary: 'border border-cinnamon-wood text-cinnamon-wood hover:bg-cinnamon-wood/10',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
