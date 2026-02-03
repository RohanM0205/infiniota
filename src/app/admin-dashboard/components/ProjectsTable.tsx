'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { supabase } from '@/lib/supabaseClient';
import AddProjectModal from './AddProjectModal';

interface Project {
  id: string;
  name: string;
  slug: string;
  category: string;
  status: 'published' | 'draft';
  updated_at: string;
  hero_image: string;
  hero_alt: string;
  short_description?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  technologies_used?: string;
  key_features?: string;
  gallery_1?: string;
  gallery_2?: string;
  gallery_3?: string;
}

const ProjectsTable = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /* ---------------- FETCH ---------------- */

  const fetchProjects = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('updated_at', { ascending: false });

    if (!error && data) {
      setProjects(data as Project[]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  /* ---------------- DELETE ---------------- */

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this project permanently?')) return;

    await supabase.from('projects').delete().eq('id', id);
    fetchProjects();
  };

  /* ---------------- STATUS TOGGLE ---------------- */

  const toggleStatus = async (project: Project) => {
    const newStatus = project.status === 'published' ? 'draft' : 'published';

    await supabase
      .from('projects')
      .update({
        status: newStatus,
        updated_at: new Date().toISOString(),
      })
      .eq('id', project.id);

    fetchProjects();
  };

  /* ---------------- OPEN MODAL ---------------- */

  const openAddModal = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  /* ---------------- RENDER ---------------- */

  return (
    <>
      <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">
            All Projects
          </h3>

          <button
            onClick={openAddModal}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:scale-105 transition-transform duration-200 flex items-center gap-2"
          >
            <Icon name="PlusIcon" size={18} variant="outline" />
            <span>Add Project</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase text-muted-foreground">
                  Project
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase text-muted-foreground">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase text-muted-foreground">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase text-muted-foreground">
                  Last Updated
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-muted-foreground">
                    Loading projects...
                  </td>
                </tr>
              ) : projects.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-muted-foreground">
                    No projects found. Add your first project.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    {/* Project */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                          <AppImage
                            src={project.hero_image}
                            alt={project.hero_alt || project.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-foreground">
                          {project.name}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                        {project.category}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleStatus(project)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                          project.status === 'published'
                            ? 'bg-success/10 text-success'
                            : 'bg-warning/10 text-warning'
                        }`}
                      >
                        {project.status}
                      </button>
                    </td>

                    {/* Updated */}
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(project.updated_at).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {/* Edit */}
                        <button
                          onClick={() => openEditModal(project)}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          title="Edit Project"
                        >
                          <Icon name="PencilIcon" size={18} variant="outline" />
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          title="Delete Project"
                        >
                          <Icon
                            name="TrashIcon"
                            size={18}
                            variant="outline"
                            className="text-error"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Project Modal */}
      <AddProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
          fetchProjects();
        }}
      />
    </>
  );
};

export default ProjectsTable;
