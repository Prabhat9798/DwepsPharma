'use client'
import Image from 'next/image'
import React from 'react'
import Numbers from '../components/Numbers'
import WhyChooseUs from '../components/WhyChooseUs'

const page = () => {
   return (
    <>
    <section className="relative w-full overflow-hidden">
    
    {/* 1. BACKGROUND CONTAINER (Order doesn't strictly matter if we use z-index, but putting it first is cleaner) */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#e3f2fd] via-[#bbdefb] to-[#90caf9] z-0">
        
        {/* Hexagonal grid pattern */}
        <div
            className="absolute inset-0 opacity-0"
            style={{
                backgroundImage: `
                    linear-gradient(30deg, rgba(4, 159, 229, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(4, 159, 229, 0.1) 87.5%, rgba(4, 159, 229, 0.1)),
                    linear-gradient(150deg, rgba(4, 159, 229, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(4, 159, 229, 0.1) 87.5%, rgba(4, 159, 229, 0.1)),
                    linear-gradient(30deg, rgba(4, 159, 229, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(4, 159, 229, 0.1) 87.5%, rgba(4, 159, 229, 0.1)),
                    linear-gradient(150deg, rgba(4, 159, 229, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(4, 159, 229, 0.1) 87.5%, rgba(4, 159, 229, 0.1))
                `,
                backgroundSize: '80px 140px',
                backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
            }}
        />

        
    </div>

    {/* 2. TEXT CONTENT (Added 'relative' and 'z-10') */}
    <div className='relative z-10 font-heading flex flex-col items-center justify-center px-4 py-12 lg:py-20 md:py-16 gap-4 text-center'>
        <h2 className='text-2xl md:text-4xl font-medium text-[#1a237e]'>
            About Us
        </h2>
        
        {/* Breadcrumb style */}
        <p className="text-lg font-medium text-[#049fe5]">
            Home / About 
        </p>

      
    </div>

    </section>
     <section className='max-w-6xl items-center font-heading justify-center mx-auto mb-8 '>
       <div className="text-center mt-4 mb-4 ">
    {/* 1. 'inline-block' makes the box only as wide as the text */}
    {/* 2. 'relative group' allows us to position the line relative to this specific text */}
    <h2 className="relative group inline-block font-heading font-bold text-2xl ">
        
        About DwepsPharma Pvt. Ltd.
        
        {/* The Animated Underline */}
        {/* 'absolute bottom-0' places it at the very bottom of the text */}
        {/* 'left-0 w-full' ensures it matches the text width exactly */}
        {/* 'h-0.5' sets a nice thickness (2px) */}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
    </h2>
    </div>

        <div>
            <div className="flex flex-col gap-6 text-justify text-gray-800 leading-relaxed px-4">
  
  {/* Paragraph 1 */}
  <div>
    <p>
      Established in 2016, DWEPS Pharmaceutical Pvt. Ltd. is a forward-thinking Indian pharmaceutical company headquartered in Jamshedpur, Jharkhand, with a growing corporate footprint. Since our inception, we have been steadfast in our dedication to delivering innovative, high-quality, and affordable healthcare solutions that improve and extend lives across the nation.
    </p>
  </div>

  {/* Paragraph 2 */}
  <div>
    <p>
      <span className="font-bold text-black block mb-1">Visionary Leadership & Expertise</span>
      Under the dynamic leadership of our directors, Mr. Vishal Sachdev and Ms. Ekta Chachra, DWEPS has evolved from a promising entrant into a robust player in the pharmaceutical landscape. Their strategic vision drives our mission to bridge the gap between advanced medical science and accessible patient care.
    </p>
  </div>

  {/* Paragraph 3 */}
  <div>
    <p>
      <span className="font-bold text-black block mb-1">Comprehensive Therapeutic Portfolio</span>
      Specializing in the development, manufacturing, and marketing of a wide range of pharmaceutical formulations, DWEPS caters to diverse and critical therapeutic segments. While we are renowned for our solutions , Pediatrics, Dermatology, and Gynecology, we have also established a strong niche in:
    </p>
    {/* List moved OUTSIDE the <p> tag for valid HTML and perfect alignment */}
    <ol className="list-decimal list-outside pl-5 flex flex-col gap-2 mt-2">
      <li className="pl-1">
        <strong>Critical Care:</strong> High-efficacy injectables including anti-infectives and antibiotics (e.g., Tigecycline, Aztreonam).
      </li>
      <li className="pl-1">
        <strong>Dental Solutions:</strong> Innovative dental chairs and equipment.
      </li>
      <li className="pl-1">
        <strong>Chronic Disease Management:</strong> Targeted therapies for long-term patient wellness.
      </li>
    </ol>
  </div>

  {/* Paragraph 4 */}
  <div>
    <p>
      <span className="font-bold text-black block mb-1">Commitment to Quality & Safety</span>
      Our products undergo rigorous quality control processes and are formulated to meet stringent national and international regulatory standards. We believe that quality is non-negotiable. By leveraging advanced technologies, a skilled R&D team, and a robust distribution network, we ensure the timely and consistent delivery of safe, effective medicines to every corner of India.
    </p>
  </div>

  {/* Paragraph 5 */}
  <div>
    <p>
      <span className="font-bold text-black block mb-1">Our Core Values</span>
      Our operations are guided by a commitment to ethical practices, continuous improvement, and patient-centric innovation. We are driven by four pillars of excellence:
    </p>
    <ul className="list-disc list-outside pl-5 flex flex-col gap-2 mt-2">
      <li className="pl-1">
        <strong>Integrity:</strong> Upholding transparency in every business interaction.
      </li>
      <li className="pl-1">
        <strong>Innovation:</strong> Constantly seeking newer, better ways to heal.
      </li>
      <li className="pl-1">
        <strong>Quality:</strong> Adhering to global standards of safety.
      </li>
      <li className="pl-1">
        <strong>Compassion:</strong> Placing the patient’s well-being at the heart of everything we do.
      </li>
    </ul>
  </div>

  {/* Paragraph 7 (Skipped Para 6 as it was a duplicate of Para 4) */}
  <div>
    <p>
      With a growing portfolio and an expanding footprint, DWEPS Pharmaceutical Pvt. Ltd. is poised to emerge as a trusted household name in both domestic and global pharmaceutical markets, ensuring that better health is always within reach.
    </p>
  </div>

</div>
        </div>

        <div className='flex flex-col gap-4'>
           <div className='text-center mt-8 mb-4'>
    <h2 className='relative group inline-block font-heading font-bold text-2xl'>
        Our Mission Vision
        
        {/* FIX: 
            1. Removed 'scale-x' and 'transform' 
            2. Added 'left-1/2' and '-translate-x-1/2' to keep it centered
            3. Animating 'w-0' (width 0) to 'w-full' (width 100%) 
        */}
        <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-[width] duration-300 -translate-x-1/2 ease-out'></span>
    </h2>
</div>
            <div className='flex gap-8 md:flex-row flex-col md:px-0 px-4'>
                {/* card-1 */}
                <div className='relative group overflow-hidden flex flex-col gap-2 border border-1 
                border-blue-500 px-4 py-4 rounded-md transition transform duration-300 hover:scale-105 shadow-md'>
                    <span className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    {/* icon */}
                    <div className='flex items-center justify-center'>
                        <Image src="/bullseye-solid-full.svg" alt='img' width={20} height={20} className='w-20 h-20'/>
                    </div>

                    {/* mission */}
                    <div> 
                        <h3 className='text-center text-xl font-medium'>Our Mission</h3>
                    </div>

                    {/* description */}

                    <div>
                        <p>To provide innovative, effective, and affordable medical solutions that enhance the quality of life. We are committed to delivering high-quality pharmaceutical products that meet international standards while remaining accessible to all.</p>
                    </div>
                </div>



                {/* card-2 */}

                <div className='relative group overflow-hidden flex flex-col gap-2 border border-1 px-4 py-2 border-blue-500 rounded-md transition transform duration-300 hover:scale-105 shadow-md'>
                    <span className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                     {/* icon */}
                    <div className='flex items-center justify-center'>
                        <Image src="/eye-low-vision-solid-full.svg" alt='image' width={20} height={20} className='w-20 h-20'/>
                    </div>

                    {/* mission */}
                    <div> 
                         <h3 className='text-center text-xl font-medium'>Our Vision</h3>
                    </div>

                    {/* description */}

                    <div>
                        <p>To be recognized as a trusted name in the Indian pharmaceutical industry for excellence in women's health, dermatology, a. We aspire to become a leading healthcare provider known for quality and innovation.</p>
                    </div>
                </div>
            </div>
        </div>
     </section>

    
         
        </>
      )
}

export default page
                    //   <div className="space-y-6">
                    //       {/* Main Title */}
                    //       <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-[#049fe5] ">
                    //           About Us
                    //       </h2>
  
                    //       {/* Subtitle */}
                       
  
                    //       {/* Company Description */}
                    //       <p className="text-base md:text-sm text-gray-700 leading-relaxed font-heading">
                    //           DWEPS Pharmaceutical Pvt Ltd is a progressive Indian pharmaceutical company incorporated in 2016. With a corporate presence in Bengaluru, we specialize in the development and marketing of high-quality pharmaceutical formulations.
                    //       </p>
  
                        
  
                         
  
                    //       {/* Our Core Values Section */}
                    //       <div className="space-y-3">
                    //           <h4 className="text-lg md:text-xl font-bold text-gray-800">
                    //               Our Core Values
                    //           </h4>
                    //           <ul className="space-y-2 text-base md:text-sm text-gray-700">
                    //               <li className="flex items-start">
                    //                   <span className="text-[#049fe5] mr-2 font-bold"></span>
                    //                   <span>Integrity in everything we do</span>
                    //               </li>
                    //               <li className="flex items-start">
                    //                   <span className="text-[#049fe5] mr-2 font-bold"></span>
                    //                   <span>Innovation that improves lives</span>
                    //               </li>
                    //               <li className="flex items-start">
                    //                   <span className="text-[#049fe5] mr-2 font-bold"></span>
                    //                   <span>Quality that meets global standards</span>
                    //               </li>
                    //               <li className="flex items-start">
                    //                   <span className="text-[#049fe5] mr-2 font-bold"></span>
                    //                   <span>Compassion toward patients and partners</span>
                    //               </li>
                    //           </ul>
                    //       </div>
                    //   </div>