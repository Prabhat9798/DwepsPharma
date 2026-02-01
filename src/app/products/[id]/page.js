'use client'
import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("description");
    
    // --- State for the Review Form ---
    const [rating, setRating] = useState(0);      // Selected rating
    const [hoverRating, setHoverRating] = useState(0); // Hovered rating

    const tabs = [
        { id: "description", label: "Description" },
        { id: "reviews", label: "Reviews (0)" }
    ];
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
            {id:1, img:"/wefi.jpeg", title:"Wefi"},
            {id:2, img:"/docq.jpeg", title:"Docq"},
            {id:3, img:"/mosetal.jpeg", title:"mosetal"},
            {id:4, img:"/lute.jpeg", title:"lute"},
            {id:5, img:"/lute-400.jpeg", title:"lute-400"},
            {id:6, img:"/depiston.jpeg", title:"depiston"}
        ]

    return (
        <section className='font-heading text-gray-800 bg-white min-h-screen py-12'>
            <div className='max-w-7xl mx-auto px-4'>

                {/* --- PART 1: Product Header (Unchanged) --- */}
                <div className='p-8 border border-gray-100 mb-10'>
                    <div className='flex flex-col md:flex-row gap-12 items-center md:items-start'>
                        {/* Image Section */}
                        <div className='w-full md:w-1/3 flex justify-center bg-gray-50 rounded-2xl p-6'>
                            <img 
                                src='/docq.jpeg' 
                                alt='Product Image' 
                                className='w-full max-w-[280px] h-auto object-contain mix-blend-multiply' 
                            />
                        </div>

                        {/* Short Description Section */}
                        <div className='w-full md:w-2/3 flex flex-col gap-6'>
                            <div>
                                {/* <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    In Stock
                                </span> */}
                                <h1 className='text-3xl md:text-3xl font-bold mt-3 mb-2 text-gray-900'>
                                    FOLLISTI-SURE HP-FSH Injection
                                </h1>
                                <p className="text-lg text-gray-500 font-medium">Urofollitropin 75 IU</p>
                            </div>
                            <p className='text-gray-600 leading-relaxed text-base'>
                                Follisti Sure HP 75/150 IU Injection is used in the treatment of female infertility. It is used in women who have a problem with ovulation or are undergoing fertility treatments like in-vitro fertilization. This injection is administered under the supervision of a healthcare professional.
                            </p>
                            <div className="pt-6 border-t border-gray-100">
                                <p className='text-sm text-gray-500'>
                                    <span className='font-semibold text-gray-900'>Categories: </span> 
                                    Tablet, New Arrival
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --- PART 2: Tabs & Details --- */}
                <div className='bg-white overflow-hidden'>
                    
                    {/* Tab Navigation */}
                    <div className='flex border-b border-gray-200'>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    relative px-8 py-5 text-lg font-medium transition-colors duration-200 outline-none
                                    ${activeTab === tab.id ? "text-blue-600" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}
                                `}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Area */}
                    <div className='p-8 md:p-12'>
                        <AnimatePresence mode='wait'>
                            {activeTab === "description" ? (
                                <motion.div
                                    key="description"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="max-w-4xl space-y-8 text-gray-700 leading-relaxed"
                                >
                                    <div className='leading-loose'>
                                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>FOLLISTI-SURE HP-FSH Injection</h2>
                                        <p className="mb-4">
                                            If you’re starting fertility remedy, your medical doctor may prescribe <strong>FOLLISTI-SURE HP 75 IU</strong>—a purified Follicle Stimulating Hormone (FSH) injection designed to help your frame produce and mature eggs.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>What is FOLLISTI-SURE HP-FSH Injection?</h2>
                                        <p className="mb-4 leading-loose ">
                                           FOLLISTI-SURE HP-FSH Injection is a highly purified preparation of Follicle Stimulating Hormone (FSH) containing Urofollitropin 75 IU.
                                           <br/>

                                            Key Purpose: It is a fertility medication used to treat female infertility. Its main function is to mimic the body's natural hormones to stimulate the ovaries to produce and mature healthy eggs.
                                        </p>
                                    </div>
                                    <div className='leading-loose'>
                                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>When & How to use ?</h2>
                                        <p className="mb-4">
                                           The injection is typically started on Day 2 or Day 3 of your menstrual cycle and used once daily under medical supervision.
                                        </p>
                                        <h4> Administration Details:</h4>
                                        <ul className='list-disc space-y-2 pl-2'>
                                            <li>
                                                Route: Subcutaneous injection (below the skin)
                                            </li>
                                            <li>
                                                Common Sites: Lower abdomen or upper thigh
                                            </li>
                                            <li>
                                                Frequency: Daily (7–12 days on common)
                                            </li>
                                            <li>
                                                Monitoring: Regular ultrasounds blood exams (estradiol, LH stages)
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold text-gray-900 mb-4'>Key Uses</h3>
                                        <ul className='flex flex-col gap-4'>
                                            <li className=" rounded-lg ">
                                                <h4 className="font-bold text-gray-900 mb-1">1. Ovulation Induction (OI)</h4>
                                                <p className="text-sm">Stimulates ovaries to release an egg naturally.</p>
                                            </li>
                                            <li className=" rounded-lg ">
                                                <h4 className="font-bold text-gray-900 mb-1">2. Controlled Ovarian Hyper-Stimulation</h4>
                                                <p className="text-sm">Encourages development of multiple eggs for IVF.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            ) : (
                                // --- REVIEWS TAB ---
                                <motion.div
                                    key="reviews"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left"
                                >
                                    {/* --- LEFT COLUMN: EXISTING REVIEWS --- */}
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 uppercase mb-4">Reviews</h3>
                                        <p className="text-gray-500">There are no reviews yet.</p>
                                    </div>

                                    {/* --- RIGHT COLUMN: REVIEW FORM --- */}
                                    <div className="border border-gray-200 p-6 md:p-8 rounded-sm bg-white shadow-sm">
                                        <h3 className="text-lg font-bold text-gray-900 uppercase mb-2">
                                            Be the first to review “FOLLISTI-SURE HP-FSH”
                                        </h3>
                                        <p className="text-xs text-gray-500 mb-6">
                                            Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                                        </p>

                                        {/* Star Rating Input */}
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="text-sm font-medium text-gray-700">Your rating <span className="text-red-500">*</span> :</span>
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => setRating(star)}
                                                        onMouseEnter={() => setHoverRating(star)}
                                                        onMouseLeave={() => setHoverRating(0)}
                                                        className="focus:outline-none"
                                                    >
                                                        <svg 
                                                            xmlns="http://www.w3.org/2000/svg" 
                                                            viewBox="0 0 24 24" 
                                                            fill="currentColor" 
                                                            className={`w-5 h-5 transition-colors duration-150 ${
                                                                star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'
                                                            }`}
                                                        >
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Form Fields */}
                                        <form className="flex flex-col gap-5">
                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="review" className="text-sm font-medium text-gray-700">Your review <span className="text-red-500">*</span></label>
                                                <textarea 
                                                    id="review"
                                                    rows="4" 
                                                    className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                                ></textarea>
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                                                <input 
                                                    type="text" 
                                                    id="name"
                                                    className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 transition-colors" 
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                                                <input 
                                                    type="email" 
                                                    id="email"
                                                    className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 transition-colors" 
                                                />
                                            </div>

                                            <div className="flex items-start gap-3 mt-2">
                                                <input type="checkbox" id="save-info" className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                                <label htmlFor="save-info" className="text-sm text-gray-600 cursor-pointer">
                                                    Save my name, email, and website in this browser for the next time I comment.
                                                </label>
                                            </div>

                                            <div className="mt-4">
                                                <button 
                                                    type="submit" 
                                                    className="bg-[#2b59c3] hover:bg-[#1e40af] text-white text-sm font-bold py-3 px-8 uppercase tracking-wide rounded-sm transition-colors shadow-md"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>

                {/* Related Products */}

                <div>
                    <div>
  <h2 className="text-xl font-medium lg:text-2xl relative inline-block group cursor-pointer text-gray-900">
    Related Products
    
    {/* The Underline Span - Fixed to use width animation */}
    <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
  </h2>
</div>
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
                   <div className="absolute top-4 right-5 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-heading">
                  10*15
                </div>
               
              </div>

              {/* content Container */}

              <div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-800  line-clamp-2 flex-grow text-center font-heading">
                  {card.title}
                </h3>

            </div>
            <button className="m-4 w-[calc(100%-2rem)] bg-indigo-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 font-heading">
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

export default ProductPage