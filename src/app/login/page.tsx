import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import LoginForm from './components/LoginForm';

export const metadata: Metadata = {
  title: 'Login - Infiniota Admin',
  description: 'Sign in to access the Infiniota admin dashboard and manage your website content.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-muted via-background to-muted flex items-center justify-center p-6">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back to Home Link */}
        <Link
          href="/homepage"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <Icon name="ArrowLeftIcon" size={20} variant="outline" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Login Form */}
        <LoginForm />
      </div>
    </main>
  );
}