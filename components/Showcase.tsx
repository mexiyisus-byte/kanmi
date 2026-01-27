import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Salted Caramel Latte', category: 'Signature', image: '/salted-caramel.jpg', size: 'tall-left' },
  { id: 2, title: 'Mojito', category: 'Cocktail', image: '/mojito.jpg', size: 'small' },
  { id: 3, title: 'Japanese Pudding', category: 'Dessert', image: '/japanese-pudding.jpg', size: 'small' },
  { id: 4, title: 'Strawberry Matcha', category: 'Signature', image: '/strawberry-matcha.jpg', size: 'tall-right' },
  { id: 5, title: 'a', category: 'Signature', image: '/drink-a.jpg', size: 'small' },
  { id: 6, title: 'b', category: 'Signature', image: '/drink-b.jpg', size: 'small' },
];

export const Showcase: React.FC = () => {
  return (
    <section id="menu" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">Our Palette.</h2>
            <p className="text-neutral-500 max-w-lg">A curated selection of drinks and sweets inspired by global flavors. <span className="text-[#8FA26A] font-medium">Layered flavors made for modern celebrations.</span></p>
        </div>
        <div className="hidden md:block text-right">
            <span className="text-xs uppercase tracking-widest text-neutral-400">Scroll to explore</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative group rounded-2xl overflow-hidden bg-neutral-100 h-full cursor-pointer
              ${item.size === 'tall-left' || item.size === 'tall-right' ? 'md:row-span-2' : ''}
            `}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 p-6 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};