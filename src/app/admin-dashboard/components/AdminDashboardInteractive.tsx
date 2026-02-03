'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

const AdminDashboardInteractive = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <DashboardContent activeSection={activeSection} />
      </main>
    </div>
  );
};

export default AdminDashboardInteractive;