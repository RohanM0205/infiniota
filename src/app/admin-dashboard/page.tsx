import { Metadata } from 'next';
import AdminDashboardInteractive from './components/AdminDashboardInteractive';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Infiniota',
  description: 'Manage your Infiniota website content, projects, and settings.',
};

export default function AdminDashboardPage() {
  return <AdminDashboardInteractive />;
}