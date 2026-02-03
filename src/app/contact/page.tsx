import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us - Infiniota',
  description:
    'Get in touch with Infiniota for your web design and development needs. Free consultation available. Contact us via email, phone, or WhatsApp.',
  keywords: [
    'contact',
    'web design inquiry',
    'free consultation',
    'get quote',
    'web development contact',
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Contact Us
            </p>
            <h1 className="heading-section text-foreground mb-6">
              Let's Start <span className="text-primary font-normal italic">Building</span> Together
            </h1>
            <p className="text-body">
              Have a project in mind? We'd love to hear from you. Fill out the
              form or reach out through any of our contact channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}