'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const navItems = [
    { name: 'Početna', href: '#home' },
    { name: 'Usluge', href: '#services' },
    { name: 'Automatizacija', href: '#automation' },
    { name: 'Razvoj', href: '#development' },
    { name: 'Kontakt', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        style={{ opacity }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`px-8 py-4 rounded-full backdrop-blur-xl border transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/95 border-purple-200/50 shadow-2xl shadow-purple-500/25' 
              : 'bg-white/80 border-white/40 shadow-xl shadow-purple-500/10'
          }`}
        >
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-purple-50/50"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-600 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '80%' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            ))}
            <motion.button
              onClick={() => {
                window.open('mailto:info@syncsolution.hr?subject=Upit za novi projekt', '_blank');
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">Započni projekt</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        style={{ opacity }}
        className="fixed top-4 left-4 right-4 z-50 lg:hidden"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`px-6 py-4 rounded-2xl backdrop-blur-xl border transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/95 border-purple-200/50 shadow-2xl shadow-purple-500/25' 
              : 'bg-white/80 border-white/40 shadow-xl shadow-purple-500/10'
          }`}
        >
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Sync Solution
            </motion.div>
            
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full absolute"
              />
              <motion.div
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full absolute"
              />
              <motion.div
                animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full absolute"
              />
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center h-full px-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-2">
                  Sync Solution
                </h2>
                <p className="text-purple-200">Inovativna softverska rješenja</p>
              </motion.div>

              <div className="space-y-6 w-full max-w-sm">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center py-4 px-6 text-white text-lg font-medium bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
              
              <motion.button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-sm mt-12 bg-white text-purple-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Započni projekt
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
