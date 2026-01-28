import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Background: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  // Star component - 5 pointed rounded star
  const Star = ({ className }: { className: string }) => (
    <svg viewBox="0 0 100 100" className={className}>
      <path
        d="M50 5 Q55 35 80 50 Q55 65 50 95 Q45 65 20 50 Q45 35 50 5"
        fill="currentColor"
      />
    </svg>
  );

  // Simplified background for mobile
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#E2EBC4] to-transparent blur-[60px]" />
        <div className="absolute top-[40%] left-[-10%] w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-[#E2EBC4] to-transparent blur-[80px] opacity-60" />
        {/* Subtle stars on mobile */}
        <Star className="absolute top-[15%] right-[10%] w-16 h-16 text-[#E2EBC4] opacity-20 blur-[8px]" />
        <Star className="absolute top-[60%] left-[5%] w-12 h-12 text-[#E2EBC4] opacity-15 blur-[6px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid Shimmer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
        }}
      />

      {/* Abstract Matcha Shapes */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#E2EBC4] to-transparent blur-[80px]"
      />

      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E2EBC4] to-transparent blur-[100px] opacity-60"
      />

      {/* Diffused Bethlehem Stars */}
      <Star className="absolute top-[8%] left-[15%] w-24 h-24 text-[#E2EBC4] opacity-25 blur-[12px]" />
      <Star className="absolute top-[25%] right-[20%] w-20 h-20 text-[#E2EBC4] opacity-20 blur-[10px]" />
      <Star className="absolute top-[55%] left-[8%] w-16 h-16 text-[#E2EBC4] opacity-15 blur-[8px]" />
      <Star className="absolute top-[70%] right-[12%] w-28 h-28 text-[#E2EBC4] opacity-20 blur-[14px]" />
      <Star className="absolute top-[85%] left-[25%] w-18 h-18 text-[#E2EBC4] opacity-15 blur-[10px]" />

      {/* Beam texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};
