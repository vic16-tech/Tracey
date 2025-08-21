'use client'; // This directive indicates that this component will use client-side features

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for exit animations
import { Menu, X, LogIn, User, Search } from 'lucide-react'; // Lucide icons for menu, user actions, and search

const Header: React.FC = () => {
  // State to control the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants for the mobile menu overlay
  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: '0%', opacity: 1, transition: { type: 'tween', duration: 0.3 } },
    exit: { x: '100%', opacity: 0, transition: { type: 'tween', duration: 0.3 } },
  };

  // Animation variants for menu items (staggered)
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    // Main header container with dark background (mimicking Codecademy)
    // Uses 'font-sans' to inherit the AR_One_Sans font
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
      className="w-full bg-gray-900 shadow-xl py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 font-sans"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Mimicking "Codecademy" look */}
        <Link href="/" className="flex items-center space-x-0 cursor-pointer">
          {/* "Exam" part of the logo - dark text */}
          <span className="text-3xl font-bold text-gray-100">Exam</span>
          {/* "Prep" part of the logo - light blue/cyan text, like "cademy" */}
          <span style={{ color: '#00bcd4' }} className="text-3xl font-bold">Prep</span>
        </Link>

        {/* Desktop Navigation (visible on medium screens and up) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-200 rounded-md py-1 px-2">
            Catalog
          </Link>
          <Link href="/resources" className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-200 rounded-md py-1 px-2">
            Resources
          </Link>
          <Link href="/community" className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-200 rounded-md py-1 px-2">
            Community
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-200 rounded-md py-1 px-2">
            Pricing
          </Link>
          <Link href="/live-learning" className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-200 rounded-md py-1 px-2">
            Live Learning
          </Link>
          <Link href="/for-business" className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-200 rounded-md py-1 px-2">
            For Business
          </Link>
        </nav>

        {/* Right-side icons and buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Icon */}
          <button
            aria-label="Search"
            className="p-2 text-gray-300 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition-colors duration-200"
          >
            <Search className="h-6 w-6" />
          </button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/login" className="inline-flex items-center justify-center px-5 py-2 border border-gray-300 text-gray-900 font-medium rounded-lg bg-white hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 text-md">
              <LogIn className="h-4 w-4 mr-2" /> Log In
            </Link>
          </motion.div>

          {/* Sign Up Button - Yellow background, dark text */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/signup" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-gray-900 font-medium rounded-lg shadow-md bg-yellow-400 hover:bg-yellow-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-gray-900 text-md">
              <User className="h-4 w-4 mr-2" /> Sign Up
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle Button (visible only on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)} // Always sets to true to open menu
            className="p-2 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900"
            aria-label="Open Mobile Menu"
          >
            <Menu className="h-8 w-8" /> {/* Always show Menu icon here */}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Animated with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-gray-800 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden shadow-lg"
          >
            {/* Close button INSIDE the mobile menu overlay */}
            <button
              onClick={() => setIsMobileMenuOpen(false)} // Sets to false to close menu
              className="absolute top-4 right-4 p-2 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-50" // Higher z-index to ensure clickability
              aria-label="Close Mobile Menu"
            >
              <X className="h-8 w-8" /> {/* Show X icon here */}
            </button>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={containerVariants} // Reusing containerVariants for staggered items
              className="flex flex-col items-center space-y-6"
            >
              <motion.div variants={menuItemVariants}>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400 text-3xl font-bold transition-colors duration-200">
                  Catalog
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400 text-3xl font-bold transition-colors duration-200">
                  Resources
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link href="/community" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400 text-3xl font-bold transition-colors duration-200">
                  Community
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400 text-3xl font-bold transition-colors duration-200">
                  Pricing
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link href="/live-learning" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400 text-3xl font-bold transition-colors duration-200">
                  Live Learning
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link href="/for-business" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400 text-3xl font-bold transition-colors duration-200">
                  For Business
                </Link>
              </motion.div>
            </motion.nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-4 mt-8">
              <motion.div variants={buttonTapVariants} whileHover="hover" whileTap="tap">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-xl w-64">
                  <LogIn className="h-6 w-6 mr-2" /> Log In
                </Link>
              </motion.div>
              <motion.div variants={buttonTapVariants} whileHover="hover" whileTap="tap">
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-gray-900 font-medium rounded-lg shadow-md bg-yellow-400 hover:bg-yellow-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 text-xl w-64">
                  <User className="h-6 w-6 mr-2" /> Sign Up
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

// Reusing general animation variants from Page.tsx for consistency
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const buttonTapVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};
