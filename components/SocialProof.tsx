import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
    "The transparent cans were such a unique touch!",
    "The Mojito in a can was the highlight of the night.",
    "KANMI elevated our wedding entirely.",
    "The dessert cans were aesthetically perfect.",
    "Professional, clean, and so tasty.",
    "Guests loved the option between cans and cups."
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 overflow-hidden bg-[#F5F7EF]">
      <div className="flex whitespace-nowrap">
        <motion.div 
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
            {[...reviews, ...reviews].map((review, i) => (
                <div key={i} className="flex items-center gap-4">
                    <span className="text-2xl md:text-4xl font-light text-neutral-400 opacity-60 italic">"{review}"</span>
                    <div className="w-2 h-2 rounded-full bg-[#8FA26A]" />
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};