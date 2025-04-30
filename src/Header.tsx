import './assets/css/header.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'About' },
    { path: '/selectedWork', label: 'Selected Work' },
    { path: '/press', label: 'Press' },
    { path: '/contact', label: 'Contact' },
  ];

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
              <span className="spanHeader">writer, radio producer, stumbler</span>
            </div>
          </div>
        </div>
        <nav className="space-x-8">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                style={{ opacity: isActive ? 1 : 0.5 }}
                className="text-gray-800 dark:text-white transition-opacity duration-300"
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col items-center pt-24 relative">
        {isMenuOpen && (
          <div className="flex flex-col items-center space-y-2 mb-4">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ opacity: isActive ? 1 : 0.5 }}
                  className="text-gray-800 dark:text-white transition-opacity duration-300"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}

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
