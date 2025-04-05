import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-[#1A51A2] text-white py-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm font-medium mb-3 sm:mb-0 text-left w-full sm:w-auto">
          ©Dr Batra's - All rights reserved
        </div>
        <div className="flex flex-wrap justify-center space-x-4 text-xs sm:text-sm">
          <a href="#" className="hidden sm:block hover:underline">Glossary</a>
          <a href="#" className="hover:underline">Terms of Services</a>
          <a href="#" className="hidden sm:block hover:underline">Services Offers</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hidden sm:block hover:underline">Disclaimer</a>
          <a href="#" className="hidden sm:block hover:underline">Sitemap</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;