'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileGyneOpen, setIsMobileGyneOpen] = useState(false) // State for Mobile Sub-dropdown
    const pathname = usePathname()

    // --- Active Link Logic ---
    const getLinkClasses = (path) => {
        const isActive = pathname === path;
        return `relative px-1 py-2 text-sm font-semibold transition-colors duration-300 ${
            isActive ? "text-[#049fe5]" : "text-gray-700 hover:text-[#049fe5]"
        }`;
    };

    // --- Search Animation Logic ---
    const [inputValue, setInputValue] = useState("");
    const [index, setIndex] = useState(0);
    const fullText = "Search for Products...";

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setInputValue((prev) => prev + fullText[index])
                setIndex((prev) => prev + 1)
            }, 100)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setInputValue('')
                setIndex(0)
            }, 2000)
            return () => clearTimeout(timeout)
        }
    }, [index, fullText])

    return (
        <nav className="bg-white/95 backdrop-blur-md shadow-md w-full font-heading sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-0 ">
                <div className="flex items-center justify-between  gap-6">

                    {/* --- Logo --- */}
                    <div className="shrink-0">
                        <Link href="/" className="cursor-pointer block">
                            <Image
                                src="/dwepsl.png"
                                alt="DWEPS Logo"
                                width={110}
                                height={110}
                                className="w-24 md:w-28 h-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* --- Desktop Search Bar --- */}
                    <div className='hidden md:flex flex-1 max-w-sm bg-gray-50 border border-gray-200 rounded-full px-4 py-2 items-center focus-within:ring-2 focus-within:ring-[#049fe5]/20 focus-within:border-[#049fe5] transition-all'>
                        <input 
                            type='search' 
                            placeholder={inputValue} 
                            className='flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400'
                        />
                        <div className='bg-[#049fe5] p-1.5 rounded-full cursor-pointer hover:bg-[#038bc8] transition-colors'>
                            <Image src='/Search2.webp' alt='search' width={14} height={14} className='invert brightness-0'/>
                        </div>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className={getLinkClasses('/')}>Home</Link>
                        <Link href="/about" className={getLinkClasses('/about')}>About Us</Link>
                        <Link href="/services" className={getLinkClasses('/services')}>Services</Link>

                        {/* === PRODUCTS DROPDOWN === */}
                        <div className="relative group h-full flex items-center">
                            <Link 
                                href="/products" 
                                className={`flex items-center gap-1 ${getLinkClasses('/products')}`}
                            >
                                Products
                                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Dropdown Container (Invisible bridge included) */}
                            <div className="absolute left-0 top-full w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-visible py-2">
                                    
                                    {/* --- Nested Menu: Gynecological --- */}
                                    <div className="relative group/nested">
                                        <div className="px-5 py-3 flex items-center justify-between text-gray-700 hover:bg-gray-50 hover:text-[#049fe5] cursor-pointer transition-colors">
                                            {/* Made the header clickable too */}
                                            <Link href="/products/gynecological" className="font-medium flex-1">
                                                Gynecological Services
                                            </Link>
                                            <svg className="w-3 h-3 text-gray-400 group-hover/nested:text-[#049fe5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>

                                        {/* Desktop Sub-Menu (Side Popup) */}
                                        <div className="absolute left-full top-0 w-56 pl-2 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform -translate-x-2 group-hover/nested:translate-x-0">
                                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                                                <Link href="/products" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#049fe5] transition-colors">
                                                    Injection
                                                </Link>
                                                <Link href="/products" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#049fe5] transition-colors">
                                                    Tablets
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <Link href="/contact" className={getLinkClasses('/contact')}>Contact Us</Link>
                    </div>

                    {/* --- CTA Button --- */}
                    <div className="hidden md:flex">
                        <a 
                            href="tel:+917209121333" 
                            className="flex items-center gap-2 bg-[#049fe5] hover:bg-[#038bc8] text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg active:scale-95"
                        >
                            <Image src='/phone-call.png' alt='phone' width={16} height={16} className="invert brightness-0" />
                            <span className="text-sm">+91 72091 21333</span>
                        </a>
                    </div>

                    {/* --- Mobile Menu Toggle --- */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* --- Mobile Menu --- */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    
                    {/* Mobile Search */}
                    <div className='flex bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 mb-4'>
                        <input type='search' placeholder="Search..." className='flex-1 bg-transparent border-none outline-none text-sm' />
                        <Image src='/Search2.webp' alt='search' width={16} height={16} />
                    </div>

                    <div className="space-y-1">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#049fe5]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#049fe5]" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#049fe5]" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                        
                        {/* Mobile Products Accordion */}
                        <div className="bg-gray-50 rounded-lg p-3 mt-2">
                            <Link href="/products" className="block text-base font-bold text-[#049fe5] mb-2" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                            
                            {/* --- Gynecological Mobile Dropdown --- */}
                            <div className="pl-3 border-l-2 border-gray-200">
                                <button 
                                    onClick={() => setIsMobileGyneOpen(!isMobileGyneOpen)}
                                    className="flex items-center justify-between w-full py-2 text-sm font-bold text-gray-600 hover:text-[#049fe5]"
                                >
                                    Gynecological Services
                                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileGyneOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                {/* Collapsible Content */}
                                <div className={`overflow-hidden transition-all duration-300 ${isMobileGyneOpen ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                    <Link href="/products" className="block py-2 pl-2 text-sm text-gray-500 hover:text-[#049fe5]" onClick={() => setIsMobileMenuOpen(false)}>• Injection</Link>
                                    <Link href="/products" className="block py-2 pl-2 text-sm text-gray-500 hover:text-[#049fe5]" onClick={() => setIsMobileMenuOpen(false)}>• Tablets</Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#049fe5]" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                    </div>

                    <div className="mt-6">
                        <a href="tel:+917209121333" className="flex items-center justify-center gap-2 w-full bg-[#049fe5] text-white py-3 rounded-lg font-medium shadow-sm">
                            <Image src='/phone-call.png' alt='phone' width={18} height={18} className='invert brightness-0'/>
                            +91 72091 21333
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar