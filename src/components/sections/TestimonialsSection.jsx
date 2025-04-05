import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Shailesh Kumar',
    image: '/hairfall-02.png',
    text: 'Witnessed results in just 5 months: an inspiring journey shared by a satisfied patient with alopecia treatment.',
  },
  {
    id: 2,
    name: 'Nikita Chhatriya',
    image: '/Hair-Growth-01.png',
    text: 'Dr Batra\'s Hair Treatment was a game changer for my hair loss.',
  },
  {
    id: 3,
    name: 'Shailesh Kumar',
    image: '/hairfall-02.png',
    text: 'My hair loss and bald patches diminished in just 6 months with Dr Batra\'s Treatment.',
  },
  {
    id: 4,
    name: 'Tanisha Dhamala',
    image: '/Alopecia-01.png',
    text: 'Dr Batra\'s Holistic homeopathy brings remarkable results',
  }
];

const TestimonialCard = ({ name, image, text }) => {
  return (
    <div className="w-full">
      <div className="bg-blue-600 rounded-lg overflow-hidden shadow-lg h-[300px] sm:h-[350px] md:h-[400px] lg:h-[437.63px]">
        <div className="relative h-full">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
         
  
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t font-poppins from-[#0F477A] to-transparent p-4 sm:p-5 md:p-6">
            <div className="flex items-center gap-2 text-white">
              <div className="relative w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[32px] md:h-[32px] lg:w-[33.75px] lg:h-[33.75px] bg-[#1167B1] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-[3.5px] sm:h-[3.5px] md:w-4 md:h-4 text-white translate-x-[1px]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <h3 className="font-poppins text-xs sm:text-[15px] md:text-[16px] lg:text-lg font-semibold">{name}</h3>
            </div>
            <p className="font-poppins font-normal text-white text-[10px] sm:text-[13px] md:text-sm mt-1 sm:mt-1.5 md:mt-2">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); 
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);


  const displayedTestimonials = isMobile 
    ? testimonials.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
    : testimonials;

  return (
    <div className="bg-[#F5FAFE] sm:bg-white py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 md:mb-8">
          <h2 className=" font-roboto text-xl sm:text-2xl md:text-4xl font-semibold text-[#231F20]  leading-[33.6px] tracking-normal">Patient Testimonials</h2>
          <p className="font-roboto text-sm sm:text-[13px] font-light md:text-xl text-[#231F20] leading-[33.6px] tracking-normal mt-1">Accredited and recognized expertise.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
        
        {/* Pagination Dots */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-6">
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

export default TestimonialsSection;