import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import WhyChooseSection from './components/WhyChooseSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Infiniota - Building Digital Experiences That Drive Growth',
  description:
    'Professional website design, development, and digital solutions for businesses and organizations. Transform your vision into reality with scalable web experiences.',
  keywords: [
    'web design',
    'web development',
    'digital solutions',
    'IT services',
    'custom websites',
    'web applications',
  ],
};

export default function Homepage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <FeaturedProjectsSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </main>
  );
}