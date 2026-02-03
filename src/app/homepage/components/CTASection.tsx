import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="mb-8">
          <Icon
            name="RocketLaunchIcon"
            size={64}
            variant="outline"
            className="text-primary-foreground mx-auto mb-6 animate-float"
          />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-primary-foreground mb-6 leading-tight">
          Let's Build Something{' '}
          <span className="font-normal italic">Great</span> Together
        </h2>

        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to transform your digital presence? Get in touch with us today
          and let's discuss how we can help your business grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-10 py-5 bg-white text-primary rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-3xl w-full sm:w-auto group"
          >
            <span>Contact Us</span>
            <Icon
              name="ArrowRightIcon"
              size={20}
              variant="outline"
              className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>

          <a
            href="https://wa.me/919765872560?text=Hi%2C%20I%20am%20interested%20in%20building%20a%20website.%20Please%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-primary w-full sm:w-auto group"
          >
            <Icon
              name="ChatBubbleLeftRightIcon"
              size={20}
              variant="outline"
              className="inline-block mr-2"
            />
            <span>WhatsApp</span>
          </a>

        </div>

        <p className="text-sm text-primary-foreground/70 mt-8">
          Free consultation available • No obligation • Quick response
        </p>
      </div>
    </section>
  );
};

export default CTASection;