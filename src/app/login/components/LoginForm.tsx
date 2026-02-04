'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

const LoginForm = () => {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // ✅ TEMP mock credentials (frontend-only)
    const mockEmail = 'admin@infiniota.com';
    const mockPassword = 'pkxgEM%@4n6c';

    setTimeout(() => {
      if (
        formData.email === mockEmail &&
        formData.password === mockPassword
      ) {
        // ✅ SET AUTH COOKIE (middleware reads this)
        document.cookie = 'infiniota_admin_auth=true; path=/;';

        // ✅ REDIRECT TO DASHBOARD
        router.push('/admin-dashboard');
      } else {
        setError('Invalid credentials. Try: admin@infiniota.com / admin123');
        setIsSubmitting(false);
      }
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full max-w-md">
      <div className="card-premium">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-2xl">I</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </h2>
          <p className="text-muted-foreground">
            Sign in to access the admin dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <Icon
                name="EnvelopeIcon"
                size={20}
                variant="outline"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-muted border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                placeholder="admin@infiniota.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Icon
                name="LockClosedIcon"
                size={20}
                variant="outline"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-muted border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-error/10 border border-error/20 rounded-xl flex items-start gap-3">
              <Icon
                name="ExclamationCircleIcon"
                size={20}
                variant="solid"
                className="text-error shrink-0 mt-0.5"
              />
              <p className="text-sm text-error">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Icon
                  name="ArrowPathIcon"
                  size={20}
                  variant="outline"
                  className="animate-spin"
                />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </>
            )}
          </button>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>

      {/* Demo Credentials Info */}
      <div className="mt-6 p-4 bg-muted rounded-2xl text-center">
        <p className="text-xs text-muted-foreground">
          <strong>Demo Credentials:</strong> admin@infiniota.com / admin123
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
