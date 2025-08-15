'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AutomationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const automationServices = [
    {
      title: "Automatizirana obrada narudžbi",
      description: "Automatska obrada narudžbi iz e-maila (PDF format) s izravnim kreiranjem naloga u ERP sustavu za potpunu digitalizaciju procesa naručivanja.",
      icon: "📧",
      features: ["PDF parsing", "ERP integracija", "Automatsko kreiranje naloga", "Email notifikacije"],
      gradient: "from-emerald-500 to-teal-600",
      delay: 0.1
    },
    {
      title: "Analiza prodaje i optimizacija zaliha",
      description: "Napredni sustav analize prodaje po prodajnim mjestima s automatskim prijedlogom optimalnih zaliha na temelju povijesnih podataka i trendova.",
      icon: "📊",
      features: ["Prediktivna analitika", "Optimizacija zaliha", "Reporting", "Trend analiza"],
      gradient: "from-blue-500 to-indigo-600",
      delay: 0.2
    },
    {
      title: "HR aplikacija za upravljanje",
      description: "Sveobuhvatna HR aplikacija za vođenje evidencije zaposlenika i olakšano administriranje svih kadrovskih procesa u jednom mjestu.",
      icon: "👥",
      features: ["Evidencija zaposlenika", "Administracija", "Workflow automatizacija", "Dokumentacija"],
      gradient: "from-purple-500 to-pink-600",
      delay: 0.3
    },
    {
      title: "Praćenje ugovora i podsjetnici",
      description: "Automatsko praćenje ugovora s inteligentnim podsjetnicima na rokove isteka, produženja i važne datume za proaktivno upravljanje.",
      icon: "📋",
      features: ["Praćenje rokova", "Automatski podsjetnici", "Upravljanje ugovorima", "Kalendarska integracija"],
      gradient: "from-orange-500 to-red-600",
      delay: 0.4
    },
    {
      title: "CRM integracija web upita",
      description: "Automatizirana obrada upita s web stranice s direktnom integracijom u CRM sustav za besprijekorno praćenje potencijalnih klijenata.",
      icon: "🌐",
      features: ["Web form integracija", "CRM automatizacija", "Lead scoring", "Follow-up automatizacija"],
      gradient: "from-cyan-500 to-blue-600",
      delay: 0.5
    },
    {
      title: "Webshop skladišna integracija",
      description: "Potpuna integracija webshopa sa skladišnim sustavom za ažurno stanje zaliha i automatsko kreiranje naloga za dostavu u realnom vremenu.",
      icon: "🛒",
      features: ["Real-time sync", "Inventory management", "Automatska dostava", "Order tracking"],
      gradient: "from-green-500 to-emerald-600",
      delay: 0.6
    },
    {
      title: "Automatizirano fakturiranje",
      description: "Potpuno automatizirano fakturiranje i slanje računa s prilagodljivim predlošcima i automatskim praćenjem plaćanja.",
      icon: "💰",
      features: ["Automatsko fakturiranje", "Email slanje", "Payment tracking", "Prilagodljivi predlošci"],
      gradient: "from-amber-500 to-orange-600",
      delay: 0.7
    },
    {
      title: "Interaktivni dashboardi",
      description: "Izrada naprednih interaktivnih dashboarda za analizu poslovnih podataka u realnom vremenu s prilagodljivim KPI metrikama.",
      icon: "📈",
      features: ["Real-time analytics", "Prilagodljivi KPI", "Interaktivni grafovi", "Export funkcionalnost"],
      gradient: "from-violet-500 to-purple-600",
      delay: 0.8
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="automation" ref={ref} className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Primary animated orbs with enhanced glow */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/25 to-blue-500/25 rounded-full blur-3xl"
          style={{
            filter: "blur(50px)",
            boxShadow: "0 0 250px rgba(139, 92, 246, 0.4), 0 0 500px rgba(59, 130, 246, 0.2)"
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -35, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/25 to-indigo-500/25 rounded-full blur-3xl"
          style={{
            filter: "blur(50px)",
            boxShadow: "0 0 220px rgba(59, 130, 246, 0.4), 0 0 440px rgba(99, 102, 241, 0.2)"
          }}
        />
        
        {/* Additional floating elements for depth */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -60, 30, 0],
            scale: [0.8, 1.3, 0.9, 0.8],
            opacity: [0.3, 0.7, 0.4, 0.3],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.8, 1.2, 1],
            opacity: [0.4, 0.8, 0.3, 0.4],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Dynamic grid pattern */}
      <motion.div
        animate={{
          opacity: [0.05, 0.2, 0.05],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
              Naša Specijalizacija
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
          >
            Automatizacija
          </motion.h2>
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white"
          >
            Poslovnih Procesa
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-200 max-w-4xl mx-auto text-center leading-relaxed"
          >
            Transformiramo vaše poslovne procese kroz naprednu automatizaciju koja štedi vrijeme, 
            smanjuje greške i povećava efikasnost. Evo naših ključnih rješenja:
          </motion.p>
        </motion.div>

        {/* Enhanced Automation Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {automationServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden h-full">
                {/* Enhanced Card Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  whileHover={{ opacity: 0.1 }}
                />
                
                {/* Floating Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 mb-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {service.icon}
                  </div>
                </motion.div>

                {/* Enhanced Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Enhanced Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: service.delay + 0.1 * idx, duration: 0.5 }}
                        className="flex items-center text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                      >
                        <motion.div 
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 flex-shrink-0`}
                          whileHover={{ scale: 1.3 }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Hover Border Effect */}
                <motion.div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-[2px] bg-white/95 rounded-3xl backdrop-blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" 
              />
            </div>
            
            <div className="relative z-10">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="text-2xl md:text-4xl font-bold mb-6"
              >
                Spremni za automatizaciju?
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto"
              >
                Kontaktirajte nas danas i saznajte kako možemo transformirati vaše poslovne procese 
                kroz naprednu automatizaciju prilagođenu vašim specifičnim potrebama.
              </motion.p>
              <motion.button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -8
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-500 overflow-hidden"
                style={{
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.5), 0 0 80px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    background: [
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)",
                      "linear-gradient(225deg, transparent, rgba(255,255,255,0.15), transparent)",
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    ⚡
                  </motion.span>
                  Započni automatizaciju
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
