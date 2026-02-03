'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { supabase } from '@/lib/supabaseClient';

const PAGE_SIZE = 6;

const CATEGORIES = [
  'All',
  'Hotel',
  'Restaurant',
  'Corporate',
  'Web App',
  'Education',
  'Fitness',
  'Wellness',
  'Others',
];

interface Project {
  id: string;
  name: string;
  slug: string;
  category: string;
  short_description: string;
  hero_image: string;
  hero_alt: string | null;
  technologies_used: string | null;
}

const ProjectGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);

    let query = supabase
      .from('projects')
      .select('*', { count: 'exact' })
      .eq('status', 'published')
      .order('created_at', { ascending: false })
      .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

    if (category !== 'All') {
      query = query.eq('category', category);
    }

    const { data, count, error } = await query;

    if (!error && data) {
      setProjects(data);
      setTotal(count || 0);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, [page, category]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setPage(1);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              category === cat
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/70'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="text-center text-muted-foreground">
          Loading projects...
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center text-muted-foreground">
          No projects found.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map(project => (
            <div
              key={project.id}
              className="card-premium hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="aspect-[4/3] rounded-t-[4rem] rounded-b-2xl overflow-hidden mb-4">
                <AppImage
                  src={project.hero_image}
                  alt={project.hero_alt || project.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-2">
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-foreground mt-3">
                  {project.name}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {project.short_description}
                </p>

                {/* Tech Stack */}
                {project.technologies_used && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies_used
                      .split(',')
                      .slice(0, 4)
                      .map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-muted rounded-full text-xs"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                  </div>
                )}

                {/* View Details */}
                <Link
                  href={`/project-details/${project.slug}`}
                  className="group inline-flex items-center gap-2 mt-5 text-primary font-medium"
                >
                  View Details
                  <Icon
                    name="ArrowRightIcon"
                    size={18}
                    variant="outline"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-20">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="btn-secondary disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
            className="btn-secondary disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectGrid;
