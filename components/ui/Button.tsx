import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  
  if (variant === 'primary') {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative group px-8 py-4 bg-neutral-900 text-white rounded-full font-medium text-sm tracking-wide overflow-hidden ${className}`}
        {...props}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C8DA89] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md" />
        
        {/* Border Beam Logic */}
        <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#C8DA89]/50 transition-colors duration-300" />
        
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,0,0,0.05)' }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-4 text-neutral-900 border border-neutral-200 rounded-full font-medium text-sm tracking-wide transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};