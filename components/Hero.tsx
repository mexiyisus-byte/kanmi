import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowDown, MessageCircle, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      
      {/* Brand Wordmark (Absolute Top) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-0 right-0 flex justify-between items-center px-8 md:px-12 z-50"
      >
        <span className="text-xl font-bold tracking-tighter">KANMI.</span>
        <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-500">
          <a href="#concept" className="hover:text-black transition-colors">Concept</a>
          <a href="#menu" className="hover:text-black transition-colors">Menu</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Side */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase bg-[#E2EBC4] text-[#4A5D23] rounded-full">
              Curated Event Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8 text-neutral-900"
          >
            Design to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500">
              Spark.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-500 max-w-md mb-10 leading-relaxed font-light"
          >
            Specialty coffee, desserts, and cocktails served in unique ways. A premium experience designed for taste & views.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href="#contact">
                <Button>
                Book Your Date
                </Button>
            </a>
            <a href="https://wa.me/5635801913" target="_blank" rel="noreferrer">
                <Button variant="secondary" className="flex items-center gap-2">
                <MessageCircle size={18} />
                Plan Your Event
                </Button>
            </a>
          </motion.div>
        </div>

        {/* Visual Side (Floating Product) */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center h-[50vh] lg:h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Floating Animation */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 md:w-80 aspect-[3/4]"
            >
                {/* Product Image Placeholder - Represents a sleek matcha drink */}
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-[#C8DA89]/30 bg-white relative">
                   <img
                    src="/kanmi-can.jpg"
                    alt="KANMI Signature Drink"
                    className="w-full h-full object-contain"
                   />
                   <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <p className="text-xs font-bold text-neutral-900 uppercase tracking-widest">Unique Packaging</p>
                   </div>
                </div>
            </motion.div>
          </motion.div>
          
          {/* Decorative Elements behind product */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-[#E2EBC4]/30 to-transparent rounded-full blur-3xl -z-10" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Scroll</span>
        <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <ArrowDown size={16} className="text-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};