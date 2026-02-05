'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // 1. Import this

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
              {card.about || `View details for ${card.name}`}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- IMAGE --- */}
      <div className="relative w-full h-52 overflow-hidden p-2 rounded-t-sm bg-gray-50 flex items-center justify-center">
        <img 
            src={card.imageUrl} 
            alt={card.name} 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-2 right-3 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
             {card.packSize || card.form}
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 text-center font-heading px-2 mt-2">
          {card.name}
        </h3>

        <Link href={`/products/${card._id}`} className="w-full">
            <button className="m-4 w-[calc(100%-2rem)] bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 font-heading">
            View Product
            </button>
        </Link>
      </div>
    </div>
  );
};

// --- 2. Inner Component (Handles Logic) ---
const ProductList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 2. Get Search Params
  const searchParams = useSearchParams();
  const formFilter = searchParams.get('form'); // Gets 'Tablet', 'Injection', etc.
  const categoryFilter = searchParams.get('category'); // Gets 'Gynecology', etc.

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/products');
            const result = await res.json();
            
            if (result.success) {
                setCards(result.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchProducts();
  }, []);

  // 3. Filter Logic
  const filteredCards = cards.filter((card) => {
      // Filter by Form (if URL has ?form=...)
      if (formFilter && card.form !== formFilter) return false;
      
      // Filter by Category (if URL has ?category=...)
      if (categoryFilter && card.category !== categoryFilter) return false;
      
      return true;
  });

  // 4. Dynamic Title
  const pageTitle = formFilter 
    ? `${formFilter}s` 
    : categoryFilter 
        ? `${categoryFilter} Products` 
        : "Our Products";

  if (loading) {
      return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-xl font-heading text-blue-600 animate-pulse">Loading Products...</div>
        </div>
      );
  }

  return (
    <section className='flex flex-col gap-10 p-4 bg-gray-50 min-h-screen'>
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 font-heading">
            {pageTitle}
        </h2>
        {/* Show 'Show All' button if filtered */}
        {(formFilter || categoryFilter) && (
            <div className="text-center mt-4">
                <Link href="/products" className="font-heading text-sm text-blue-600 hover:underline">
                    Show All Products
                </Link>
            </div>
        )}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto w-full'>
        {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
                <ProductCard key={card._id} card={card} />
            ))
        ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
                <p className="text-lg">No products found for this category.</p>
                <Link href="/products">
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        View All Products
                    </button>
                </Link>
            </div>
        )}
      </div>
    </section>
  );
};

// --- 3. Main Page (Wrapper for Suspense) ---
const Page = () => {
  return (
    // Suspense is required when using useSearchParams in Next.js
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ProductList />
    </Suspense>
  )
}

export default Page