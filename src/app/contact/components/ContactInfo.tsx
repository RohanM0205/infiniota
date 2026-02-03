import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  label: string;
  value: string;
  href: string;
}

const ContactInfo = () => {
  const contactMethods: ContactMethod[] = [
    {
      id: 'contact_email',
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'admin@infiniota.com',
      href: 'mailto:admin@infiniota.com',
    },
    {
      id: 'contact_phone',
      icon: 'PhoneIcon',
      label: 'Phone',
      value: '+91 97658 72560',
      href: 'tel:+919765872560',
    },
    {
      id: 'contact_whatsapp',
      icon: 'ChatBubbleLeftRightIcon',
      label: 'WhatsApp',
      value: 'Chat with us',
      href: 'https://wa.me/919765872560',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Get In Touch
        </h3>
        <p className="text-sm text-muted-foreground">
          We're here to help bring your vision to life. Reach out through any of
          these channels.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method) => (
          <a
            key={method.id}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : undefined}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Icon
                name={method.icon as any}
                size={24}
                variant="outline"
                className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
              />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                {method.label}
              </div>
              <div className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {method.value}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Free Consultation Badge */}
      <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Icon name="SparklesIcon" size={24} variant="solid" className="text-primary-foreground" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-1">
              Free Consultation
            </h4>
            <p className="text-sm text-muted-foreground">
              Schedule a free consultation to discuss your project requirements
              and get expert advice.
            </p>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="p-6 bg-muted rounded-2xl">
        <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
          Business Hours
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monday - Friday</span>
            <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Saturday</span>
            <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sunday</span>
            <span className="font-medium text-foreground">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;