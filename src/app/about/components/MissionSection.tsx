import Icon from '@/components/ui/AppIcon';

const MissionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Icon
              name="RocketLaunchIcon"
              size={64}
              variant="outline"
              className="text-primary mx-auto mb-6"
            />
            <h2 className="heading-section text-foreground mb-6">
              Who We <span className="text-primary font-normal italic">Are</span>
            </h2>
          </div>

          <div className="space-y-8 text-body text-center">
            <p>
              Infiniota is a team of experienced developers and designers dedicated
              to delivering scalable digital solutions that drive business growth.
              We specialize in creating professional websites and web applications
              for businesses, startups, and organizations across diverse industries.
            </p>

            <p>
              With a focus on quality, clarity, and long-term thinking, we partner
              with our clients to transform their digital vision into reality. Our
              approach combines technical expertise with business acumen to deliver
              solutions that not only look great but achieve measurable results.
            </p>

            <p>
              From concept to deployment and beyond, we provide comprehensive
              support to ensure your digital presence continues to evolve and
              succeed in an ever-changing landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;