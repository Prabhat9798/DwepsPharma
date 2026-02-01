'use client'

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// --- 1. The Reusable Component (Unchanged logic) ---
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
        <section className="relative py-20 bg-white text-gray-800 font-heading overflow-hidden">
            
            {/* --- DECORATIVE BACKGROUND BLOBS --- */}
            {/* These are necessary for the backdrop-blur to be visible on a white theme */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-200/40 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    
                    {/* --- DIV 1 --- */}
                    <div className="p-6 rounded-xl bg-white/40 backdrop-blur-md border border-gray-100 shadow-xl">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#049fe5]">
                            <FastAnimatedNumber value={1000} />+
                        </h3>
                        <p className="text-xl font-medium text-gray-600">Happy Customers</p>
                    </div>

                    {/* --- DIV 2 --- */}
                    <div className="p-6 rounded-xl bg-white/40 backdrop-blur-md border border-gray-100 shadow-xl">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#049fe5]">
                            <FastAnimatedNumber value={50} />+
                        </h3>
                        <p className="text-xl font-medium text-gray-600">Products</p>
                    </div>

                    {/* --- DIV 3 --- */}
                    <div className="p-6 rounded-xl bg-white/40 backdrop-blur-md border border-gray-100 shadow-xl">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#049fe5]">
                            <FastAnimatedNumber value={95} />%
                        </h3>
                        <p className="text-xl font-medium text-gray-600">Positive Feedback</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Numbers;