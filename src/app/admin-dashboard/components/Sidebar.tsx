'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const menuItems = [
    { id: 'menu_overview', icon: 'HomeIcon', label: 'Overview', section: 'overview' },
    { id: 'menu_projects', icon: 'FolderIcon', label: 'Projects', section: 'projects' },
    //{ id: 'menu_content', icon: 'DocumentTextIcon', label: 'Content', section: 'content' },
    { id: 'menu_settings', icon: 'Cog6ToothIcon', label: 'Settings', section: 'settings' },
  ];

  return (
    <aside className="w-64 bg-secondary text-secondary-foreground p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-12">
        <Link href="/homepage" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">I</span>
          </div>
          <div>
            <div className="text-lg font-bold">Infiniota</div>
            <div className="text-xs text-secondary-foreground/60">Admin Panel</div>
          </div>
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.section)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeSection === item.section
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'text-secondary-foreground/80 hover:bg-white/5 hover:text-secondary-foreground'
            }`}
          >
            <Icon name={item.icon as any} size={20} variant="outline" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout */}
      <button
  onClick={() => {
    document.cookie =
      'infiniota_admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    window.location.href = '/login';
  }}
  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-secondary-foreground/80 hover:bg-white/5 hover:text-secondary-foreground transition-all duration-200"
>
  <Icon name="ArrowLeftOnRectangleIcon" size={20} variant="outline" />
  <span className="font-medium">Logout</span>
</button>


    </aside>
  );
};

export default Sidebar;