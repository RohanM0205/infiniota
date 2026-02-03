import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const linkGroups = [
    {
      id: 'footer_company',
      title: 'Company',
      links: [
        { id: 'footer_about', label: 'About', href: '/about' },
        { id: 'footer_careers', label: 'Careers', href: '/about' },
        { id: 'footer_contact', label: 'Contact', href: '/contact' },
      ],
    },
    {
      id: 'footer_services',
      title: 'Services',
      links: [
        { id: 'footer_web_design', label: 'Web Design', href: '/services' },
        { id: 'footer_development', label: 'Development', href: '/services' },
        { id: 'footer_maintenance', label: 'Maintenance', href: '/services' },
      ],
    },
    {
      id: 'footer_resources',
      title: 'Resources',
      links: [
        { id: 'footer_portfolio', label: 'Portfolio', href: '/our-work' },
        { id: 'footer_case_studies', label: 'Case Studies', href: '/our-work' },
        { id: 'footer_faqs', label: 'FAQs', href: '/contact' },
      ],
    },
    {
      id: 'footer_legal',
      title: 'Legal',
      links: [
        { id: 'footer_privacy', label: 'Privacy', href: '/about' },
        { id: 'footer_terms', label: 'Terms', href: '/about' },
      ],
    },
  ];

  const socialLinks = [
    {
      id: 'social_linkedin',
      name: 'LinkedIn',
      icon: 'LinkIcon',
      href: 'https://www.linkedin.com/company/infiniota/'
    },
    {
      id: 'social_whatsapp',
      name: 'WhatsApp',
      icon: 'ChatBubbleLeftIcon',
      href: 'https://wa.me/919765872560'
    },
    {
      id: 'social_github',
      name: 'GitHub',
      icon: 'CodeBracketIcon',
      href: 'https://github.com/RohanM0205'
    },
    {
      id: 'social_email',
      name: 'Email',
      icon: 'EnvelopeIcon',
      href: 'mailto:admin@infiniota.com'
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Social Links Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border/20">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border-r border-border/20 hover:bg-white/5 transition-colors duration-300 last:border-r-0"
            >
              <div className="flex items-center gap-3">
                <Icon name={social.icon as any} size={20} variant="outline" />
                <span className="text-sm font-medium">{social.name}</span>
              </div>
              <Icon
                name="ArrowUpRightIcon"
                size={18}
                variant="outline"
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {linkGroups.map((group) => (
            <div key={group.id} className="flex flex-col gap-6">
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border/20 py-8 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">I</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              © 2026 Infiniota. All rights reserved.
            </span>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">
            {/* Tagline */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse-glow"></div>
              <span>Building the future of web</span>
            </div>

            {/* Admin Login */}
            <Link
              href="/login"
              className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon
                name="LockClosedIcon"
                size={14}
                variant="outline"
                className="opacity-60 group-hover:opacity-100"
              />
              <span className="tracking-wide uppercase">Admin Login</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;