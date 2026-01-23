import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-neutral-400 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} KANMI. All rights reserved.</p>
        <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};