"use client"
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4">
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <div className="flex items-center cursor-pointer">
              <Image
                src="https://www.photawn.com/assets/images/logo_new.svg"
                alt="PHO-TAWN Logo"
                width={200}
                height={80}
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-['Inter', sans-serif]">

          <a href="/what-we-do" className="text-gray-700 hover:text-blue-600 transition-colors">
            What We Do
          </a>

          <a href="/how-we-do" className="text-gray-700 hover:text-blue-600 transition-colors">
            How We Do
          </a>


          <a href="/other-services" className="text-gray-700 hover:text-blue-600 transition-colors">
            Other Services
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 font-['Inter'] text-[16px]">
         

            <a href="/what-we-do" className="block px-3 py-2 rounded text-blue-900 hover:bg-gray-100">
               What We Do
            </a>


            <a href="/how-we-do" className="block px-3 py-2 rounded text-blue-900 hover:bg-gray-100">
              How We Do
            </a>

            <a href="/other-services" className="block px-3 py-2 rounded text-blue-900 hover:bg-gray-100">
              Other Services
            </a>



          </div>
        </div>
      )}
    </header>
  );
};

export default Header;