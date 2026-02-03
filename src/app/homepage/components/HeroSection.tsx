'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { supabase } from '@/lib/supabaseClient';

interface FeaturedProject {
  id: string;
  name: string;
  slug: string;
  category: string;
  short_description: string;
  hero_image: string;
  hero_alt: string | null;
  technologies_used: string | null;
}

const HeroSection = () => {
  const [project, setProject] = useState<FeaturedProject | null>(null);

  /* ---------------- FETCH FEATURED PROJECT ---------------- */

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select(
          `
          id,
          name,
          slug,
          category,
          short_description,
          hero_image,
          hero_alt,
          technologies_used
        `
        )
        .eq('status', 'published')
        .order('updated_at', { ascending: false })
        .limit(1)
        .single();

      if (data) {
        setProject(data);
      }
    };

    fetchProject();
  }, []);

  const techStack =
    project?.technologies_used
      ?.split(',')
      .map(t => t.trim())
      .slice(0, 3) || [];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted via-background to-muted pt-24 pb-16">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT — UNCHANGED */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse-glow"></div>
              <span className="text-sm font-medium text-foreground">
                Building modern digital solutions for growing businesses
              </span>
            </div>

            <h1 className="heading-hero text-foreground">
              Building Digital{' '}
              <span className="text-primary font-normal">Experiences</span>{' '}
              That Create Impact
            </h1>

            <p className="text-body max-w-xl">
              We design and develop modern websites and web applications focused
              on clarity, performance, and real business outcomes. From idea to
              launch, we build solutions that scale with your growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto text-center sm:text-left">
              <Link
                href="/our-work"
                className="btn-primary w-full sm:w-auto group flex items-center justify-center"
              >
                <span>View Our Work</span>
                <Icon
                  name="ArrowRightIcon"
                  size={20}
                  variant="outline"
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
  href="/contact"
  className="btn-secondary w-full sm:w-auto mx-auto sm:mx-0"
>
  Get a Website
</Link>

            </div>

            <p className="text-xs text-muted-foreground">
              No long-term contracts • Clear communication • Modern tech stack
            </p>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-lg font-semibold text-foreground">
                  Clean & Scalable Code
                </div>
                <div className="text-sm text-muted-foreground">
                  Built with modern frameworks
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">
                  Business-First Approach
                </div>
                <div className="text-sm text-muted-foreground">
                  Design aligned with real goals
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">
                  Long-Term Support
                </div>
                <div className="text-sm text-muted-foreground">
                  We grow with your product
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT — DYNAMIC PROJECT */}
          {project && (
            <div className="relative min-h-[520px] lg:min-h-[620px] flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <Link
                  href={`/project-details/${project.slug}`}
                  className="block"
                >
                  <div className="card-premium card-rotated group cursor-pointer">
                    <div className="aspect-[3/4] rounded-t-[8rem] rounded-b-2xl overflow-hidden mb-6 relative">
                      <AppImage
                        src={project.hero_image}
                        alt={project.hero_alt || project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 gradient-overlay"></div>

                      <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-serif font-light mt-2">
                          {project.name}
                        </h3>
                        <p className="text-sm opacity-80 mt-1">
                          {project.short_description}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* Floating Badge — KEPT */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent rounded-2xl p-4 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500 hidden lg:block">
                  <div className="flex flex-col items-center justify-center h-full text-accent-foreground">
                    <Icon name="SparklesIcon" size={32} variant="solid" />
                    <span className="text-xs font-bold mt-2 text-center">
                      Production-Ready
                    </span>
                  </div>
                </div>

                {/* Quality Badge — KEPT */}
                <div className="absolute -bottom-6 -left-6 bg-success text-success-foreground rounded-2xl p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 hidden lg:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Quality First</div>
                    <div className="text-xs font-medium mt-1">
                      Built with best practices
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
