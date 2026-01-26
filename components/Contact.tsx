import React, { useState } from 'react';
import Button from './Button';
import { Mail, Phone, MapPin, Facebook, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'volunteer',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // We use the AJAX endpoint to prevent the "browsed as HTML file" redirection error
      const response = await fetch("https://formsubmit.co/ajax/slrisehub@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          _subject: `New Inquiry: ${formData.interest} - ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', interest: 'volunteer', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-royal tracking-wide uppercase">Get Involved</h2>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Join the Movement</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you want to volunteer, partner, or become a member, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-light p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-brand-royal" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-slate-900">Phone/WhatsApp</h3>
                        <p className="mt-1 text-slate-600">+232 79 095969</p>
                    </div>
                    </div>

                    <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-light p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-brand-royal" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-slate-900">Email</h3>
                        <p className="mt-1 text-slate-600 break-all">slrisehub@gmail.com</p>
                    </div>
                    </div>

                    <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-light p-3 rounded-lg">
                        <Facebook className="h-6 w-6 text-brand-royal" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-slate-900">Facebook</h3>
                        <a href="https://www.facebook.com/profile.php?id=100068483297902" target="_blank" rel="noopener noreferrer" className="mt-1 text-brand-royal hover:underline block">
                            Visit Profile
                        </a>
                    </div>
                    </div>

                    <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-light p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-brand-royal" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-slate-900">Location</h3>
                        <p className="mt-1 text-slate-600">
                        Sierra Leone
                        </p>
                    </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-green-800">Sent Successfully!</h4>
                    <p className="text-sm text-green-700 mt-1">
                      We have received your message. 
                    </p>
                    <p className="text-sm text-green-800 font-bold mt-2">
                       IMPORTANT: If this is your first time using this form, please check your Email (and Spam folder) for an "Activate FormSubmit" link. You must click it to receive future emails.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                 <div>
                  <h4 className="text-sm font-semibold text-red-800">Connection Error</h4>
                  <p className="text-sm text-red-700 mt-1">
                    We couldn't submit the form automatically. 
                    <a href={`mailto:slrisehub@gmail.com?subject=New Inquiry from Website&body=${encodeURIComponent(formData.message)}`} className="underline font-bold ml-1">
                        Click here to open your email app instead.
                    </a>
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors"
                    placeholder="Your Name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors"
                    placeholder="you@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors"
                    placeholder="+232..."
                    disabled={isSubmitting}
                    />
                </div>
                <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">I am interested in</label>
                    <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors bg-white"
                        disabled={isSubmitting}
                    >
                        <option value="volunteer">Volunteering</option>
                        <option value="partner">Partnering</option>
                        <option value="member">Becoming a Member</option>
                        <option value="sponsor">Sponsoring/Donating</option>
                        <option value="general">General Inquiry</option>
                    </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors"
                  placeholder="How can we work together?"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="pt-2">
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-full md:w-auto justify-center min-w-[200px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                      Sending...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;