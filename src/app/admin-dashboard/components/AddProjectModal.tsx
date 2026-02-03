'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { supabase } from '@/lib/supabaseClient';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  project?: any; // 👈 passed when editing
}

const PROJECT_CATEGORIES = [
  'Hotel',
  'Restaurant',
  'Corporate',
  'Web App',
  'Education',
  'Fitness',
  'Wellness',
  'Others',
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const INITIAL_FORM = {
  name: '',
  slug: '',
  category: '',
  short_description: '',
  hero_image: '',
  hero_alt: '',
  gallery_1: '',
  gallery_2: '',
  gallery_3: '',
  technologies_used: '',
  key_features: '',
  overview: '',
  challenge: '',
  solution: '',
  results: '',
};

const AddProjectModal = ({ isOpen, onClose, project }: Props) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isEditMode = Boolean(project?.id);

  /* ---------------- PREFILL (EDIT MODE) ---------------- */
  useEffect(() => {
    if (!isOpen) return;

    if (isEditMode && project) {
      setFormData({
        name: project.name || '',
        slug: project.slug || '',
        category: project.category || '',
        short_description: project.short_description || '',
        hero_image: project.hero_image || '',
        hero_alt: project.hero_alt || '',
        gallery_1: project.gallery_1 || '',
        gallery_2: project.gallery_2 || '',
        gallery_3: project.gallery_3 || '',
        technologies_used: project.technologies_used || '',
        key_features: project.key_features || '',
        overview: project.overview || '',
        challenge: project.challenge || '',
        solution: project.solution || '',
        results: project.results || '',
      });
    } else {
      setFormData(INITIAL_FORM);
    }

    setError('');
  }, [isOpen, isEditMode, project]);

  if (!isOpen) return null;

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'name' && !isEditMode && { slug: slugify(value) }),
    }));
  };

  const handleClear = () => {
    setFormData(INITIAL_FORM);
    setError('');
  };

  const isEmpty = (v: string) => !v || !v.trim();

  /* ---------------- SAVE ---------------- */

  const handleSave = async () => {
    setError('');

    if (
      isEmpty(formData.name) ||
      isEmpty(formData.category) ||
      isEmpty(formData.short_description) ||
      isEmpty(formData.hero_image)
    ) {
      setError('Please fill all required fields.');
      return;
    }

    setLoading(true);

    /* Duplicate slug check (ONLY FOR ADD) */
    if (!isEditMode) {
      const { data: existing, error: checkError } = await supabase
        .from('projects')
        .select('id')
        .eq('slug', formData.slug)
        .maybeSingle();

      if (checkError) {
        setError(checkError.message);
        setLoading(false);
        return;
      }

      if (existing) {
        setError('Project with this name already exists.');
        setLoading(false);
        return;
      }
    }

    /* Payload */
    const payload = {
      name: formData.name.trim(),
      slug: formData.slug,
      category: formData.category,
      type: formData.category, // REQUIRED BY DB
      short_description: formData.short_description.trim(),
      hero_image: formData.hero_image.trim(),
      hero_alt: formData.hero_alt || null,
      gallery_1: formData.gallery_1 || null,
      gallery_2: formData.gallery_2 || null,
      gallery_3: formData.gallery_3 || null,
      technologies_used: formData.technologies_used || null,
      key_features: formData.key_features || null,
      overview: formData.overview || null,
      challenge: formData.challenge || null,
      solution: formData.solution || null,
      results: formData.results || null,
      tag: 'Client Project',
    };

    const query = isEditMode
      ? supabase.from('projects').update(payload).eq('id', project.id)
      : supabase.from('projects').insert([{ ...payload, status: 'draft' }]);

    const { error } = await query;

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    handleClear();
    onClose();
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
      <div className="bg-card w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {isEditMode ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button onClick={onClose}>
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {error && (
            <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm">
              {error}
            </div>
          )}

          <input name="name" placeholder="Project Name *" value={formData.name} onChange={handleChange} className="input" />
          <input name="slug" placeholder="Slug" value={formData.slug} disabled className="input bg-muted" />

          <select name="category" value={formData.category} onChange={handleChange} className="input" required>
            <option value="" disabled>Select Category *</option>
            {PROJECT_CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <textarea name="short_description" placeholder="Short description *" value={formData.short_description} onChange={handleChange} className="input min-h-[80px]" />
          <input name="hero_image" placeholder="Hero Image URL *" value={formData.hero_image} onChange={handleChange} className="input" />
          <input name="hero_alt" placeholder="Hero Image Alt Text" value={formData.hero_alt} onChange={handleChange} className="input" />

          <input name="gallery_1" placeholder="Gallery Image 1" value={formData.gallery_1} onChange={handleChange} className="input" />
          <input name="gallery_2" placeholder="Gallery Image 2" value={formData.gallery_2} onChange={handleChange} className="input" />
          <input name="gallery_3" placeholder="Gallery Image 3" value={formData.gallery_3} onChange={handleChange} className="input" />

          <input name="technologies_used" placeholder="Technologies Used (comma separated)" value={formData.technologies_used} onChange={handleChange} className="input" />
          <input name="key_features" placeholder="Key Features (comma separated)" value={formData.key_features} onChange={handleChange} className="input" />

          <textarea name="overview" placeholder="Project Overview" value={formData.overview} onChange={handleChange} className="input min-h-[100px]" />
          <textarea name="challenge" placeholder="The Challenge" value={formData.challenge} onChange={handleChange} className="input min-h-[100px]" />
          <textarea name="solution" placeholder="Our Solution" value={formData.solution} onChange={handleChange} className="input min-h-[100px]" />
          <textarea name="results" placeholder="Results / Impact" value={formData.results} onChange={handleChange} className="input min-h-[100px]" />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-between">
          <button onClick={handleClear} className="btn-secondary">Clear</button>
          <div className="flex gap-3">
            <button onClick={onClose} className="btn-secondary">Cancel</button>
            <button onClick={handleSave} disabled={loading} className="btn-primary">
              {loading ? 'Saving...' : isEditMode ? 'Update Project' : 'Save Project'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;
