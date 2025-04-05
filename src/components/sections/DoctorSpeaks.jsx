import React, { useEffect, useState } from 'react';

const DoctorsSpeakSection = () => {

  const [isMobile, setIsMobile] = useState(true);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425);
    };
    
  handleResize();
   window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const doctors = [
    {
      id: 1,
      name: "Dr. Akshay",
      title: "Transform Your Hair Health: Dr Batra's Personalized Solutions for Hair Fall",
      image: "/doctor-speaks.png" 
    },
    {
      id: 2,
      name: "Dr. Akshay",
      title: "Transform Your Hair Health: Dr Batra's Personalized Solutions for Hair Fall",
      image: "/doctor-speaks.png" 
    },
    {
      id: 3,
      name: "Dr. Akshay",
      title: "Transform Your Hair Health: Dr Batra's Personalized Solutions for Hair Fall",
      image: "/doctor-speaks.png" 
    }
  ];

  return (
    <section className="py-8 sm:py-15 bg-[#F5FAFE] sm:bg-white">
      <div className="max-w-6xl mx-4 sm:px-6 md:mx-auto">
        <div className="mb-8 text-center sm:text-left font-roboto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#231F20] leading-[33.6px] tracking-normal mb-1">Doctors speak</h2>
          <p className="text-[#231F20] font-roboto font-light text-sm sm:text-lg md:text-xl leading-[1.25] md:leading-[25px]">Accredited and recognized expertise</p>
      </div>

        {/* Tablet and Desktop View */}
        {!isMobile && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="relative rounded-lg overflow-hidden shadow-md">
                
                <div className={`w-full ${window.innerWidth < 640 ? 'h-[160px]' : window.innerWidth < 768 ? 'h-[200px]' : 'h-76'} bg-gray-300 overflow-hidden`}>
              <img 
                src={doctor.image} 
                alt={`${doctor.name}`} 
                    className="w-full h-full object-cover object-right-top"
              />
            </div>
            
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-800 to-transparent p-2 sm:p-2.5 md:p-3 font-poppins">
              <div className="flex items-center mb-1">
                    <div className="w-4 h-4 bg-[#231F20] rounded-full mr-2 flex items-center justify-center">
                      <svg className="w-2 h-2 text-white translate-x-[1px]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="text-white text-xs sm:text-xs md:text-sm font-medium">{doctor.name}</p>
                  </div>
                  <p className="text-white text-xs leading-tight line-clamp-2 sm:line-clamp-2 md:line-clamp-none">
                    {doctor.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile View - below 425px */}
        {isMobile && (
          <>
            <div className="grid grid-cols-2 gap-4">
              {doctors.slice(0, 2).map((doctor) => (
                <div key={doctor.id} className="relative rounded-lg overflow-hidden shadow-md w-[160px] h-[249px]">
                  <div className="w-full h-full bg-gray-300 overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={`${doctor.name}`} 
                      className="w-full h-full object-cover object-right-top"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-800 to-transparent p-3 font-poppins">
                    <div className="flex items-center mb-1">
                      <div className="w-4 h-4 bg-[#1167B1] flex items-center justify-center rounded-full mr-2">
                        <svg className="w-2 h-2 text-white translate-x-[1px]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <p className="text-white text-sm font-medium">{doctor.name}</p>
              </div>
              <p className="text-white text-xs leading-tight">
                {doctor.title}
              </p>
            </div>
          </div>
        ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(2)].map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[#1167B1]' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DoctorsSpeakSection;
