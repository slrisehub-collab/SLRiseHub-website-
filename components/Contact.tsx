"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "volunteer",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/slrisehub@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            interest: formData.interest,
            message: formData.message,
            _subject: `New Inquiry: ${formData.interest} - ${formData.name}`,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "volunteer",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone/WhatsApp",
      value: "+232 79 095969",
      href: "tel:+23279095969",
    },
    {
      icon: Mail,
      label: "Email",
      value: "slrisehub@gmail.com",
      href: "mailto:slrisehub@gmail.com",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Visit Profile",
      href: "https://www.facebook.com/profile.php?id=100068483297902",
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sierra Leone",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-royal tracking-wide uppercase mb-2">
            Get Involved
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
            Join the Movement
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you want to volunteer, partner, or become a member, we
            {"'"}d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-card p-7 rounded-2xl shadow-sm border border-border h-full">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-brand-light p-3 rounded-lg">
                        <Icon className="h-5 w-5 text-brand-royal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={
                              item.external
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-foreground font-medium hover:text-brand-royal transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-7 md:p-8 border border-border shadow-sm">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Send us a Message
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-800">
                      Sent Successfully!
                    </h4>
                    <p className="text-sm text-emerald-700 mt-1">
                      We have received your message.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-red-800">
                    Connection Error
                  </h4>
                  <p className="text-sm text-red-700 mt-1">
                    {"We couldn't submit the form. "}
                    <a
                      href={`mailto:slrisehub@gmail.com?subject=New Inquiry from Website&body=${encodeURIComponent(formData.message)}`}
                      className="underline font-bold"
                    >
                      Click here to email us directly.
                    </a>
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors"
                    placeholder="Your Name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors"
                    placeholder="you@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors"
                    placeholder="+232..."
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    I am interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors"
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-brand-royal focus:border-brand-royal transition-colors resize-none"
                  placeholder="How can we work together?"
                  disabled={isSubmitting}
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-royal text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20 disabled:opacity-60 disabled:cursor-not-allowed min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                      Sending...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
