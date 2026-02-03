import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ServicesList from './components/ServicesList';
import PackagesSection from './components/PackagesSection';

export const metadata: Metadata = {
  title: 'Services - Infiniota Web Solutions',
  description:
    'Professional web design, development, web applications, and maintenance services. Comprehensive digital solutions for businesses of all sizes.',
  keywords: [
    'web design services',
    'web development',
    'custom web applications',
    'website maintenance',
    'IT services',
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Our Services
            </p>
            <h1 className="heading-section text-foreground mb-6">
              Comprehensive <span className="text-primary font-normal italic">Digital</span> Solutions
            </h1>
            <p className="text-body">
              From concept to launch and beyond, we provide end-to-end web
              solutions that drive business growth and deliver exceptional user
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ServicesList />
        </div>
      </section>

      {/* Packages Section */}
      <PackagesSection />

      <Footer />
    </main>
  );
}