'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DevelopmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const developmentServices = [
    {
      title: "Razvoj Web Aplikacija",
      description: "Kreiramo moderne, responzivne web aplikacije koristeći najnovije tehnologije poput React, Next.js, i Node.js. Naše aplikacije su optimizirane za performanse i korisničko iskustvo.",
      icon: "💻",
      features: ["React & Next.js", "Responzivni dizajn", "SEO optimizacija", "Brze performanse"],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Mobilne Aplikacije",
      description: "Razvijamo native i cross-platform mobilne aplikacije za iOS i Android platforme. Koristimo React Native i Flutter za stvaranje aplikacija koje pružaju izvrsno korisničko iskustvo.",
      icon: "📱",
      features: ["iOS & Android", "Cross-platform", "Native performanse", "Offline funkcionalnost"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Integracija Sustava",
      description: "Povezujemo različite poslovne sustave u jedinstveno rješenje za učinkovitije poslovanje. Specijalizirani smo za API integracije, mikroservise i cloud rješenja.",
      icon: "🔗",
      features: ["API integracije", "Mikroservisi", "Cloud rješenja", "Automatizacija"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "E-commerce Rješenja",
      description: "Stvaramo potpuna e-commerce rješenja s integriranim sustavima za plaćanje, upravljanje inventarom i analitiku. Podržavamo sve popularne platforme i payment gateway-e.",
      icon: "🛒",
      features: ["Online trgovine", "Payment gateway", "Inventory management", "Analytics"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Cloud & DevOps",
      description: "Implementiramo cloud infrastrukturu i DevOps procese za skalabilnost i sigurnost. Koristimo AWS, Azure i Google Cloud za optimalne performanse.",
      icon: "☁️",
      features: ["AWS/Azure/GCP", "CI/CD pipeline", "Monitoring", "Skalabilnost"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "AI & Machine Learning",
      description: "Integriramo umjetnu inteligenciju i strojno učenje u vaše aplikacije. Od chatbotova do prediktivne analitike, pomažemo vam iskoristiti snagu AI-ja.",
      icon: "🤖",
      features: ["Chatbotovi", "Prediktivna analitika", "Computer Vision", "NLP"],
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
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
    <section id="development" ref={ref} className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"
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
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Razvoj & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Tehnologije</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Koristimo najnovije tehnologije i najbolje prakse za stvaranje 
            inovativnih rješenja koja pokreću vaše poslovanje u digitalnu budućnost
          </motion.p>
        </motion.div>

        {/* Development Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {developmentServices.map((service, index) => (
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
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] bg-white rounded-3xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Tehnologije koje koristimo</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
