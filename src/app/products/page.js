'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. Reusable Card Component ---
const ProductCard = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative min-w-[280px] h-auto bg-white rounded-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 snap-start flex flex-col border border-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* --- TOOLTIP --- */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-14 left-0 right-0 z-50 flex justify-center pointer-events-none"
          >
            <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg shadow-xl max-w-[90%] text-center relative">
              {/* Tooltip Text: Using description or fallback to title */}
              {card.description || `View details for ${card.title}`}
              
              {/* Little Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- IMAGE (Moved overflow-hidden here) --- */}
      <div className="relative w-full h-52 overflow-hidden p-2 rounded-t-sm">
        <img 
            src={card.img} 
            alt="Image not Found" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-2 right-3 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        10 * 10 Tablets
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 text-center font-heading px-2 mt-2">
          {card.title}
        </h3>

        {/* Button */}
        <a href={`/products/${card.id}`}>
            <button className="m-4 w-[calc(100%-2rem)] bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 font-heading">
            View Product
            </button>
        </a>
      </div>
    </div>
  );
};

// --- 2. Main Page Component ---
const Page = () => {
  // Added 'description' to data for the tooltip
  const cards = [
    { id: 1, img: "/wefi.jpeg", title: "Wefi-XT", description: "High-performance wireless module." },
    { id: 2, img: "/docq.jpeg", title: "DOCQ-L", description: "Advanced document management." },
    { id: 3, img: "/mosetal.jpeg", title: "MOSETAL-M", description: "Industrial grade metal alloy." },
    { id: 4, img: "/lute.jpeg", title: "Luteomone SR-200", description: "Premium audio interface." },
    { id: 5, img: "/lute-400.jpeg", title: "Luteomone -400", description: "Enhanced version with 400 series." },
    { id: 6, img: "/depiston.jpeg", title: "Depiston-75", description: "Precision engine piston." },
    { id: 7, img: "/wefi.jpeg", title: "Wefi-XT", description: "High-performance wireless module." },
    { id: 8, img: "/docq.jpeg", title: "DOCQ-L", description: "Advanced document management." },
    { id: 9, img: "/mosetal.jpeg", title: "MOSETAL-M", description: "Industrial grade metal alloy." },
    { id: 10, img: "/lute.jpeg", title: "lute", description: "Premium audio interface." },
    { id: 11, img: "/lute-400.jpeg", title: "lute-400", description: "Enhanced version with 400 series." },
    { id: 12, img: "/depiston.jpeg", title: "depiston", description: "Precision engine piston." }
  ];

  return (
    <section className='flex flex-col gap-10 p-4 bg-gray-50'>
      {/* Heading */}
      <div>
        <h2 className='text-3xl font-bold text-center text-gray-800'>Our Products</h2>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
        {cards.map((card) => (
            // Passing data to the sub-component
            <ProductCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}

export default Page