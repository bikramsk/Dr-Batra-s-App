import React, { useState, useEffect } from 'react';


const GoogleGIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.8 10.1c0-.7-.1-1.4-.2-2.1h-9.1v4h5.2c-.2 1.3-.9 2.4-2.1 3.2v2.6h3.4c2-1.8 3.1-4.5 3.1-7.7z" fill="#4285F4"/>
    <path d="M12.5 22c2.7 0 4.9-.9 6.6-2.4l-3.4-2.6c-.9.6-2 .9-3.2.9-2.5 0-4.6-1.7-5.4-4H3.7v2.7C5.4 19.8 8.7 22 12.5 22z" fill="#34A853"/>
    <path d="M7.1 14.1c-.2-.6-.3-1.2-.3-1.8s.1-1.2.3-1.8V7.9H3.7C2.6 10.1 2 12.4 2 15s.6 4.9 1.7 7.1l3.4-2.7z" fill="#FBBC05"/>
    <path d="M12.5 6.4c1.5 0 2.8.5 3.8 1.5l3-3C17.4 3.1 15.2 2 12.5 2 8.7 2 5.4 4.2 3.7 7.9l3.4 2.7c.8-2.3 2.9-4 5.4-4z" fill="#EA4335"/>
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


const LeftArrowIcon = () => (
  <svg width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.75" d="M19.7706 39.5807L8.8926 21.2687L19.7706 2.95665H11.4126L0.828596 21.2687L11.4546 39.5807H19.7706Z" fill="#BDD8EF"/>
  </svg>
  
);


const RightArrowIcon = () => (
<svg width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.75" d="M1.2294 39.5807L12.1074 21.2687L1.2294 2.95665H9.5874L20.1714 21.2687L9.5454 39.5807H1.2294Z" fill="#BDD8EF"/>
</svg>

);



const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))}
  </div>
);


const ReviewCard = ({ name, rating, text }) => (
  <div className="bg-white rounded-lg shadow-md p-5 md:p-6 w-full flex-shrink-0 h-[180px] md:h-[200px] flex flex-col">
    {/* Card Header */}
    <div className="flex justify-between items-center mb-3">
      <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">{name}</h4>
      <div className="flex items-center gap-2">
        <GoogleGIcon />
        <StarRating rating={rating} />
      </div>
    </div>

    {/* Card Body */}
    <p className="w-full font-roboto font-normal text-xs sm:text-sm leading-5 sm:leading-6 tracking-[0%] text-[#636363] line-clamp-5 flex-1">{text}</p>
  </div>
);


const PaginationDot = ({ active, onClick }) => (
  <button 
    className={`w-2 h-2 rounded-full mx-1 transition-colors ${active ? 'bg-blue-600' : 'bg-gray-300'}`}
    onClick={onClick}
    aria-label={active ? "Current slide" : "Go to slide"}
  />
);


const GoogleReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Pooja Grover",
      rating: 5,
      text: "Visited for my health issuee & skin problem. Dr Animol & Thr. Shilpi is a great person and gave the best treatment. In year my problem is completely solved. My skin so glowing & beautiful Thanks Shilpi. & your nature is so good or Decent behavior."
    },
    {
      id: 2,
      name: "Pradeep",
      rating: 5,
      text: "I had warts since last 12 yrs nd they were growing in number from last 4 yrs, that's why I consulted here nd I get rid of my warts...And now my problem is all gone...Thanks to the Batra Team"
    },
    {
      id: 3,
      name: "Shreya",
      rating: 5,
      text: "Great analysis and support from everyone, started to witness bit change in hair fall within 1 month. Hope it will continue."
    },
    { 
      id: 4,
      name: "Rohan Mehta",
      rating: 4,
      text: "Good experience overall. The doctors are knowledgeable and the staff is helpful. Seeing positive results."
    },
    {
      id: 5,
      name: "Anjali Sharma",
      rating: 5,
      text: "Highly recommend Dr. Batra's for hair treatment. Very professional approach and effective treatment plan."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  
 
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate how many reviews to show based on screen width
  const getReviewsToShow = () => {
    if (screenWidth < 640) return 1;
    if (screenWidth < 1024) return 2;
    return 3;
  };
  
  const reviewsToShow = getReviewsToShow();
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - reviewsToShow : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= reviews.length - reviewsToShow ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  
  const getCardWidth = () => {
    if (screenWidth < 640) return '100%';
    if (screenWidth < 1024) return '50%';
    return '33.333%';
  };

  return (
    <div className=" bg-white sm:bg-[#F5FAFE] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            Live Google Reviews
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Dynamic ratings from real patients.
          </p>
        </div>

        {/* Carousel*/}
        <div className="relative">
         
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-[-36px] md:left-[-40px] transform -translate-y-1/2 z-10 rounded-full p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 hidden sm:block"
            aria-label="Previous reviews"
          >
            <LeftArrowIcon />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / reviewsToShow)}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  style={{ width: getCardWidth() }}
                  className="flex-shrink-0"
                >
                  <div className="px-2">
                    <ReviewCard
                      name={review.name}
                      rating={review.rating}
                      text={review.text}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-[-36px] md:right-[-40px] transform -translate-y-1/2 z-10 rounded-full p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 hidden sm:block"
            aria-label="Next reviews"
          >
            <RightArrowIcon />
          </button>

          {/* Pagination Dots - Only visible on mobile */}
          <div className="flex justify-center mt-6 sm:hidden">
            {reviews.map((_, index) => (
              <PaginationDot 
                key={index} 
                active={index === currentIndex} 
                onClick={() => handleDotClick(index)} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsSection;