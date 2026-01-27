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

  // Simplified background for mobile
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#E2EBC4] to-transparent blur-[60px]" />
        <div className="absolute top-[40%] left-[-10%] w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-[#E2EBC4] to-transparent blur-[80px] opacity-60" />
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

      {/* Beam texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};
