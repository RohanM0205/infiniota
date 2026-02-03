import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Package {
  id: string;
  name: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

const PackagesSection = () => {
  const packages: Package[] = [
    {
      id: 'package_starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups looking to establish their online presence.',
      features: [
        '5-8 page website',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        '30 days support',
      ],
      highlighted: false,
    },
    {
      id: 'package_business',
      name: 'Business',
      description: 'Comprehensive solution for growing businesses with advanced features and functionality.',
      features: [
        '10-15 page website',
        'Custom design & animations',
        'Advanced SEO & analytics',
        'CMS integration',
        'E-commerce capabilities',
        '90 days support',
      ],
      highlighted: true,
    },
    {
      id: 'package_advanced',
      name: 'Advanced',
      description: 'Enterprise-grade solution with custom development and unlimited possibilities.',
      features: [
        'Unlimited pages',
        'Custom web application',
        'API integrations',
        'User authentication',
        'Advanced features',
        '6 months support',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Website Packages
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Choose Your <span className="text-primary font-normal italic">Perfect</span> Package
          </h2>
          <p className="text-body max-w-2xl mx-auto mb-4">
            Flexible packages designed to meet different business needs and budgets.
          </p>
          <p className="text-sm text-muted-foreground italic">
            * Pricing depends on specific requirements and features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`card-premium ${
                pkg.highlighted
                  ? 'border-2 border-primary transform md:-translate-y-4'
                  : 'border border-border'
              }`}
            >
              {pkg.highlighted && (
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {pkg.name}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li
                    key={`${pkg.id}_feature_${index}`}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      variant="solid"
                      className="text-success shrink-0 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-primary text-primary-foreground hover:scale-105 shadow-lg'
                    : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground border border-border'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;