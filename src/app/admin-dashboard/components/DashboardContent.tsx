'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProjectsTable from './ProjectsTable';
import { supabase } from '@/lib/supabaseClient';

interface DashboardContentProps {
  activeSection: string;
}

interface ProjectActivity {
  id: string;
  name: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const DashboardContent = ({ activeSection }: DashboardContentProps) => {
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
    views: '12.5K', // mock until analytics table exists
  });

  const [recentActivity, setRecentActivity] = useState<ProjectActivity[]>([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH DASHBOARD DATA ---------------- */

  const fetchDashboardData = async () => {
    setLoading(true);

    // Fetch counts
    const { data: projects } = await supabase
      .from('projects')
      .select('id, status, name, created_at, updated_at')
      .order('updated_at', { ascending: false });

    if (projects) {
      const published = projects.filter(p => p.status === 'published').length;
      const draft = projects.filter(p => p.status === 'draft').length;

      setStats({
        total: projects.length,
        published,
        draft,
        views: '12.5K',
      });

      setRecentActivity(projects.slice(0, 3));
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  /* ---------------- OVERVIEW ---------------- */

  if (activeSection === 'overview') {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Dashboard Overview
          </h2>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: 'FolderIcon',
              label: 'Total Projects',
              value: stats.total,
              color: 'primary',
            },
            {
              icon: 'CheckCircleIcon',
              label: 'Published',
              value: stats.published,
              color: 'success',
            },
            {
              icon: 'DocumentIcon',
              label: 'Drafts',
              value: stats.draft,
              color: 'warning',
            },
            {
              icon: 'EyeIcon',
              label: 'Total Views',
              value: stats.views,
              color: 'accent',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-${stat.color}/10 flex items-center justify-center`}
                >
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    variant="outline"
                    className={`text-${stat.color}`}
                  />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {loading ? '—' : stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Recent Activity
          </h3>

          {recentActivity.length === 0 ? (
            <p className="text-muted-foreground">No recent activity</p>
          ) : (
            <div className="space-y-4">
              {recentActivity.map((item) => {
                const isNew =
                  new Date(item.created_at).getTime() ===
                  new Date(item.updated_at).getTime();

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-muted rounded-xl"
                  >
                    <Icon
                      name={
                        isNew
                          ? 'PlusIcon'
                          : item.status === 'published'
                          ? 'CheckCircleIcon'
                          : 'PencilIcon'
                      }
                      size={24}
                      variant="outline"
                      className={
                        item.status === 'published'
                          ? 'text-success'
                          : 'text-primary'
                      }
                    />
                    <div>
                      <div className="font-medium text-foreground">
                        {isNew
                          ? `New project "${item.name}" added`
                          : `Updated "${item.name}"`}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(item.updated_at).toLocaleString()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  /* ---------------- PROJECTS ---------------- */

  if (activeSection === 'projects') {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Project Management
          </h2>
          <p className="text-muted-foreground">
            Manage your portfolio projects, add new ones, or update existing
            content.
          </p>
        </div>

        <ProjectsTable />
      </div>
    );
  }

  /* ---------------- CONTENT ---------------- */

  if (activeSection === 'content') {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Content Management
          </h2>
          <p className="text-muted-foreground">
            Update homepage content and static sections.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center">
          <Icon
            name="DocumentTextIcon"
            size={64}
            variant="outline"
            className="text-muted-foreground mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Content Editor
          </h3>
          <p className="text-muted-foreground mb-6">
            Content management features coming soon.
          </p>
        </div>
      </div>
    );
  }

  /* ---------------- SETTINGS ---------------- */

  if (activeSection === 'settings') {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Settings
          </h2>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center">
          <Icon
            name="Cog6ToothIcon"
            size={64}
            variant="outline"
            className="text-muted-foreground mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Settings Panel
          </h3>
          <p className="text-muted-foreground mb-6">
            Settings configuration coming soon.
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default DashboardContent;
