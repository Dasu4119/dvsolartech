import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'disabled:opacity-50 disabled:pointer-events-none ' +
    'active:scale-[0.97] cursor-pointer';

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-full ' +
      'shadow-md hover:shadow-glow-blue hover:from-brand-600 hover:to-brand-700 ' +
      'focus-visible:ring-brand-500',
    secondary:
      'bg-white text-navy-700 border border-gray-200 rounded-full ' +
      'shadow-soft hover:shadow-soft-md hover:border-brand-200 hover:text-brand-600 ' +
      'focus-visible:ring-brand-500',
    outline:
      'border-2 border-brand-500 text-brand-600 rounded-full ' +
      'hover:bg-brand-50 hover:border-brand-600 ' +
      'focus-visible:ring-brand-500',
    ghost:
      'hover:bg-gray-100 text-navy-600 rounded-xl ' +
      'focus-visible:ring-gray-400',
  };

  const sizes = {
    sm: 'h-10 px-5 text-sm gap-2',
    md: 'h-12 px-7 text-[15px] gap-2.5',
    lg: 'h-14 px-9 text-base gap-3',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
}