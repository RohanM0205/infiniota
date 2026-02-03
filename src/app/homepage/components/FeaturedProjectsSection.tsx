'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { supabase } from '@/lib/supabaseClient';

interface Project {
  id: string;
  name: string;
  slug: string;
  category: string;
  short_description: string;
  hero_image: string;
  hero_alt: string | null;
  technologies_used: string | null;
  tag: string | null;
}

const FeaturedProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH FEATURED PROJECTS ---------------- */

  const fetchFeaturedProjects = async () => {
    setLoading(true);

    const { data, error } = await supabase
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
        technologies_used,
        tag
      `
      )
      .eq('status', 'published')
      .order('updated_at', { ascending: false })
      .limit(4);

    if (!error && data) {
      setProjects(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  if (loading || projects.length === 0) return null;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Featured Projects
            </p>
            <h2 className="heading-section text-foreground">
              Our Recent{' '}
              <span className="text-primary font-normal italic">
                Success
              </span>{' '}
              Stories
            </h2>
          </div>

          <Link
            href="/our-work"
            className="group flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            <span>View All Projects</span>
            <Icon
              name="ArrowRightIcon"
              size={20}
              variant="outline"
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const techStack = project.technologies_used
              ? project.technologies_used
                  .split(',')
                  .map((t) => t.trim())
              : [];

            return (
              <Link
                key={project.id}
                href={`/project-details/${project.slug}`}
                className="group block"
              >
                <div className="card-premium hover:shadow-2xl">
                  {/* Image */}
                  <div className="aspect-[4/3] rounded-t-[6rem] rounded-b-2xl overflow-hidden mb-6 relative">
                    <AppImage
                      src={project.hero_image}
                      alt={project.hero_alt || project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 gradient-overlay" />

                    {/* Tag */}
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground shadow-lg">
                        {project.tag || 'Client Project'}
                      </span>
                    </div>

                    {/* Floating Info */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-light">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.short_description}
                    </p>

                    {/* Tech Stack */}
                    {techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                          <span
                            key={`${project.id}_tech_${index}`}
                            className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-4 transition-all duration-300">
                      <span>View Project</span>
                      <Icon
                        name="ArrowRightIcon"
                        size={18}
                        variant="outline"
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
