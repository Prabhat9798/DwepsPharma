"use client"

import React, { useRef } from 'react'

const Products = () => {

    const sliderRef = useRef(null);

    const slideLeft = () =>{
        if(sliderRef.current){
            sliderRef.current.scrollLeft -= 300
        }
    };

    const slideRight = () =>{
        if(sliderRef.current){
            sliderRef.current.scrollLeft += 300
        }
    }

    const cards = [
        {id:1, img:"/wefi.jpeg", title:"Wefi-XT"},
        {id:2, img:"/docq.jpeg", title:"DOCQ-L"},
        {id:3, img:"/mosetal.jpeg", title:"MOSETAL-M"},
        {id:4, img:"/lute.jpeg", title:"Luteomone SR-200"},
        {id:5, img:"/lute-400.jpeg", title:"Luteomone -400"},
        {id:6, img:"/depiston.jpeg", title:"Depiston-75"}
    ]
  return (
    <section className='flex flex-col mt-10'>
      {/* littel whitish background */}
      <div></div>


      {/* main content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='text-center text-4xl'>
                <h1 className="text-xl font-bold lg:text-4xl relative inline-block group cursor-pointer text-blue-500 text-center">
                  Our Medicine
                  
                              <span className="absolute left-0 -bottom-1 h-[4px] bg-blue-600 transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
          </h1>
            </div>
                <div className='flex items-start justify-end'> 
                    <button className='font-heading bg-blue-500 px-4 py-2 rounded-md text-white cursor-pointer'>
                   <a href="/products">   
                      View All Products
                    </a>
                   </button>
                   </div>
        <div className='flex flex-col gap-8 items-center justify-center'>
           

     <div className=' relative flex items-center justify-center group'>

        {/* Left Arrow Button */}
        <div>
            <button
          onClick={slideLeft}
          className="absolute left-0 z-10 p-2 bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 hidden group-hover:block transition-all duration-300 focus:outline-none -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        </div>


        {/* Slider Container */}
        <div ref={sliderRef} className="w-full flex gap-10 overflow-x-auto scroll-smooth items-center justify-center mx-auto max-w-7xl py-4"
         style={{ 
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>

            {cards.map((card) => (
             <div
              key={card.id}
              className="min-w-[280px] h-auto bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 snap-start flex flex-col border border-1 border-gray-300"
            >

                <div className="relative w-full h-64 overflow-hidden p-2">
                <img src={card.img} alt="Image not Found" className="w-full h-full object-contain" />
                   <div className="absolute top-2 right-5 bg-blue-500 text-white text-sm px-3 py-2 rounded-full font-heading">
                  10 * 15 Tablets
                </div>
               
              </div>

              {/* content Container */}

              <div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-800  line-clamp-2 flex-grow text-center font-heading">
                  {card.title}
                </h3>

            </div>
            <button className="m-4 w-[calc(100%-2rem)] bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 font-heading">
                View Product

            </button>

            </div>
            ))}

        </div>


        {/* Right Arrow Button */}
        <div>
            <button
          onClick={slideRight}
          className="absolute right-0 z-10 p-2  rounded-full shadow-lg bg-blue-500 hover:bg-blue-700 hidden group-hover:block transition-all duration-300 focus:outline-none translate-x-1/2 "
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        </div>




            </div>
        </div>

      </div>
    </section>
  )
}

export default Products
