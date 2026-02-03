import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    alt: string;
    techStack: string[];
    tag: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href="/project-details" className="group block">
      <div className="card-premium hover:shadow-2xl h-full">
        <div className="aspect-[4/3] rounded-t-[6rem] rounded-b-2xl overflow-hidden mb-6 relative">
          <AppImage
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absoluteinset-0 gradient-overlay"></div>
          
          {/* Tag Badge */}
          <div className="absolute top-6 right-6">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground shadow-lg">
              {project.tag}
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

        {/* Project Info */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={`${project.id}_tech_${index}`}
                className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Project Link */}
          <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-4 transition-all duration-300">
            <span>View Details</span>
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
};

export default ProjectCard;