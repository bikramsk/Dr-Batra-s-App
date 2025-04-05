import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="bg-[#F2F4F7] py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/db-logo.webp" alt="Dr Batra's Logo" className="w-24 h-12" />
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#2A9DF4" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search our clinics by city"
                  className="bg-white border border-[#11111C1C] rounded-md py-1 pl-8 pr-3 focus:outline-none text-sm w-52 md:w-64 h-11"
                />
              </div>
              
              <button className="h-11 bg-black text-white py-2 px-5 rounded-md hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-[#29A745] text-sm font-medium whitespace-nowrap flex items-center">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M20.2405 21.8C18.1059 21.8 15.9877 21.3326 13.8858 20.398C11.7838 19.4633 9.85979 18.123 8.11365 16.3768C6.37391 14.6474 5.03674 12.729 4.10212 10.622C3.1675 8.515 2.7002 6.39417 2.7002 4.25958C2.7002 3.92624 2.79186 3.66631 2.9752 3.47978C3.15852 3.29323 3.41686 3.19995 3.7502 3.19995H7.96169C8.21427 3.19995 8.44119 3.28233 8.64248 3.44708C8.84375 3.61183 8.979 3.81535 9.04822 4.05765L9.7213 7.74993C9.76104 7.98968 9.75272 8.20762 9.69629 8.40378C9.63989 8.59993 9.55528 8.74801 9.44244 8.848L6.90784 11.3461C7.26298 11.9768 7.66683 12.579 8.1194 13.1528C8.57196 13.7266 9.07644 14.298 9.63285 14.8673C10.1649 15.3826 10.7149 15.8631 11.2829 16.3086C11.8508 16.7541 12.4431 17.1544 13.0598 17.5096L15.704 14.9462C15.8438 14.8 15.9873 14.7066 16.1348 14.6663C16.2823 14.6259 16.4425 14.6224 16.6155 14.6558L20.3924 15.4712C20.645 15.5378 20.8594 15.6666 21.0357 15.8577C21.212 16.0487 21.3002 16.2653 21.3002 16.5077V20.75C21.3002 21.0832 21.2068 21.3416 21.0204 21.5249C20.8338 21.7083 20.5738 21.8 20.2405 21.8Z" fill="white"/>
                </svg>
                Call Now On 800 228727
              </button>
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="md:hidden flex items-center justify-between">
            
            <div className="flex-shrink-0">
              <img src="/db-logo.webp" alt="Dr Batra's Logo" className="h-8 w-auto" />
            </div>
            
            {/* Search Input */}
            <div className="relative w-[40%]">
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#2A9DF4" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="bg-white border border-[#11111C1C] rounded-full py-1 pl-8 pr-2 focus:outline-none text-sm w-full h-9"
              />
            </div>
            
           
            <div className="flex items-center space-x-2">
              {/* Phone Icon */}
              <a href="tel:8002228727" className="text-white bg-[#2065A2] rounded-lg flex items-center justify-center focus:outline-none w-8 h-8">
                <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.2405 21.8C18.1059 21.8 15.9877 21.3326 13.8858 20.398C11.7838 19.4633 9.85979 18.123 8.11365 16.3768C6.37391 14.6474 5.03674 12.729 4.10212 10.622C3.1675 8.515 2.7002 6.39417 2.7002 4.25958C2.7002 3.92624 2.79186 3.66631 2.9752 3.47978C3.15852 3.29323 3.41686 3.19995 3.7502 3.19995H7.96169C8.21427 3.19995 8.44119 3.28233 8.64248 3.44708C8.84375 3.61183 8.979 3.81535 9.04822 4.05765L9.7213 7.74993C9.76104 7.98968 9.75272 8.20762 9.69629 8.40378C9.63989 8.59993 9.55528 8.74801 9.44244 8.848L6.90784 11.3461C7.26298 11.9768 7.66683 12.579 8.1194 13.1528C8.57196 13.7266 9.07644 14.298 9.63285 14.8673C10.1649 15.3826 10.7149 15.8631 11.2829 16.3086C11.8508 16.7541 12.4431 17.1544 13.0598 17.5096L15.704 14.9462C15.8438 14.8 15.9873 14.7066 16.1348 14.6663C16.2823 14.6259 16.4425 14.6224 16.6155 14.6558L20.3924 15.4712C20.645 15.5378 20.8594 15.6666 21.0357 15.8577C21.212 16.0487 21.3002 16.2653 21.3002 16.5077V20.75C21.3002 21.0832 21.2068 21.3416 21.0204 21.5249C20.8338 21.7083 20.5738 21.8 20.2405 21.8Z" fill="white"/>
                </svg>
              </a>
              
              {/* Hamburger Menu */}
              <button className="p-2 text-black focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h13M5 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 


