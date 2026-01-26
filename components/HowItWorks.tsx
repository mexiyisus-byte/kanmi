import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-16 text-center">Seamless Execution.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-neutral-200 -z-10" />

        {[
          { step: "01", title: "Connect", subtitle: "Let's talk details.", desc: "Share your event date, guest count, and vision. We take care of the rest." },
          { step: "02", title: "Design", subtitle: "We shape the experience.", desc: "We design a menu and setup that fits your event — from drinks to presentation." },
          { step: "03", title: "Serve", subtitle: "We bring it to life.", desc: "Our team arrives, sets up, and serves — smoothly, beautifully, and on time." }
        ].map((item, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center bg-white"
            >
                <div className="w-24 h-24 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 shadow-inner">
                    <span className="text-xl font-mono font-bold text-[#8FA26A]">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-[#8FA26A] mb-2">{item.subtitle}</p>
                <p className="text-sm text-neutral-500 max-w-[220px]">{item.desc}</p>
            </motion.div>
        ))}
      </div>
    </section>
  );
};