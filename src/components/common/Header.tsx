'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHydrated]);

  const navLinks = [
    { id: 'nav_home', label: 'Home', href: '/homepage' },
    { id: 'nav_work', label: 'Our Work', href: '/our-work' },
    { id: 'nav_services', label: 'Services', href: '/services' },
    { id: 'nav_about', label: 'About', href: '/about' },
    { id: 'nav_contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
<Link
  href="/homepage"
  className="group flex items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-300 hover:bg-muted/60"
>
  {/* Logo Mark */}
  <div className="relative flex items-center justify-center">
    <img
      src="/logo.png"
      alt="Infiniota"
      className="h-12 w-auto sm:h-14 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
    />

    {/* Soft Glow */}
    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
  </div>

  {/* Brand Text */}
  <div className="flex flex-col leading-tight">
  <span className="text-lg sm:text-xl font-semibold text-foreground tracking-[0.06em]">
  Infiniota
</span>


    <span className="hidden sm:block text-xs sm:text-sm text-muted-foreground tracking-wide">
      Technologies
    </span>

    {/* Accent underline */}
    <span className="h-[2px] w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-full mt-1" />
  </div>
</Link>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
    <Link
      key={link.id}
      href={link.href}
      className="group relative flex flex-col items-center text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {/* Label */}
      <span>{link.label}</span>

      {/* Underline (same style as brand) */}
      <span className="mt-1 h-[2px] w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
    </Link>
  ))}
</nav>


          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground active:bg-muted"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={26}
              variant="outline"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md pb-6 border-t border-border shadow-lg">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="
                    px-4 py-3
                    text-base font-medium
                    text-foreground
                    rounded-lg
                    hover:bg-muted
                    active:bg-muted
                    transition
                  "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-4 mx-4 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-center shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
