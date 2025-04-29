import './assets/css/header.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full min-h-screen bg-white dark:bg-gray-900">
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">

            <div>

            
          <div>
          <span className="titleHeader text-2xl font-semibold text-gray-800 dark:text-white">B.A. Parker</span>
          </div>
          
          <div>
          <span className='spanHeader'>writer, radio producer, stumbler</span>
          </div>

          </div>
          
        </div>
        <nav className="space-x-8">
          <Link to="/" className="text-gray-800 dark:text-white">About</Link>
          <Link to="/selectedWork" className="text-gray-800 dark:text-white">Selected Work</Link>
            <Link to="/press" className="text-gray-800 dark:text-white">Press</Link>
          <Link to="/contact" className="text-gray-800 dark:text-white">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col items-center pt-24 relative">
        {/* Menu Items (open upward above the button) */}
        {isMenuOpen && (
          <div className="flex flex-col items-center space-y-2 mb-4">
        
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 dark:text-white"
            >
              About
            </Link>

            <Link
              to="/selectedWork"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 dark:text-white"
            >
              Selected Work
            </Link>

            <Link
              to="/press"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 dark:text-white"
            >
              Press
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 dark:text-white"
            >
              Contact
            </Link>

          </div>
        )}

        {/* Centered Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${isMenuOpen ? 'menuButtonHeader' : ''}`}
        >
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
