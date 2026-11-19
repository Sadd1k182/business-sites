import { ContactSection } from '@/components/ContactSection';
import { FaqSection } from '@/components/FaqSection';
import { GpsServicesSection } from '@/components/GpsServicesSection';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { PcServicesSection } from '@/components/PcServicesSection';
import { LanguageProvider } from '@/context/LanguageContext';

export default function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <GpsServicesSection />
        <PcServicesSection />
        <HowItWorksSection />
        <FaqSection />
      </main>
      <ContactSection />
      <MobileStickyBar />
    </LanguageProvider>
  );
}
