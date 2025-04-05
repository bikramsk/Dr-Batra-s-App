import React, { useState, useEffect } from 'react';

const ScienceBehindTreatment = () => {
  const [activeTab, setActiveTab] = useState('how');
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const howContent = [
    {
      image: '/01-homeopathy.png',
      title: 'Microscopic test',
      description: 'Our doctors go beyond the surface of your scalp with a microscopic examination to understand the exact root cause of your hair loss'
    },
    {
      image: '/02-homeopathy.png',
      title: '30 to 40 minutes detailed consultation',
      description: 'To thoroughly understand your case and reason for hair loss, a detailed consultation will guide us in offering a safe and effective solution'
    },
    {
      image: '/03-homeopathy.png',
      title: 'Measuring your result',
      description: 'Monthly monitoring of hair regrowth progress, addressing root cause for lasting improvements'
    },
    {
      image: '/04-homeopathy.png',
      title: 'Personalized hair treatment',
      description: 'After a comprehensive assessment, our doctors will customize a treatment plan combining homeopathy and aesthetics for quicker, visible results tailored to your hair loss stage'
    }
  ];

  const cardsPerPage = 2;
  const totalPages = Math.ceil(howContent.length / cardsPerPage);
  
  const displayedContent = isMobile 
    ? howContent.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
    : howContent;

  return (
    <div className="bg-white sm:bg-[#F5FAFE] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-left sm:text-left mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-4xl font-semibold text-[#231F20] leading-[33.6px] tracking-normal">Science behind our treatment</h2>

          <p className="text-sm sm:text-xl font-light leading-[25px] text-[#666666] mt-1">Unmatched Expertise & Results</p>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 sm:mb-8 font-poppins">
          <button
            className={`flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none ${
              activeTab === 'how' 
                ? 'bg-[#231F20] text-white' 
                : 'e text-[#231F20] border-b-2 border-[#231F20]'
            }`}
            onClick={() => handleTabChange('how')}
          >
            How our Treatment works
          </button>
          <button
            className={`flex-1 h-10 gap-2.5 py-2 px-3 rounded-t-sm font-normal sm:font-semibold text-xs sm:text-base leading-none ${
              activeTab === 'approach' 
                ? 'bg-[#231F20] text-white' 
                : ' text-[#231F20] border-b-2 border-[#231F20]'
            }`}
            onClick={() => handleTabChange('approach')}
          >
            Treatment Approach
          </button>
        </div>

        {/* Content */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-2 gap-6'}`}>
          {displayedContent.map((item, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm h-auto min-h-[180px] md:min-h-[200px] lg:min-h-[180px]">
              <div className="flex flex-col items-start text-left">
                <div className="mb-3 sm:mb-4">
                  <img src={item.image} alt={item.title} className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="font-poppins font-semibold text-sm sm:text-base text-[#231F20] leading-none mb-2">{item.title}</h3>
                <p className="font-poppins text-[#8E8E93] text-xs font-normal leading-4 md:leading-[17px]">{item.description}</p>
              </div>
                  </div>
          ))}
              </div>

        {/* Pagination Dots */}
        {isMobile && (
          <div className="flex justify-center items-center gap-2 mt-6">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full ${
                  currentPage === index ? 'bg-[#1167B1]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
              </div>
          )}
      </div>
    </div>
  );
};

export default ScienceBehindTreatment;