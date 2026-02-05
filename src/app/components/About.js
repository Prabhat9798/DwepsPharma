'use client'

import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className="w-full bg-gray-50 font-heading">
            
            {/* --- SECTION 1: MAIN INTRO --- */}
            <div className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        {/* Left Side - Text Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-4xl font-bold text-[#049fe5] mb-4">
                                    About Us
                                </h2>
                                <div className="h-1 w-20 bg-gray-800 rounded"></div>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    <span className="font-bold text-gray-900">DWEPS Pharmaceutical Pvt Ltd</span> is a progressive Indian pharmaceutical company incorporated in <span className="font-semibold">2016</span>. With a strong corporate presence in <strong>Bengaluru</strong>, the Silicon Valley of India, we have established ourselves as a trusted name in the healthcare industry.
                                </p>
                                <p>
                                    We specialize in the development, marketing, and distribution of high-quality pharmaceutical formulations across various therapeutic segments. Our journey is driven by a passion for excellence and a commitment to improving human health through innovative and affordable medical solutions.
                                </p>
                                <p>
                                    Backed by a team of dedicated professionals and state-of-the-art manufacturing partnerships, we ensure that every product that leaves our facility meets stringent global quality standards.
                                </p>
                            </div>

                            {/* Core Values List */}
                            <div className=" p-6 ">
                                <h4 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                                    Our Core Values
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        "Integrity in everything we do",
                                        "Innovation that improves lives",
                                        "Quality meeting global standards",
                                        "Compassion toward patients",
                                        "Customer-centric approach",
                                        "Ethical business practices"
                                    ].map((value, index) => (
                                        <li key={index} className="flex items-center group">
                                            <span className="text-[#049fe5] mr-2 text-xl">›</span>
                                            <span className="text-gray-700 text-sm md:text-base group-hover:text-[#049fe5] transition-colors">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                            <Image
                                src="/about.jpg"
                                alt="Pharmaceutical research and development"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                           
                        </div>
                    </div>
                </div>
            </div>

          

        </section>
    )
}

export default About