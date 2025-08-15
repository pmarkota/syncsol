'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-0">
      {/* Multi-layered Gradient Background */}
      <motion.div 
        style={{ y: isDesktop ? y : 0, opacity: isDesktop ? opacity : 1 }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"
      />
      
      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
      
      {/* Simplified static background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div 
        style={{ y: isDesktop ? y : 0 }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto py-8 md:py-16"
      >
        {/* Enhanced Logo Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut"
          }}
          className="mb-8 md:mb-16"
        >
          <div className="relative inline-block">
            <Image
              src="/Martin - bijeli logo1.png"
              alt="SyncSolution Logo"
              width={450}
              height={200}
              priority
              loading="eager"
              className="relative z-10 drop-shadow-2xl w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]"
            />
          </div>
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
          >
            Jednostavna rješenja
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            za složene izazove
          </motion.span>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2"
        >
          Specijalizirani smo za <span className="text-purple-300 font-semibold">automatizaciju poslovnih procesa</span> i 
          razvoj naprednih softverskih rješenja koja transformiraju način rada vaše organizacije
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4"
        >
          <motion.button
            onClick={() => {
              document.querySelector('#automation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl w-full sm:w-auto"
          >
            Saznaj više →
          </motion.button>

          <motion.button
            onClick={() => {
              window.open('mailto:martin.pucic@syncsolution.hr?subject=Upit za novi projekt', '_blank');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 w-full sm:w-auto"
          >
            Kontakt 📧
          </motion.button>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={() => {
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm hover:border-white/60 transition-colors duration-300 cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2"
            />
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/20 rounded-full"
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
