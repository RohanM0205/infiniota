import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Reason {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const WhyChooseSection = () => {
  const reasons: Reason[] = [
  {
    id: 'reason_professional',
    icon: 'StarIcon',
    title: 'Professional & Scalable',
    description:
    'Enterprise-grade solutions built to grow with your business, ensuring long-term success.'
  },
  {
    id: 'reason_modern',
    icon: 'SparklesIcon',
    title: 'Clean, Modern UI/UX',
    description:
    'Beautiful, intuitive interfaces that users love and that drive conversions effectively.'
  },
  {
    id: 'reason_business',
    icon: 'ChartBarIcon',
    title: 'Business-Focused Approach',
    description:
    'We prioritize your business goals and ROI, not just aesthetics or technology.'
  },
  {
    id: 'reason_support',
    icon: 'ShieldCheckIcon',
    title: 'Long-Term Support',
    description:
    'Ongoing maintenance, updates, and support to keep your digital presence thriving.'
  },
  {
    id: 'reason_collaboration',
    icon: 'UsersIcon',
    title: 'Direct Collaboration',
    description:
    'Work directly with experienced developers who understand your vision and goals.'
  }];


  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Why Choose Infiniota
            </p>
            <h2 className="heading-section text-foreground mb-8">
              Your <span className="text-primary font-normal italic">Trusted</span> Digital Partner
            </h2>
            <p className="text-body mb-12">
              We combine technical expertise with business acumen to deliver
              solutions that not only look great but drive real results for your
              organization.
            </p>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason) =>
              <div key={reason.id} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon
                    name={reason.icon as any}
                    size={24}
                    variant="outline"
                    className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />

                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1cf9966e4-1768542571588.png"
                alt="Professional team collaborating on digital project in modern office"
                className="w-full h-full object-cover" />

            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-success/10 flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={32} variant="solid" className="text-success" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default WhyChooseSection;