import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  forWho: string;
  benefits: string[];
}

const ServicesList = () => {
  const services: Service[] = [
    {
      id: 'service_design',
      icon: 'PaintBrushIcon',
      title: 'Website Design',
      description:
        'Beautiful, user-centric designs that capture your brand essence and create memorable experiences for your audience. We focus on aesthetics, usability, and conversion optimization.',
      forWho:
        'Businesses seeking to establish a strong visual identity and create lasting impressions with professional, modern web design.',
      benefits: [
        'Custom UI/UX design tailored to your brand',
        'Mobile-responsive layouts for all devices',
        'Conversion-focused design strategies',
        'Brand identity integration and consistency',
        'Interactive prototypes for feedback',
      ],
    },
    {
      id: 'service_development',
      icon: 'CodeBracketIcon',
      title: 'Website Development',
      description:
        'Robust, scalable web solutions built with modern technologies. We create fast, secure, and maintainable websites that perform exceptionally across all platforms.',
      forWho:
        'Organizations requiring reliable, high-performance websites with custom functionality and seamless integration capabilities.',
      benefits: [
        'Clean, maintainable code architecture',
        'Fast loading speeds and optimization',
        'SEO-friendly structure and implementation',
        'Secure, scalable infrastructure',
        'Cross-browser compatibility guaranteed',
      ],
    },
    {
      id: 'service_web_apps',
      icon: 'CubeIcon',
      title: 'Web Applications',
      description:
        'Custom web applications tailored to your specific business needs. From dashboards to complex platforms, we build solutions that streamline operations and enhance productivity.',
      forWho:
        'Companies needing custom software solutions, internal tools, or SaaS platforms to automate workflows and improve efficiency.',
      benefits: [
        'Custom functionality for your workflow',
        'Real-time data synchronization',
        'User authentication and role management',
        'API integrations with existing systems',
        'Scalable architecture for growth',
      ],
    },
    {
      id: 'service_maintenance',
      icon: 'WrenchScrewdriverIcon',
      title: 'Maintenance & Support',
      description:
        'Ongoing support and maintenance to keep your digital presence secure, updated, and running smoothly. We monitor, optimize, and enhance your website continuously.',
      forWho:
        'Businesses wanting peace of mind with professional ongoing support, regular updates, and proactive maintenance.',
      benefits: [
        'Regular security updates and patches',
        'Performance monitoring and optimization',
        'Content updates and feature additions',
        'Technical support and troubleshooting',
        'Monthly reports and analytics',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;