import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 