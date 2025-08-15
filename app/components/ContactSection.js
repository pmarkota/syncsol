'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      title: "Nazovite nas",
      description: "Razgovarajmo direktno o vašem projektu",
      value: "+385 99 214 6698",
      href: "tel:+385992146698",
      icon: "📞",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Pošaljite email",
      description: "Opišite svoj projekt u detaljima",
      value: "martin.pucic@syncsolution.hr",
      href: "mailto:martin.pucic@syncsolution.hr",
      icon: "✉️",
      gradient: "from-blue-600 to-indigo-600"
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
    <section id="contact" ref={ref} className="relative py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
          >
            Kontaktirajte nas
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto mb-8"
          >
            Spremni smo pomoći u digitalizaciji vašeg poslovanja. 
            Kontaktirajte nas danas i započnimo zajedno vaš put prema digitalnoj transformaciji.
          </motion.p>
        </motion.div>

        {/* Enhanced Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/30 hover:border-purple-400/60 transition-all duration-500 overflow-visible w-80 max-w-sm min-h-96 flex flex-col justify-between"
              style={{
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              }}
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                initial={false}
              />
              

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Section */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-4xl">
                    {method.icon}
                  </div>
                </div>

                {/* Title and Description */}
                <div className="text-center mb-8 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{method.description}</p>
                </div>

                {/* Contact Info */}
                <div className="mt-auto">
                  <div 
                    className="text-sm font-semibold text-center p-3 rounded-xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-sm border border-white/30 text-white break-all"
                    style={{
                      boxShadow: "0 8px 25px rgba(139, 92, 246, 0.2)",
                      wordWrap: "break-word",
                      overflowWrap: "break-word"
                    }}
                  >
                    <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent font-bold text-sm leading-tight">
                      {method.value}
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          
          <div className="relative z-10">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Zašto odabrati Sync Solution?
            </motion.h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Brza implementacija</h4>
                <p className="text-sm opacity-90">Efikasni procesi za brže rezultate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Prilagođena rješenja</h4>
                <p className="text-sm opacity-90">Svaki projekt je jedinstven</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-semibold mb-2">Kontinuirana podrška</h4>
                <p className="text-sm opacity-90">Tu smo i nakon implementacije</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
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
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
          >
            Započni projekt
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
