'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Analiza i Savjetovanje",
      description: "Detaljno analiziramo vaše poslovne procese i predlažemo optimalna softverska rješenja za vaše potrebe. Naš tim stručnjaka provodi dubinsku analizu postojećih sustava i identificira mogućnosti za poboljšanje.",
      icon: "🔍",
      gradient: "from-purple-500 to-blue-600",
      delay: 0.1
    },
    {
      title: "Implementacija",
      description: "Pružamo potpunu podršku tijekom implementacije, uključujući migraciju podataka i obuku korisnika. Osiguravamo glatki prijelaz na nova rješenja s minimalnim prekidima poslovanja.",
      icon: "⚙️",
      gradient: "from-blue-500 to-indigo-600",
      delay: 0.2
    },
    {
      title: "Razvoj i Održavanje",
      description: "Razvijamo prilagođena poslovna rješenja i osiguravamo njihovo kontinuirano održavanje i nadogradnju. Koristimo najnovije tehnologije za stvaranje skalabilnih i sigurnih aplikacija.",
      icon: "🚀",
      gradient: "from-indigo-500 to-purple-600",
      delay: 0.3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" ref={ref} className="relative py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Primary animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            filter: "blur(40px)",
            boxShadow: "0 0 200px rgba(139, 92, 246, 0.3), 0 0 400px rgba(59, 130, 246, 0.15)"
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
          style={{
            filter: "blur(40px)",
            boxShadow: "0 0 180px rgba(59, 130, 246, 0.3), 0 0 360px rgba(99, 102, 241, 0.15)"
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [0.8, 1.1, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-2xl"
        />
      </div>

      {/* Animated grid pattern */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Naše <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Usluge</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Pružamo sveobuhvatne softverske usluge koje pokrivaju sve aspekte digitalnog 
            poslovanja - od analize do implementacije i održavanja
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative h-full"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:border-white/20"
                style={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(139, 92, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }}
              >
                {/* Enhanced Card Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  whileHover={{
                    boxShadow: `0 30px 60px rgba(139, 92, 246, 0.2), 0 0 100px ${service.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.15)' : 'rgba(59, 130, 246, 0.15)'}`
                  }}
                />
                
                {/* Floating Icon with Glow */}
                <motion.div
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 10,
                    y: -5
                  }}
                  className="relative z-10 mb-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-2xl relative overflow-hidden`}
                    style={{
                      boxShadow: `0 10px 30px ${service.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.4)' : 'rgba(59, 130, 246, 0.4)'}, 0 0 40px ${service.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`
                    }}
                  >
                    <motion.div
                      animate={{
                        background: [
                          "linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)",
                          "linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        backgroundSize: "200% 200%"
                      }}
                    />
                    <span className="relative z-10">{service.icon}</span>
                  </div>
                </motion.div>

                {/* Enhanced Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-1">
                    {service.description}
                  </p>
                </div>

                {/* Enhanced Hover Effect Border with Glow */}
                <motion.div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  whileHover={{
                    boxShadow: `0 0 80px ${service.gradient.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                  }}
                >
                  <div className="absolute inset-[2px] bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-3xl" />
                </motion.div>

                {/* Floating particles effect */}
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30"
                />
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                  className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-40"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => {
              window.open('mailto:info@syncsolution.hr?subject=Upit za novi projekt', '_blank');
            }}
            whileHover={{ 
              scale: 1.08,
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl transition-all duration-500 overflow-hidden"
            style={{
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                background: [
                  "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                  "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Razgovarajmo o vašem projektu
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💬
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
