import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import MissionSection from './components/MissionSection';
import ApproachSection from './components/ApproachSection';
import ValuesSection from './components/ValuesSection';

export const metadata: Metadata = {
  title: 'About Us - Infiniota',
  description:
    'Learn about Infiniota - a team of experienced developers delivering scalable digital solutions. Our approach, values, and commitment to quality.',
  keywords: [
    'about infiniota',
    'web development team',
    'our approach',
    'company values',
    'who we are',
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              About Infiniota
            </p>
            <h1 className="heading-section text-foreground mb-6">
              Building the <span className="text-primary font-normal italic">Future</span> of Web
            </h1>
            <p className="text-body">
              We're a team of passionate developers and designers committed to
              delivering exceptional digital solutions that drive real business
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Approach Section */}
      <ApproachSection />

      {/* Values Section */}
      <ValuesSection />

      <Footer />
    </main>
  );
}