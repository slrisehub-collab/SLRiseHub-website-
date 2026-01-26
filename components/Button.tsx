import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'outline-white' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-royal text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg shadow-blue-900/20',
    cyan: 'bg-brand-cyan text-white hover:bg-cyan-600 focus:ring-cyan-500 shadow-lg shadow-cyan-900/20',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500',
    outline: 'border-2 border-slate-200 text-slate-700 hover:border-brand-royal hover:text-brand-royal bg-transparent',
    white: 'bg-white text-brand-royal hover:bg-slate-100 focus:ring-white shadow-md',
    'outline-white': 'border-2 border-white/30 text-white hover:bg-white/10 focus:ring-white bg-transparent backdrop-blur-sm',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2 -mr-1">{icon}</span>}
    </button>
  );
};

export default Button;