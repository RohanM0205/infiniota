import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

/* ---------------- TYPES ---------------- */

interface Project {
  id: string;
  name: string;
  slug: string;
  category: string;
  tag: string | null;
  hero_image: string;
  hero_alt: string | null;
  overview: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  key_features: string | null;
  technologies_used: string | null;
  gallery_1: string | null;
  gallery_2: string | null;
  gallery_3: string | null;
}

interface RelatedProject {
  id: string;
  name: string;
  slug: string;
  category: string;
  hero_image: string;
  hero_alt: string | null;
}

interface Props {
  params: {
    slug: string;
  };
}

/* ---------------- PAGE ---------------- */

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = params;

  /* ---------- MAIN PROJECT ---------- */
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single<Project>();

  if (error || !project) {
    notFound();
  }

  /* ---------- TRANSFORMS ---------- */
  const features: string[] = project.key_features
    ? project.key_features.split(',').map((f) => f.trim())
    : [];

  const techStack: string[] = project.technologies_used
    ? project.technologies_used.split(',').map((t) => t.trim())
    : [];

  const galleryImages: string[] = [
    project.gallery_1,
    project.gallery_2,
    project.gallery_3,
  ].filter(Boolean) as string[];

  /* ---------- RELATED PROJECTS (SAME CATEGORY) ---------- */
  const { data: relatedProjects } = await supabase
    .from('projects')
    .select('id, name, slug, category, hero_image, hero_alt')
    .eq('category', project.category)
    .eq('status', 'published')
    .neq('id', project.id)
    .limit(3);

  /* ---------------- RENDER ---------------- */

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="aspect-[21/9] rounded-t-[8rem] rounded-b-3xl overflow-hidden shadow-2xl relative">
            <AppImage
              src={project.hero_image}
              alt={project.hero_alt || project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay" />

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-4 py-2 bg-white/90 text-foreground rounded-full text-sm font-semibold">
                  {project.tag || 'Client Project'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
                {project.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      {project.overview && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      {(project.challenge || project.solution) && (
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
            {project.challenge && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                <p className="text-muted-foreground">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Key Features */}
      {features.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl border"
                >
                  <Icon
                    name="CheckCircleIcon"
                    size={24}
                    variant="solid"
                    className="text-success mt-1"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {techStack.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech: string, index: number) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card rounded-xl border font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {galleryImages.map((img: string, index: number) => (
                <div
                  key={index}
                  className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
                >
                  <AppImage
                    src={img}
                    alt={`${project.name} image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {project.results && (
        <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Icon name="ChartBarIcon" size={64} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              The Results
            </h2>
            <p className="text-lg opacity-90">{project.results}</p>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-12">
              Related Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((rp: RelatedProject) => (
                <Link key={rp.id} href={`/project-details/${rp.slug}`}>
                  <div className="card-premium hover:shadow-2xl">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-4">
                      <AppImage
                        src={rp.hero_image}
                        alt={rp.hero_alt || rp.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {rp.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{rp.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
