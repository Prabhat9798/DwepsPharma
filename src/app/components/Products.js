"use client"

import React, { useRef } from 'react'

const Products = () => {

    const sliderRef = useRef(null);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 300
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 300
        }
    }

    const cards = [
        { id: 1, img: "/wefi.jpeg", title: "Wefi-XT" },
        { id: 2, img: "/docq.jpeg", title: "DOCQ-L" },
        { id: 3, img: "/mosetal.jpeg", title: "MOSETAL-M" },
        { id: 4, img: "/lute.jpeg", title: "Luteomone SR-200" },
        { id: 5, img: "/lute-400.jpeg", title: "Luteomone -400" },
        { id: 6, img: "/depiston.jpeg", title: "Depiston-75" }
    ]

    return (
        <section className='flex flex-col py-12 bg-gray-50'>
            {/* Main Content Wrapper */}
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                {/* Header: Stacked on mobile, Row on Desktop */}
                <div className='flex flex-col md:flex-row  items-center justify-center mb-8 gap-6'>
                    
                    {/* Title */}
                    <div className='text-center md:text-center'>
                        <h1 className="text-3xl lg:text-4xl font-bold relative inline-block group cursor-pointer text-blue-500 text-center ">
                            Our Medicine
                            <span className="absolute left-0 -bottom-1 h-[4px] bg-blue-600 transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                        </h1>
                    </div>

                  
                </div>
                <div className='flex items-end justify-end'
                >  {/* View All Button */}
                    <a href="/products" className='w-full md:w-auto'>
                        <button className='w-full md:w-auto font-heading bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-2 rounded-md text-white shadow-md'>
                             View All Products
                        </button>
                    </a></div>

                {/* Slider Container with Relative Positioning for Arrows */}
                <div className='relative group'>

                    {/* Left Arrow - Hidden on Mobile, Flex on Desktop */}
                    <button
                        onClick={slideLeft}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 
                                   bg-blue-500 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg 
                                   items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Scroll Left"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Scrollable Card Area */}
                    {/* Note: The long class string at the end hides scrollbars using Tailwind Arbitrary values */}
                    <div
                        ref={sliderRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 snap-x snap-mandatory 
                                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="min-w-[280px] sm:min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden 
                                           hover:shadow-xl transition-all duration-300 hover:-translate-y-1 snap-center border border-gray-100 flex flex-col"
                            >
                                {/* Image Wrapper */}
                                <div className="relative h-64 p-3 bg-white flex items-center justify-center">
                                    <img 
                                        src={card.img} 
                                        alt={card.title} 
                                        className="w-full h-full object-contain" 
                                    />
                                    <div className="absolute top-3 right-3 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        10 * 15 Tablets
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2 text-center mb-4 font-heading flex items-center justify-center">
                                        {card.title}
                                    </h3>
                                    
                                    <button className="mt-auto w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-md transition-colors duration-300 font-heading">
                                        View Product
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow - Hidden on Mobile, Flex on Desktop */}
                    <button
                        onClick={slideRight}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 
                                   bg-blue-500 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg 
                                   items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Scroll Right"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Products