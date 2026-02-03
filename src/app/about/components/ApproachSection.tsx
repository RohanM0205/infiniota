import Icon from '@/components/ui/AppIcon';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

const ApproachSection = () => {
  const steps: Step[] = [
    {
      id: 'step_1',
      number: '01',
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business goals, target audience, and project requirements through detailed consultation.',
      icon: 'MagnifyingGlassIcon',
    },
    {
      id: 'step_2',
      number: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create beautiful, user-centric interfaces that align with your brand and engage your audience.',
      icon: 'PaintBrushIcon',
    },
    {
      id: 'step_3',
      number: '03',
      title: 'Development & Testing',
      description: 'We build robust, scalable solutions using modern technologies, with rigorous testing to ensure quality.',
      icon: 'CodeBracketIcon',
    },
    {
      id: 'step_4',
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support to ensure continued success and optimal performance.',
      icon: 'RocketLaunchIcon',
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Our Approach
          </p>
          <h2 className="heading-section text-foreground">
            How We <span className="text-primary font-normal italic">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="card-premium h-full hover:border-primary/20 border border-transparent">
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon
                    name={step.icon as any}
                    size={28}
                    variant="outline"
                    className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;