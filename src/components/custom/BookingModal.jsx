import React, { useEffect, useState } from 'react';

const BookingModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Simple dropdown state - only for UI effect
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    // Auto close after a short delay
    if (!isDropdownOpen) {
      setTimeout(() => {
        setIsDropdownOpen(false);
      }, 2000);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        animation: 'fadeIn 0.3s forwards',
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white text-white rounded-bl-lg rounded-br-lg shadow-lg overflow-visible relative"
        style={{
          width: '351px',
          height: '279px',
          animation: 'springIn 0.5s forwards',
          border: '1px solid',
          borderImageSource: 'linear-gradient(180deg, rgba(0, 104, 162, 0.4) 0%, rgba(194, 39, 39, 0.4) 100%)',
          borderImageSlice: '1'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="absolute -top-3 -right-2 z-[999]">
          <button 
            className="bg-[#C22727] rounded-full w-5 h-5 flex items-center justify-center transition-colors cursor-pointer"
            onClick={onClose}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          <div className="w-88 h-17.5 bg-[#0C4679] -mx-4.5 -mt-5 mb-3 flex items-center justify-center">
            <h2 className="text-center font-roboto font-medium text-xl text-white px-4 py-1">
              Book an Appointment with our<br/>experts now
            </h2>
          </div>
          
          <div className="space-y-2.5">
            <input
              type="text"
              placeholder="Name"
              className="w-full placeholder-[#B3B3B3] p-2 text-[#231F20] text-sm rounded bg-white border border-solid border-[#E4E4E7]"
            />
            
            <div className="flex gap-2 font-roboto">
              <div className="relative">
                <div 
                  className="flex items-center justify-between bg-white rounded-l px-2 text-[#231F20] border border-[#E4E4E7] min-w-[60px] h-8.5 text-sm cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <span>+91</span>
                  <svg 
                    width="10" 
                    height="10" 
                    viewBox="0 0 12 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9L10 5H2L6 9Z" fill="#666666"/>
                  </svg>
                </div>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#E4E4E7] rounded shadow-lg z-10 w-[60px]">
                    <div 
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[#231F20] text-sm"
                      onClick={toggleDropdown}
                    >
                      +91
                    </div>
                  </div>
                )}
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 p-2 text-sm rounded-r bg-white text-[#231F20] placeholder-[#B3B3B3] border border-[#E4E4E7]"
              />
            </div>
            
            <div className="flex items-center font-roboto mt-6">
              <div className="w-4 h-4 rounded bg-[#1167B1] flex items-center justify-center mr-2">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-xs font-medium text-[#B3B3B3]">I understand and accept the terms and conditions</p>
            </div>
            
            <button className="w-full h-8 bg-[#0073AE] font-bold py-1 rounded text-white text-sm shadow-[0px_4px_15px_0px_#AFADAD2E] cursor-pointer">
              Book your Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal; 