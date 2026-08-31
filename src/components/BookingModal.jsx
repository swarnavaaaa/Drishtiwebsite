import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Calendar, ArrowRight, Check, Linkedin, Send } from 'lucide-react';
import { websiteContent } from '../data/websiteContent';

export const BookingModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    linkedin: '',
    goal: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(websiteContent.brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mailto link with prefilled body
    const subject = encodeURIComponent(`Discovery Call Inquiry: ${formData.name} (${formData.role || 'Founder/Leader'})`);
    const body = encodeURIComponent(
      `Hi Drishti,\n\nI'd like to explore working with netwerked.\n\nName: ${formData.name}\nEmail: ${formData.email}\nRole/Company: ${formData.role}\nLinkedIn: ${formData.linkedin}\nGoals: ${formData.goal}\n\nLooking forward to speaking.`
    );
    window.location.href = `mailto:${websiteContent.brand.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-xl bg-cream border-2 border-forest/20 shadow-2xl p-6 sm:p-8 z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-charcoal-muted hover:text-charcoal hover:bg-mint/40 transition-colors rounded-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
              Discovery Call
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-charcoal font-normal tracking-tight">
              Let's talk about your LinkedIn presence.
            </h3>
            <p className="text-sm text-charcoal-muted mt-2">
              A 20-minute conversation about your goals, current profile, and whether netwerked is the right growth partner for you.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-mint-light border border-sage/40 text-center my-4">
              <div className="w-12 h-12 bg-forest text-cream mx-auto flex items-center justify-center mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl text-forest font-medium">Opening Your Email Client</h4>
              <p className="text-sm text-charcoal-muted mt-2">
                Your prefilled note has been drafted for <span className="font-mono text-xs font-semibold text-charcoal">{websiteContent.brand.email}</span>. Drishti typically responds within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-forest text-cream text-xs font-semibold tracking-wider uppercase hover:bg-forest-light transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-3.5 py-2.5 bg-white border border-charcoal-border focus:border-forest focus:ring-1 focus:ring-forest outline-none text-sm text-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-charcoal-border focus:border-forest focus:ring-1 focus:ring-forest outline-none text-sm text-charcoal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                    Role & Industry
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Founder, B2B SaaS"
                    className="w-full px-3.5 py-2.5 bg-white border border-charcoal-border focus:border-forest focus:ring-1 focus:ring-forest outline-none text-sm text-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="linkedin.com/in/username"
                    className="w-full px-3.5 py-2.5 bg-white border border-charcoal-border focus:border-forest focus:ring-1 focus:ring-forest outline-none text-sm text-charcoal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                  Primary Goal / What brings you here?
                </label>
                <textarea
                  rows="3"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  placeholder="e.g. Turn company milestones into high-converting personal thought leadership..."
                  className="w-full px-3.5 py-2.5 bg-white border border-charcoal-border focus:border-forest focus:ring-1 focus:ring-forest outline-none text-sm text-charcoal resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest text-cream text-xs font-bold uppercase tracking-wider hover:bg-forest-light transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Call Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-charcoal-border hover:bg-white text-xs font-medium text-charcoal transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-forest" />
                      <span className="text-forest font-semibold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-sage-dark" />
                      <span>Copy Email ({websiteContent.brand.email})</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-charcoal-border/50 flex items-center justify-between text-xs text-charcoal-muted">
            <span className="font-mono">Direct: drishti@netwerked.io</span>
            <a
              href={websiteContent.brand.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-forest hover:text-forest-dark font-medium underline underline-offset-2"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>Drishti's LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
