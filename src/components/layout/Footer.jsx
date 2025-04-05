import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-[#1A51A2] text-white py-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-auto">
          <div className="text-sm font-medium mb-2 sm:mb-0 text-left">
            ©Dr Batra's - All rights reserved
          </div>
          {/* Mobile-only  */}
          <div className="flex flex-row items-start space-x-2 sm:hidden text-xs">
            <a href="#" className="hover:underline text-left">Terms of Services</a>
            <a href="#" className="hover:underline text-left">Privacy Policy</a>
          </div>
        </div>
        
        {/* Desktop links */}
        <div className="hidden sm:flex flex-wrap justify-center space-x-4 text-xs sm:text-sm">
          <a href="#" className="hover:underline">Glossary</a>
          <a href="#" className="hover:underline">Terms of Services</a>
          <a href="#" className="hover:underline">Services Offers</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Disclaimer</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;