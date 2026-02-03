import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 'service_design',
      icon: 'PaintBrushIcon',
      title: 'Website Design',
      description:
        'Beautiful, user-centric designs that capture your brand essence and engage your audience effectively.',
    },
    {
      id: 'service_development',
      icon: 'CodeBracketIcon',
      title: 'Website Development',
      description:
        'Robust, scalable web solutions built with modern technologies for optimal performance and reliability.',
    },
    {
      id: 'service_web_apps',
      icon: 'CubeIcon',
      title: 'Web Applications',
      description:
        'Custom web applications tailored to your business needs, from dashboards to complex platforms.',
    },
    {
      id: 'service_maintenance',
      icon: 'WrenchScrewdriverIcon',
      title: 'Maintenance & Support',
      description:
        'Ongoing support and maintenance to keep your digital presence secure, updated, and running smoothly.',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Our Services
          </p>
          <h2 className="heading-section text-foreground mb-6">
            What We <span className="text-primary font-normal italic">Offer</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your business
            and create lasting impact in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="card-premium group hover:border-primary/20 border border-transparent cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon
                  name={service.icon as any}
                  size={28}
                  variant="outline"
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;