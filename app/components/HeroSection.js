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
    <section ref={ref} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layered Gradient Background */}
      <motion.div 
        style={{ y: isDesktop ? y : 0, opacity: isDesktop ? opacity : 1 }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"
      />
      
      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
      
      {/* Simplified background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Enhanced floating orbs with glow effects */}
      <div className="absolute inset-0">
        {/* Primary glowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"
          style={{
            filter: "blur(40px)",
            boxShadow: "0 0 200px rgba(139, 92, 246, 0.4), 0 0 400px rgba(59, 130, 246, 0.2)"
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl"
          style={{
            filter: "blur(40px)",
            boxShadow: "0 0 180px rgba(59, 130, 246, 0.4), 0 0 360px rgba(99, 102, 241, 0.2)"
          }}
        />
        
        {/* Secondary ambient orbs with enhanced glow */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -70, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/25 to-purple-500/25 rounded-full blur-3xl"
          style={{
            filter: "blur(35px)",
            boxShadow: "0 0 150px rgba(236, 72, 153, 0.3), 0 0 300px rgba(139, 92, 246, 0.15)"
          }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1.1, 1, 1.1],
            rotate: [180, 270, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 left-1/3 w-56 h-56 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full blur-3xl"
          style={{
            filter: "blur(35px)",
            boxShadow: "0 0 140px rgba(6, 182, 212, 0.3), 0 0 280px rgba(59, 130, 246, 0.15)"
          }}
        />
        
        {/* Additional micro orbs for depth */}
        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 20, 0],
            scale: [0.8, 1.1, 0.9, 0.8],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 30, -20, 0],
            scale: [0.9, 1.2, 0.8, 0.9],
            opacity: [0.4, 0.7, 0.3, 0.4],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl"
        />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/3 w-16 h-16 border border-purple-400/20 rounded-lg backdrop-blur-sm"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-blue-400/20 rounded-full backdrop-blur-sm"
        />
      </div>

      <motion.div 
        style={{ y: isDesktop ? y : 0 }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-16 md:pt-0"
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
              alt="Sync Solution Logo"
              width={300}
              height={230}
              className="relative z-10 drop-shadow-2xl w-auto h-auto max-w-[250px] md:max-w-[350px] lg:max-w-[450px]"
              priority
            />
          </div>
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
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
          className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          Specijalizirani smo za <span className="text-purple-300 font-semibold">automatizaciju poslovnih procesa</span> i 
          razvoj naprednih softverskih rješenja koja transformiraju način rada vaše organizacije
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-16 px-4"
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
