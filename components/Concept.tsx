import React from 'react';
import { motion } from 'framer-motion';

export const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-32 px-6 bg-white relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-[#8FA26A] uppercase tracking-widest mb-8 block"
        >
          Who We Are
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-medium leading-tight text-neutral-900 mb-12"
        >
          We bring a <span className="italic font-serif text-[#8FA26A]">curated aesthetic</span> to your most important moments. Not just a service, but a premium visual experience.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-left">
            {[
                { title: "Unique Packaging", desc: "Enjoy the view with our signature transparent cans or opt for traditional cups. A stunning way to serve coffee, cocktails, and desserts." },
                { title: "Curated Menu", desc: "From ceremonial matcha and specialty coffee to refreshing alcoholic beverages like Mojitos." },
                { title: "Personalized Service", desc: "Baristas and mixologists who offer a personalized experience, elevating the atmosphere of your event." }
            ].map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="group"
                >
                    <div className="h-px w-full bg-neutral-200 mb-6 group-hover:bg-[#8FA26A] transition-colors duration-500 origin-left" />
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};