import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "The Essential",
    price: "Non-Alcoholic",
    features: ["2 Hours Service", "Coffee & Matcha Menu", "Transparent Cans & Cups", "1 Barista"]
  },
  {
    name: "The Signature",
    price: "Mixed Menu",
    features: ["4 Hours Service", "Coffee, Matcha & Cocktails", "Unique Packaging Options", "2 Dessert Can Options", "2 Baristas"]
  },
  {
    name: "The Bespoke",
    price: "Full Experience",
    features: ["Full Open Bar (Cocktails)", "Custom Can Labeling", "Curated Pastry Cans", "3 Baristas", "Full Branding Suite"]
  }
];

export const Packages: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-3xl font-semibold tracking-tight">Simple Pricing Models.</h2>
            <p className="text-neutral-500 mt-4">Thoughtfully designed packages, fully customizable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-[#C8DA89]/10 transition-all duration-300 relative overflow-hidden"
            >
              {idx === 1 && (
                  <div className="absolute top-0 right-0 bg-[#E2EBC4] text-[#4A5D23] text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                      Popular
                  </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
              <p className="text-sm text-neutral-500 uppercase tracking-wide mb-8">{pkg.price}</p>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-600">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center">
                        <Check size={12} className="text-neutral-900" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 border border-neutral-200 rounded-xl text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">
                Request Quote
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};