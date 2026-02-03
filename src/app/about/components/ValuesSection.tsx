import Icon from '@/components/ui/AppIcon';

interface Value {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const ValuesSection = () => {
  const values: Value[] = [
    {
      id: 'value_quality',
      icon: 'StarIcon',
      title: 'Quality First',
      description: 'We never compromise on quality. Every project receives meticulous attention to detail and craftsmanship.',
    },
    {
      id: 'value_clarity',
      icon: 'LightBulbIcon',
      title: 'Clear Communication',
      description: 'Transparent, honest communication throughout the project lifecycle. No jargon, just clarity.',
    },
    {
      id: 'value_longterm',
      icon: 'ChartBarIcon',
      title: 'Long-Term Thinking',
      description: 'We build solutions designed to grow with your business, ensuring scalability and sustainability.',
    },
    {
      id: 'value_partnership',
      icon: 'HandRaisedIcon',
      title: 'True Partnership',
      description: 'Your success is our success. We collaborate closely to achieve your business objectives.',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Our Values
          </p>
          <h2 className="heading-section text-foreground">
            What Drives <span className="text-primary font-normal italic">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.id} className="card-premium group hover:border-primary/20 border border-transparent text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mx-auto">
                <Icon
                  name={value.icon as any}
                  size={32}
                  variant="outline"
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;