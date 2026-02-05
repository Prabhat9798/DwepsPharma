"use client"

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const ProductPage = () => {
    // 1. Get the ID from the URL
    const { id } = useParams();
    
    const [activeTab, setActiveTab] = useState("description");
    const [product, setProduct] = useState(null); 
    const [relatedProducts, setRelatedProducts] = useState([]); 
    const [loading, setLoading] = useState(true);

    // Review Form State
    const [rating, setRating] = useState(0);      
    const [hoverRating, setHoverRating] = useState(0); 

    const tabs = [
        { id: "description", label: "Description" },
        { id: "reviews", label: "Reviews (0)" }
    ];
    
    const sliderRef = useRef(null);

    // 2. Fetch Data & Filter Related Products
    useEffect(() => {
        const fetchProductData = async () => {
            if (!id) return;
            try {
                // A. Fetch the specific product
                const res = await fetch(`/api/products/${id}`);
                const data = await res.json();
                
                // B. Fetch all products for "Related" slider
                const resAll = await fetch('/api/products');
                const dataAll = await resAll.json();

                if (data.success) {
                    const currentProduct = data.data;
                    setProduct(currentProduct);

                    if (dataAll.success) {
                        const allItems = dataAll.data;

                        // --- UPDATED LOGIC ---
                        // 1. Filter items that have the SAME category as the current product
                        let related = allItems.filter(item => 
                            item.category === currentProduct.category && item._id !== id
                        );

                        // 2. Fallback: If found less than 3 related items, fill the rest with random products
                        if (related.length < 3) {
                            const others = allItems.filter(item => 
                                item.category !== currentProduct.category && item._id !== id
                            );
                            related = [...related, ...others];
                        }

                        setRelatedProducts(related);
                    }
                }

            } catch (error) {
                console.error("Failed to fetch product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductData();
    }, [id]);
    
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

    if (loading) return <div className="text-center py-20 font-heading text-xl">Loading...</div>;
    if (!product) return <div className="text-center py-20 font-heading text-xl text-red-500">Product Not Found</div>;

    return (
        <section className='font-heading text-gray-800 bg-white min-h-screen py-12'>
            <div className='max-w-7xl mx-auto px-4'>

                {/* --- PART 1: Product Header --- */}
                <div className='p-8 border border-gray-100 mb-10'>
                    <div className='flex flex-col md:flex-row gap-12 items-center md:items-start'>
                        {/* Image Section */}
                        <div className='w-full md:w-1/3 flex justify-center bg-gray-50 rounded-2xl p-6'>
                            <img 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className='w-full max-w-[280px] h-auto object-contain mix-blend-multiply' 
                            />
                        </div>

                        {/* Short Description Section */}
                        <div className='w-full md:w-2/3 flex flex-col gap-6'>
                            <div>
                                <h1 className='text-3xl md:text-3xl font-bold mt-3 mb-2 text-gray-900'>
                                    {product.name}
                                </h1>
                                <p className="text-lg text-gray-500 font-medium">
                                    {product.packSize || product.form}
                                </p>
                            </div>
                            <p className='text-gray-600 leading-relaxed text-base'>
                                {product.about}
                            </p>
                            <div className="pt-6 border-t border-gray-100">
                                <p className='text-sm text-gray-500'>
                                    <span className='font-semibold text-gray-900'>Categories: </span> 
                                    {product.category}, {product.form}
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
                                    {/* What Is It */}
                                    <div className='leading-loose'>
                                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>What is {product.name}?</h2>
                                        <p className="mb-4">
                                            {product.description?.whatIsIt}
                                        </p>
                                    </div>

                                    {/* When & How */}
                                    <div>
                                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>When & How to use?</h2>
                                        <p className="mb-4 leading-loose ">
                                            {product.description?.whenAndHow}
                                        </p>
                                    </div>

                                    {/* Key Uses */}
                                    <div>
                                        <h3 className='text-xl font-semibold text-gray-900 mb-4'>Key Uses</h3>
                                        <ul className='flex flex-col gap-4'>
                                            {product.description?.keyUses?.map((use, index) => (
                                                <li key={index} className="rounded-lg">
                                                    <h4 className="font-bold text-gray-900 mb-1">{index + 1}. {use}</h4>
                                                </li>
                                            ))}
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
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 uppercase mb-4">Reviews</h3>
                                        <p className="text-gray-500">There are no reviews yet.</p>
                                    </div>

                                    <div className="border border-gray-200 p-6 md:p-8 rounded-sm bg-white shadow-sm">
                                        <h3 className="text-lg font-bold text-gray-900 uppercase mb-2">
                                            Be the first to review “{product.name}”
                                        </h3>
                                        <p className="text-xs text-gray-500 mb-6">
                                            Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                                        </p>

                                        {/* Star Rating */}
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

                                        <form className="flex flex-col gap-5">
                                            <div className="flex flex-col gap-1">
                                                <label className="text-sm font-medium text-gray-700">Your review <span className="text-red-500">*</span></label>
                                                <textarea rows="4" className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 transition-colors"></textarea>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                                                <input type="text" className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 transition-colors" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                                                <input type="email" className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 transition-colors" />
                                            </div>
                                            <div className="mt-4">
                                                <button type="submit" className="bg-[#2b59c3] hover:bg-[#1e40af] text-white text-sm font-bold py-3 px-8 uppercase tracking-wide rounded-sm transition-colors shadow-md">
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

                {/* Related Products Slider */}
                <div>
                    <div>
                        <h2 className="text-xl font-medium lg:text-2xl relative inline-block group cursor-pointer text-gray-900">
                            Related Products
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

                            {relatedProducts.map((card) => (
                                // --- UPDATED CARD DESIGN (Matches Main Products Page) ---
                                <div
                                    key={card._id}
                                    className="min-w-[280px] sm:min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden 
                                            hover:shadow-xl transition-all duration-300 hover:-translate-y-1 snap-center border border-gray-100 flex flex-col"
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative h-64 p-3 bg-white flex items-center justify-center">
                                        <img 
                                            src={card.imageUrl} 
                                            alt={card.name} 
                                            className="w-full h-full object-contain" 
                                        />
                                        <div className="absolute top-3 right-3 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                            {card.packSize || card.form}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 text-center mb-4 font-heading flex items-center justify-center">
                                            {card.name}
                                        </h3>
                                        
                                        <Link href={`/products/${card._id}`} className="mt-auto w-full">
                                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-md transition-colors duration-300 font-heading">
                                                View Product
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* Right Arrow Button */}
                        <div>
                            <button
                                onClick={slideRight}
                                className="absolute right-0 z-10 p-2 rounded-full shadow-lg bg-blue-500 hover:bg-blue-700 hidden group-hover:block transition-all duration-300 focus:outline-none translate-x-1/2 "
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