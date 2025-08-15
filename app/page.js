'use client';

import FloatingNavbar from './components/FloatingNavbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AutomationSection from './components/AutomationSection';
import DevelopmentSection from './components/DevelopmentSection';
import ContactSection from './components/ContactSection';
import ParticleBackground from './components/ParticleBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <ParticleBackground />
      <FloatingNavbar />
      <HeroSection />
      <ServicesSection />
      <AutomationSection />
      <DevelopmentSection />
      <ContactSection />
    </div>
  );
}
