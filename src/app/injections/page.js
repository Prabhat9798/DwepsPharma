'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';

// --- Reusable Injection Card Component ---
const InjectionCard = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative min-w-[280px] h-auto bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* --- IMAGE --- */}
      <div className="font-heading relative w-full h-56 p-4 bg-white flex items-center justify-center rounded-t-lg">
        <img 
            src={card.imageUrl} 
            alt={card.name} 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
        />
        {/* Badge */}
        <div className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
             Injection
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 text-center mb-2 font-heading">
          {card.name}
        </h3>
        
        <p className="text-sm text-gray-500 text-center mb-4 line-clamp-2">
            {card.about}
        </p>

        {/* Button */}
        <Link href={`/products/${card._id}`} className="mt-auto w-full">
            <button className="w-full bg-blue-500 hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-md transition-colors duration-300 font-heading shadow-md">
            View Details
            </button>
        </Link>
      </div>
    </div>
  );
};

// --- Main Injections Page ---
const InjectionsPage = () => {
  const [injections, setInjections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInjections = async () => {
        try {
            const res = await fetch('/api/products');
            const result = await res.json();
            if (result.success) {
                // FILTER: Only show items where form is "Injection"
                const onlyInjections = result.data.filter(item => item.form === "Injection");
                setInjections(onlyInjections);
            }
        } catch (error) {
            console.error("Error fetching injections:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchInjections();
  }, []);

  if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-xl font-heading text-red-600 font-semibold">Loading Injections...</div>
        </div>
      );
  }

  return (
    <section className='flex flex-col py-16 bg-gray-50 min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        
        {/* Header */}
        <div className='text-center mb-12 font-heading'>
            <h1 className="text-3xl lg:text-4xl font-bold relative inline-block text-gray-900">
                Injectables Range
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[4px] bg-red-600 w-24 rounded-full"></span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                High-quality, purified hormonal and supportive injectables for advanced fertility treatments.
            </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {injections.length > 0 ? (
                injections.map((inj) => (
                    <InjectionCard key={inj._id} card={inj} />
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500 py-10">
                    No injections found in the database.
                </div>
            )}
        </div>

      </div>
    </section>
  )
}

export default InjectionsPage