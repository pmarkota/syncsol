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
    <section id="services" ref={ref} className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
        />
      </div>

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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Naše <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Usluge</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Pružamo sveobuhvatne softverske usluge koje pokrivaju sve aspekte 
            digitalnog poslovanja - od analize do implementacije i održavanja
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
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col">
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Floating Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  className="relative z-10 mb-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {service.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] bg-white rounded-3xl" />
                </div>
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
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            Razgovarajmo o vašem projektu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
