import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-display font-bold tracking-widest uppercase transition-all duration-300 ease-out active:scale-95 text-sm md:text-base py-4 px-8 border-2";
  
  const variants = {
    primary: "bg-brand-yellow border-brand-yellow text-brand-dark hover:bg-white hover:border-white hover:text-black shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-none translate-y-0 hover:translate-y-1",
    outline: "bg-transparent border-white text-white hover:bg-white hover:text-black",
    ghost: "bg-transparent border-transparent text-gray-400 hover:text-brand-yellow"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};