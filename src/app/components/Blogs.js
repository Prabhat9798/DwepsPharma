'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Blogs = () => {
  return (
    <section className="w-full py-16 md:py-16 bg-white font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center mb-12 gap-4">
<h2 className="text-4xl font-bold lg:text-4xl relative inline-block group cursor-pointer text-blue-500">
              Health Solutions You Can Trust
            <span className="absolute left-0 -bottom-1 h-[4px] bg-blue-600 transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
          </h2>
        </div>

        {/* Cards Grid - Added 'mx-auto' here to center it */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto ">
          
          {/* --- CARD 1: INJECTION --- */}
          <Link href="/injections" className="group relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer">
            
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src="/DwepsServiceImage3.png" 
                    alt="Our Injections"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wider mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                    Our Injections
                </h3>
                <p className="text-white/80 text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View Products &rarr;
                </p>
            </div>
          </Link>


          {/* --- CARD 2: GYNECOLOGICAL --- */}
          <Link href="/products" className="group relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer">
            
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src="/DwepsServiceImage2.png" 
                    alt="Gynecological Solutions"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wider mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                    Gynecological
                </h3>
                <p className="text-white/80 text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View Products &rarr;
                </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Blogs