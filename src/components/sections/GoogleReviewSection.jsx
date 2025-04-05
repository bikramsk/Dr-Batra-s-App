import React, { useState, useEffect } from 'react';


const GoogleGIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2591_6655)">
  <path d="M6.6033 0.814609C4.80482 1.43852 3.25382 2.62272 2.1781 4.19327C1.10239 5.76382 0.558664 7.63794 0.626798 9.54034C0.694932 11.4427 1.37133 13.2732 2.55664 14.7627C3.74196 16.2523 5.3737 17.3225 7.21221 17.8162C8.70272 18.2008 10.2643 18.2177 11.7628 17.8654C13.1203 17.5605 14.3753 16.9082 15.405 15.9726C16.4767 14.969 17.2546 13.6923 17.655 12.2798C18.0903 10.7437 18.1677 9.12826 17.8814 7.55758H9.51143V11.0296H14.3588C14.2619 11.5834 14.0543 12.1119 13.7484 12.5836C13.4425 13.0552 13.0446 13.4603 12.5785 13.7746C11.9865 14.1662 11.3193 14.4296 10.6196 14.548C9.91775 14.6785 9.19791 14.6785 8.49611 14.548C7.78482 14.401 7.11194 14.1074 6.52033 13.686C5.56992 13.0132 4.85628 12.0575 4.48127 10.9551C4.09992 9.83204 4.09992 8.61452 4.48127 7.49148C4.74821 6.70429 5.1895 5.98755 5.77221 5.39476C6.43904 4.70394 7.28327 4.21014 8.21227 3.96753C9.14127 3.72492 10.1191 3.74289 11.0386 4.01945C11.7569 4.23994 12.4137 4.62518 12.9567 5.14445C13.5033 4.6007 14.0489 4.05555 14.5936 3.50898C14.8749 3.21508 15.1814 2.93523 15.4585 2.6343C14.6296 1.86293 13.6566 1.26272 12.5953 0.868046C10.6627 0.166313 8.54811 0.147455 6.6033 0.814609Z" fill="white"/>
  <path d="M6.60354 0.814804C8.54819 0.147196 10.6628 0.165558 12.5956 0.866835C13.657 1.26419 14.6295 1.86729 15.4573 2.64152C15.176 2.94246 14.8793 3.22371 14.5924 3.51621C14.0468 4.0609 13.5017 4.60371 12.957 5.14465C12.4139 4.62537 11.7571 4.24014 11.0388 4.01965C10.1197 3.74211 9.14184 3.72311 8.21259 3.96472C7.28334 4.20634 6.4386 4.69923 5.77103 5.38933C5.18833 5.98212 4.74704 6.69886 4.4801 7.48605L1.56494 5.22902C2.60839 3.15981 4.41506 1.57702 6.60354 0.814804Z" fill="#E33629"/>
  <path d="M0.791558 7.46494C0.948245 6.6884 1.20838 5.93638 1.565 5.229L4.48015 7.49166C4.0988 8.6147 4.0988 9.83221 4.48015 10.9553C3.5089 11.7053 2.53718 12.459 1.565 13.2165C0.672239 11.4394 0.399964 9.41471 0.791558 7.46494Z" fill="#F8BD00"/>
  <path d="M9.51137 7.55615H17.8814C18.1677 9.12684 18.0902 10.7422 17.655 12.2783C17.2545 13.6909 16.4766 14.9676 15.405 15.9712C14.4642 15.2371 13.5192 14.5087 12.5784 13.7746C13.0448 13.46 13.4429 13.0544 13.7488 12.5823C14.0548 12.1101 14.2622 11.581 14.3587 11.0268H9.51137C9.50996 9.87084 9.51137 8.7135 9.51137 7.55615Z" fill="#587DBD"/>
  <path d="M1.56348 13.2163C2.53566 12.4663 3.50738 11.7126 4.47863 10.9551C4.85439 12.0579 5.56905 13.0137 6.52051 13.686C7.11396 14.1054 7.78829 14.3966 8.50051 14.541C9.20231 14.6715 9.92215 14.6715 10.6239 14.541C11.3237 14.4226 11.9909 14.1591 12.5829 13.7676C13.5236 14.5016 14.4686 15.2301 15.4094 15.9641C14.3799 16.9003 13.1248 17.553 11.7672 17.8584C10.2687 18.2106 8.70712 18.1937 7.2166 17.8091C6.03774 17.4944 4.93661 16.9395 3.98223 16.1793C2.97206 15.3773 2.14701 14.3666 1.56348 13.2163Z" fill="#319F43"/>
  </g>
  <defs>
  <clipPath id="clip0_2591_6655">
  <rect width="18" height="18" fill="white" transform="translate(0.333008 0.222656)"/>
  </clipPath>
  </defs>
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
        {/* Header */}
        <div className="text-left mb-8 lg:mb-12 font-roboto">
          <h2 className="text-2xl sm:text-4xl font-semibold leading-[33.6px] text-[#231F20] mb-1 sm:-ml-7 md:ml-7">
            Live Google Reviews
          </h2>
          <p className="text-sm sm:text-xl text-[#231F20] font-light leading-[25px] sm:-ml-7 md:ml-7">
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

          {/* Pagination Dots  */}
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