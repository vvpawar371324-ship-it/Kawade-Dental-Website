import React from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'outline' | 'ghost' | 'dark';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#0077b6] hover:bg-[#00b4d8] text-white shadow-md hover:shadow-lg',
  outline:
    'border-2 border-[#0077b6] text-[#0077b6] hover:bg-[#0077b6] hover:text-white',
  ghost:
    'text-[#0077b6] hover:bg-[#0077b6]/10',
  dark:
    'bg-[#1f2937] hover:bg-[#374151] text-white shadow-md',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  as: Tag = 'button',
  href,
  target,
  rel,
  className = '',
  ...rest
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-full
    transition-all duration-300 cursor-pointer select-none
    focus-visible:outline-2 focus-visible:outline-offset-2
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (Tag === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      {...(rest as React.ComponentProps<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
