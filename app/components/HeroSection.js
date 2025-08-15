'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Gradient Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      />
      
      {/* Layered Background Effects */}
      <div className="absolute inset-0">
        {/* Primary floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 240, 120, 0],
            x: [0, -40, 30, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl"
        />
        
        {/* Secondary ambient lights */}
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-2/3 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"
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
        style={{ y: y }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Enhanced Logo Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            type: "spring",
            stiffness: 80
          }}
          className="mb-16"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative inline-block"
          >
            {/* Enhanced glow effects */}
            <motion.div 
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl scale-125" 
            />
            <motion.div 
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl scale-150" 
            />
            <Image
              src="/Martin - bijeli logo1.png"
              alt="Sync Solution Logo"
              width={450}
              height={350}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </motion.div>
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
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-32"
        >
          <motion.button
            onClick={() => {
              document.querySelector('#automation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.5)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-purple-500/60 transition-all duration-500 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <span className="relative z-10 flex items-center gap-2">
              Započni automatizaciju
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => {
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            className="group border-2 border-white/40 text-white px-10 py-5 rounded-full text-lg font-semibold backdrop-blur-sm hover:border-white/60 transition-all duration-500 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <span className="relative z-10">Pogledaj naše usluge</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
