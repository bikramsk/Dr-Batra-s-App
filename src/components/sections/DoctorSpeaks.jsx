import React, { useEffect, useState } from 'react';

const DoctorsSpeakSection = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to control body scroll when video is shown
  useEffect(() => {
    if (showVideo) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [showVideo]);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const doctors = [
    {
      id: 1,
      name: "Dr. Akshay",
      title: "Transform Your Hair Health: Dr Batra's Personalized Solutions for Hair Fall",
      image: "/doctor-speaks.png",
      videoUrl: "https://www.youtube.com/shorts/reGaPBn19Gg"
    },
    {
      id: 2,
      name: "Dr. Akshay",
      title: "Transform Your Hair Health: Dr Batra's Personalized Solutions for Hair Fall",
      image: "/doctor-speaks.png",
      videoUrl: "https://www.youtube.com/shorts/reGaPBn19Gg"
    },
    {
      id: 3,
      name: "Dr. Akshay",
      title: "Transform Your Hair Health: Dr Batra's Personalized Solutions for Hair Fall",
      image: "/doctor-speaks.png",
      videoUrl: "https://www.youtube.com/shorts/reGaPBn19Gg"
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
                    <div 
                      className="w-4 h-4 bg-[#231F20] rounded-full mr-2 flex items-center justify-center cursor-pointer"
                      onClick={openVideo}
                    >
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
                      <div 
                        className="w-4 h-4 bg-[#1167B1] flex items-center justify-center rounded-full mr-2 cursor-pointer"
                        onClick={openVideo}
                      >
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

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0  bg-black/80 z-50 flex items-center justify-center">
            <div className="relative w-full h-2/3 max-w-3xl bg-transparent">
              <div className="absolute top-4 right-4 cursor-pointer z-10" onClick={closeVideo}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/reGaPBn19Gg?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsSpeakSection;
