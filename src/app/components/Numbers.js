'use client'

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image"; // Import Next.js Image component

// --- 1. The Reusable Component (Unchanged) ---
const FastAnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const spring = useSpring(0, { mass: 1, stiffness: 150, damping: 40 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

// --- 2. The Main Section ---
const Numbers = () => {
    return (
        // Added 'relative' to contain the absolute image
        <section className="relative py-24 bg-white font-heading overflow-hidden">
            
            {/* --- BACKGROUND IMAGE LAYER --- */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/banner.jpg" // Replace with your specific background image path
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-100" // opacity-15 makes it see-through/transparent
                    priority
                />
                {/* Optional: A gradient overlay to ensure text remains readable if image is too busy */}
                <div className="absolute inset-0 bg-black/60 "></div>
            </div>

            {/* --- CONTENT LAYER (z-10 puts this above the image) --- */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    
                    {/* --- DIV 1 --- */}
                    <div className="p-6">
                        <h3 className="text-4xl md:text-5xl font-bold mb-2 text-[#049fe5]">
                            <FastAnimatedNumber value={1000} />+
                        </h3>
                        <p className="text-xl font-bold text-white">Happy Customers</p>
                    </div>

                    {/* --- DIV 2 --- */}
                    <div className="p-6">
                        <h3 className="text-4xl md:text-5xl font-bold mb-2 text-[#049fe5]">
                            <FastAnimatedNumber value={50} />+
                        </h3>
                        <p className="text-xl font-bold text-white">Products</p>
                    </div>

                    {/* --- DIV 3 --- */}
                    <div className="p-6">
                        <h3 className="text-4xl md:text-5xl font-bold mb-2 text-[#049fe5]">
                            <FastAnimatedNumber value={95} />%
                        </h3>
                        <p className="text-xl font-bold text-white">Positive Feedback</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Numbers;