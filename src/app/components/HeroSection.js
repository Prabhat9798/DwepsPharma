'use client'

import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section 
            id="home" 
            // CHANGE 1: Changed 'justify-center' to 'justify-start'
            className="relative w-full h-screen flex items-center justify-start overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/DwepsServiceImage3.png"
                    alt="Pharmaceutical Laboratory"
                    fill
                    className="object-cover h-screen"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content Container */}
            {/* CHANGE 2: 
                - Removed 'mx-auto' (which centered the box)
                - Changed 'text-center' to 'text-left' 
                - Added 'md:ml-20' for spacing from the left edge 
            */}
            <div className="font-heading relative z-10 max-w-4xl px-6 md:ml-20 text-left">
                
                {/* Welcome Text */}
                <p className="text-white text-2xl md:text-md mb-4 font-medium font-heading">
                    Welcome to Dweps Pharmaceuticals - An Admirable Company
                </p>

                {/* Main Headline */}
                <h1 className="text-blue-500 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Innovating Healthcare,
                    
                    Enhancing Lives
                </h1>

                {/* Description Paragraph */}
                {/* CHANGE 3: Removed 'mx-auto' so the text block aligns left */}
                <p className="text-white text-sm md:text-base lg:text-base max-w-2xl leading-relaxed">
    Since our inception in November 2016, <strong>DWEPS Pharmaceutical Pvt Ltd</strong> has been at the forefront of delivering high-quality, affordable, and accessible healthcare solutions across India. 
 
    As an <strong>ISO 9001:2015 certified company</strong>, we are a trusted leader in women's healthcare, specializing exclusively in <em className="italic">advanced gynecological solutions</em>. Our portfolio features a wide range of high-efficacy <strong>injections and tablets</strong> designed to support women's health at every stage. We are dedicated to improving lives through integrity, innovation, and a relentless pursuit of excellence.
</p>
            </div>

            {/* Scroll Down Indicator - kept on the right */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-white">
                <svg
                    className="w-6 h-6 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    )
}

export default HeroSection



