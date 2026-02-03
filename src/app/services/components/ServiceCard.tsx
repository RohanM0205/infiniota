import Icon from '@/components/ui/AppIcon';

interface ServiceCardProps {
  service: {
    id: string;
    icon: string;
    title: string;
    description: string;
    forWho: string;
    benefits: string[];
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="card-premium group hover:border-primary/20 border border-transparent">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon
          name={service.icon as any}
          size={32}
          variant="outline"
          className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
        />
      </div>

      <h3 className="text-2xl font-semibold text-foreground mb-3">
        {service.title}
      </h3>

      <p className="text-base text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
            Who It's For
          </h4>
          <p className="text-sm text-muted-foreground">{service.forWho}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Key Benefits
          </h4>
          <ul className="space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={`${service.id}_benefit_${index}`} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-success shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;