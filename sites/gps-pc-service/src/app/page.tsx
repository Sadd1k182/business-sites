import { ContactSection } from '@/components/ContactSection';
import { FaqSection } from '@/components/FaqSection';
import { GpsServicesSection } from '@/components/GpsServicesSection';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PcServicesSection } from '@/components/PcServicesSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PainPointsSection />
        <GpsServicesSection />
        <PcServicesSection />
        <HowItWorksSection />
        <FaqSection />
      </main>
      <ContactSection />
      <MobileStickyBar />
    </>
  );
}
