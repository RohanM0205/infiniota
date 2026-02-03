import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ProjectGrid from './components/ProjectGrid';

export const metadata: Metadata = {
  title: 'Our Work - Infiniota Portfolio',
  description:
    'Explore our portfolio of successful web design and development projects across various industries including hospitality, restaurants, fitness, education, and corporate solutions.',
  keywords: [
    'portfolio',
    'web design projects',
    'web development showcase',
    'case studies',
    'client work',
  ],
};

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Our Portfolio
            </p>
            <h1 className="heading-section text-foreground mb-6">
              Our Recent <span className="text-primary font-normal italic">Success</span> Stories
            </h1>
            <p className="text-body">
              Discover how we've helped businesses transform their digital presence
              with innovative web solutions. Each project showcases our commitment
              to quality, functionality, and business results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ProjectGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}