import React, { useState } from 'react';

const HairTreatmentServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Treatment lists for mobile view
  const treatmentLists = [
    [
      "Postpartum & Menopausal Hair Loss Treatment",
      "Hereditary Hair Loss Treatment",
      "Hair Growth & Regrowth Treatment"
    ],
    [
      "Male & Female Pattern Baldness Treatment",
      "Alopecia Areata Hair Treatment",
      "Dandruff Treatment"
    ],
    [
      "Stress-Induced Hair Fall Treatment",
      "General Hair Fall Treatment",
      "Thinning Hair Treatment"
    ],
    []
  ];
  
  // All treatments for desktop view
  const allTreatments = [
    "Hair Growth & Regrowth Treatment",
    "Male & Female Pattern Baldness Treatment",
    "Postpartum & Menopausal Hair Treatment",
    "Stress-Induced Hair Fall Treatment",
    "Alopecia Areata Hair Treatment",
    "General Hair Fall Treatment",
    "Thinning Hair Treatment",
    "Dandruff Treatment",
    "Hereditary Hair Loss Treatment"
  ];
  
  // Handle dot navigation
  const handleDotClick = (index) => {
    setActiveTab(index);
  };
  
  return (
    <div className="bg-[#F5FAFE] sm:bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0">
        <svg width="175" height="178" viewBox="0 0 175 178" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.50544 0.959534C20.8389 77.0107 23.4288 146.903 0.805664 221.307C20.9487 193.806 41.3754 164.813 66.7167 141.274C98.2994 111.961 136.087 88.7433 174.195 68.1976C87.6742 115.009 17.2331 65.5344 3.50544 0.959534Z" fill="#F5FAFE"/>
        </svg>
      </div>

      {/* Desktop View (1130px+ screens) */}
      <div className="hidden xl:block max-w-6xl mx-auto relative z-10">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl xl:text-4xl text-[#231F20] font-roboto font-semibold leading-[1.2] xl:leading-[33.6px] tracking-normal">Types of Hair Treatment We Provide</h1>
          <p className="text-[#231F20] w-full xl:w-94 h-5 sm:h-6 mt-2 font-roboto font-normal text-base xl:text-xl leading-[1.25] xl:leading-[25px] whitespace-nowrap">Personalized Solutions for Every Condition</p>
        </div>
        
        <div className="w-full mb-6">
          <div className="flex mb-6 sm:mb-8 font-poppins">
            <button
              className="flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none bg-[#231F20] text-white"
            >
              Treatment Detail
            </button>
            <button
              className="flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none text-[#231F20] border-b-2 border-[#231F20]"
            >
              Treatment Approach
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {allTreatments.map((treatment, index) => (
            <div key={index} className="flex items-center w-94 h-24 gap-1 py-1 px-3 rounded border border-[#C8EFFF] shadow-md">
              <span className="text-[#1167B1] mr-2">
                <svg width="36" height="36" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.737102 0.170799C2.85502 9.46323 3.17147 18.0031 0.407227 27.0942C2.86843 23.734 5.36431 20.1915 8.46066 17.3154C12.3196 13.7337 16.9368 10.8968 21.5931 8.38638C11.0214 14.1061 2.41444 8.06098 0.737102 0.170799Z" fill="currentColor"/>
                </svg>
              </span>
              <p className="text-base font-roboto font-normal leading-[25px] tracking-normal text-[#231F20] whitespace-nowrap">{treatment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block xl:hidden max-w-6xl mx-auto relative z-10">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl text-[#231F20] font-roboto font-semibold leading-[1.2] tracking-normal">Types of Hair Treatment We Provide</h1>
          <p className="text-[#231F20] w-full h-5 sm:h-6 mt-2 font-roboto font-normal text-base leading-[1.25] whitespace-nowrap">Personalized Solutions for Every Condition</p>
        </div>
        
        <div className="w-full mb-6">
          <div className="flex mb-6 sm:mb-8 font-poppins">
            <button
              className="flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none bg-[#231F20] text-white"
            >
              Treatment Detail
            </button>
            <button
              className="flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none text-[#231F20] border-b-2 border-[#231F20]"
            >
              Treatment Approach
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {allTreatments.map((treatment, index) => (
            <div key={index} className="flex items-center w-full h-20 gap-1 py-1 px-3 rounded border border-[#C8EFFF] shadow-md">
              <span className="text-[#1167B1] mr-2 flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.737102 0.170799C2.85502 9.46323 3.17147 18.0031 0.407227 27.0942C2.86843 23.734 5.36431 20.1915 8.46066 17.3154C12.3196 13.7337 16.9368 10.8968 21.5931 8.38638C11.0214 14.1061 2.41444 8.06098 0.737102 0.170799Z" fill="currentColor"/>
                </svg>
              </span>
              <p className="text-sm font-roboto font-normal leading-tight tracking-normal text-[#231F20] line-clamp-2">{treatment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet  */}
      <div className="hidden md:block lg:hidden max-w-6xl mx-auto relative z-10">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl text-[#231F20] font-roboto font-semibold leading-[1.2] tracking-normal">Types of Hair Treatment We Provide</h1>
          <p className="text-[#231F20] w-full h-5 sm:h-6 mt-2 font-roboto font-normal text-base leading-[1.25] whitespace-nowrap">Personalized Solutions for Every Condition</p>
        </div>
        
        <div className="w-full mb-6">
          <div className="flex mb-6 sm:mb-8 font-poppins">
            <button
              className="flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none bg-[#231F20] text-white"
            >
              Treatment Detail
            </button>
            <button
              className="flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none text-[#231F20] border-b-2 border-[#231F20]"
            >
              Treatment Approach
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {allTreatments.map((treatment, index) => (
            <div key={index} className="flex items-center w-full h-20 gap-1 py-1 px-3 rounded border border-[#C8EFFF] shadow-md">
              <span className="text-[#1167B1] mr-2 flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.737102 0.170799C2.85502 9.46323 3.17147 18.0031 0.407227 27.0942C2.86843 23.734 5.36431 20.1915 8.46066 17.3154C12.3196 13.7337 16.9368 10.8968 21.5931 8.38638C11.0214 14.1061 2.41444 8.06098 0.737102 0.170799Z" fill="currentColor"/>
                </svg>
              </span>
              <p className="text-sm md:text-base font-roboto font-normal leading-tight md:leading-[22px] tracking-normal text-[#231F20]">{treatment}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden max-w-6xl mx-auto relative z-10">
        <div className="mb-6">
          <h1 className="font-roboto text-xl font-bold text-[#231F20]">Types of Hair Treatment We Provide</h1>
        </div>
        
        {/* Tabs */}
        <div className="flex mb-6 sm:mb-8 font-poppins">
          <button 
            className={`flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none ${
              activeTab === 0 
                ? 'bg-[#231F20] text-white' 
                : 'text-[#231F20] border-b-2 border-[#231F20]'
            }`}
            onClick={() => setActiveTab(0)}
          >
            Types of Hairfall
          </button>
          <button 
            className={`flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none ${
              activeTab === 1 
                ? 'bg-[#231F20] text-white' 
                : 'text-[#231F20] border-b-2 border-[#231F20]'
            }`}
            onClick={() => setActiveTab(1)}
          >
            Types of Hair Treatment
          </button>
        </div>
        
        {/* Treatment List */}
        <div className="mb-6">
          {treatmentLists[activeTab].map((treatment, index) => (
            <div key={index} className="bg-white shadow-sm border border-gray-100 rounded-lg p-3 mb-3 flex items-center">
              <span className="text-[#1167B1] mr-3">
                <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.737102 0.170799C2.85502 9.46323 3.17147 18.0031 0.407227 27.0942C2.86843 23.734 5.36431 20.1915 8.46066 17.3154C12.3196 13.7337 16.9368 10.8968 21.5931 8.38638C11.0214 14.1061 2.41444 8.06098 0.737102 0.170799Z" fill="currentColor"/>
                </svg>
              </span>
              <p className="text-sm">{treatment}</p>
            </div>
          ))}
        </div>
        
        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2, 3].map((index) => (
            <button 
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full ${activeTab === index ? 'bg-[#1167B1]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairTreatmentServices;
