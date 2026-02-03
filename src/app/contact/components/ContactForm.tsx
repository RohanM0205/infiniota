'use client';

import { useState, useEffect, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import Icon from '@/components/ui/AppIcon';
import { supabase } from '@/lib/supabaseClient';

const ContactForm = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      /* ---------------- SAVE TO SUPABASE ---------------- */
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone || null,
            message: formData.message.trim(),
          },
        ]);

      if (dbError) {
        console.error('Supabase insert failed:', dbError);
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      /* ---------------- SEND EMAIL ---------------- */
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      /* ---------------- SUCCESS ---------------- */
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isHydrated) return null;

  return (
    <div className="card-premium">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Send Us a Message
        </h3>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-muted border rounded-xl"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-muted border rounded-xl"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-muted border rounded-xl"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-muted border rounded-xl resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Icon
                name="ArrowPathIcon"
                size={20}
                variant="outline"
                className="animate-spin"
              />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Icon name="PaperAirplaneIcon" size={20} variant="outline" />
            </>
          )}
        </button>

        {/* Success */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-success/10 border border-success/20 rounded-xl flex gap-3">
            <Icon
              name="CheckCircleIcon"
              size={24}
              variant="solid"
              className="text-success"
            />
            <p className="text-sm text-success font-medium">
              Message sent successfully! We’ll be in touch soon.
            </p>
          </div>
        )}

        {/* Error */}
        {submitStatus === 'error' && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex gap-3">
            <Icon
              name="XCircleIcon"
              size={24}
              variant="solid"
              className="text-destructive"
            />
            <p className="text-sm text-destructive font-medium">
              Something went wrong. Please try again later.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
