'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Tilt from 'react-parallax-tilt'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(1)

    // 1. Updated Data: Added 'gender' property
    const testimonials = [
        {
            quote: "I've prescribed Dweps products for over a year now. The results in patients have been consistently positive with minimal side effects.",
            name: "Dr. Akash Patil",
            address: "Mumbai, India",
            gender: "male"
        },
        {
            quote: "We've partnered with Dweps for our clinic's pharmaceutical needs, and it's been a smooth experience. Great range and great quality!",
            name: "Sonal Gupta",
            address: "New Delhi, India",
            gender: "female"
        },
        {
            quote: "Dweps Pharmaceuticals has become our go-to supplier. Their medicines are not only effective but also reasonably priced. Truly dependable!",
            name: "Dr. Anjali Mehta",
            address: "Bengaluru, India",
            gender: "female"
        },
        {
            quote: "The quality of packaging and the efficacy of the drugs are top-notch. My patients have shown great recovery rates.",
            name: "Dr. Rajesh Kumar",
            address: "Chennai, India",
            gender: "male"
        },
        {
            quote: "Reliable service and excellent product standards. Highly recommended for fellow practitioners.",
            name: "Dr. Priya Singh",
            address: "Pune, India",
            gender: "female"
        }
    ]

    // Determine how many items to show based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3) // Desktop
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2) // Tablet
            } else {
                setItemsPerPage(1) // Mobile
            }
        }

        // Initial check
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Navigation Logic
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + 1
        )
    }, [itemsPerPage, testimonials.length])

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1
        )
    }

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(timer)
    }, [nextSlide])

    const goToSlide = (index) => {
        // Ensure we don't go out of bounds
        if (index + itemsPerPage <= testimonials.length) {
            setCurrentIndex(index)
        } else {
            setCurrentIndex(testimonials.length - itemsPerPage)
        }
    }

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden font-heading">
            {/* Background with gradient and pattern */}
           

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-4 relative inline-block group cursor-pointer">
                        Our Reputation Speaks
                        <span className="absolute left-0 -bottom-1 h-[4px] bg-blue-600 transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    
                    {/* Previous Button */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-blue-600 shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    {/* Next Button */}
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-blue-600 shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    {/* Slider Track */}
                    <div className="overflow-hidden px-2 py-4"> {/* Added py-4 to accommodate hover effects/shadows */}
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ 
                                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` 
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div 
                                    key={index} 
                                    className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/3"
                                    // Use calc to handle spacing if needed, but percentages work well here
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {/* We only create enough dots for the number of possible start positions */}
                        {Array.from({ length: testimonials.length - itemsPerPage + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    currentIndex === index
                                        ? 'w-4 h-4 bg-[#1a237e]'
                                        : 'w-2 h-2 bg-[#90caf9] hover:bg-[#64b5f6]'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
    return (
        <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            glareColor='#ffffff'
            glarePosition='all'
            glareBorderRadius='8px'
            className='h-full'
        >
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl p-6 md:p-8 h-full flex flex-col justify-between transform transition-transform duration-300 border border-white/50">
                
                <div>
                    <div className='flex items-center justify-between mb-4'>
                        
                        {/* 2. REPLACED IMAGE WITH AVATAR ICONS */}
                        <div className="relative w-16 h-16 flex-shrink-0">
                            {testimonial.gender === 'male' ? (
                                <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center border-2 border-[#1a237e] text-[#1a237e]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="w-full h-full rounded-full bg-pink-100 flex items-center justify-center border-2 border-[#1a237e] text-[#1a237e]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Star Rating */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 text-yellow-400 drop-shadow-sm"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Name & Address */}
                    <div className="mb-4">
                        <p className="text-[#1a237e] font-heading font-bold text-lg relative z-10">
                            {testimonial.name}
                        </p>
                        <p className='font-heading text-sm text-gray-600 font-medium'>
                            {testimonial.address}
                        </p>
                    </div>
                </div>

                {/* Quote */}
                <div className="relative">
                    <p className="text-gray-800 font-heading text-sm md:text-base leading-relaxed relative z-10 italic">
                        "{testimonial.quote}"
                    </p>
                </div>
            </div>
        </Tilt>
    )
}

export default Testimonials