import { ContactSection } from '@/components/ContactSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { GpsServicesSection } from '@/components/GpsServicesSection';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { PcServicesSection } from '@/components/PcServicesSection';
import { ProblemsSection } from '@/components/ProblemsSection';
import { LanguageProvider } from '@/context/LanguageContext';

export default function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemsSection />
        <GpsServicesSection />
        <PcServicesSection />
        <HowItWorksSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </LanguageProvider>
  );
}
