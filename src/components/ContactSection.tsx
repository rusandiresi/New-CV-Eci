import React, { useState } from 'react';
import { Language, ProfileData } from '../types';
import { translations } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, Sparkles } from 'lucide-react';

interface ContactProps {
  language: Language;
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactProps> = ({ language, profile }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const t = translations[language].contact;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 900);
  };

  const whatsappMessage = encodeURIComponent(
    language === 'id'
      ? `Halo ${profile.name}, saya melihat website portofolio Sistem Informasi Anda dan tertarik untuk berdiskusi.`
      : `Hello ${profile.name}, I reviewed your Information Systems portfolio and would like to discuss an opportunity.`
  );
  const cleanPhone = profile.phone.replace(/[^0-9]/g, '');
  const waNumber = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
  const whatsappUrl = `https://wa.me/${waNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-[#150a04]/40 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30 mb-3 shadow-md shadow-orange-950/30">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-stone-300">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Contact: Left direct coordinates & quick actions, Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (Span 5): Quick Connect & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#190e06]/75 rounded-3xl p-6 sm:p-8 border border-orange-500/20 shadow-xl space-y-6 backdrop-blur-md">
              <h3 className="font-heading text-xl font-bold text-white">
                {t.directContact}
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-950/80 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-stone-400 font-semibold block uppercase tracking-wider">
                      Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-bold text-white hover:text-orange-400 transition-colors truncate block"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-stone-400 font-semibold block uppercase tracking-wider">
                      {language === 'id' ? 'Telepon / WhatsApp' : 'Phone / WhatsApp'}
                    </span>
                    <a
                      href={`tel:${profile.phone}`}
                      className="font-bold text-white hover:text-orange-400 transition-colors truncate block"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-950/80 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-stone-400 font-semibold block uppercase tracking-wider">
                      {t.officeLocation}
                    </span>
                    <span className="font-bold text-white block">
                      {profile.location}
                    </span>
                    <span className="text-xs text-stone-400 block mt-0.5">
                      {profile.university} - {profile.faculty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions Buttons */}
              <div className="pt-4 border-t border-orange-500/20 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl transition-all shadow-md shadow-orange-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.whatsappBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-200 bg-[#241308] hover:bg-[#321a0b] border border-orange-500/30 rounded-xl transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-orange-400" /> : <Copy className="w-4 h-4 text-stone-400" />}
                  <span>{copiedEmail ? t.copiedEmailToast : t.copyEmail}</span>
                </button>
              </div>

            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-2xl bg-[#190e06]/75 border border-orange-500/20 text-xs text-stone-300 flex items-center gap-3 backdrop-blur-md">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse shrink-0"></div>
              <p className="leading-relaxed">
                {language === 'id'
                  ? 'Sedang mencari peluang magang posisi IT Business Analyst, System Analyst, atau Junior Web Developer untuk semester mendatang.'
                  : 'Currently open to internship opportunities for IT Business Analyst, System Analyst, or Junior Full-Stack Engineer roles.'}
              </p>
            </div>

          </div>

          {/* Right Column (Span 7): Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#190e06]/75 rounded-3xl p-6 sm:p-8 border border-orange-500/20 shadow-xl backdrop-blur-md">
            
            {isSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-orange-950/80 border border-orange-500/40 text-orange-300 text-sm flex items-center gap-3 animate-in fade-in">
                <Check className="w-5 h-5 text-orange-400 shrink-0" />
                <span>{t.formSuccess}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                    {t.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-2.5 text-sm bg-[#110602]/80 border border-orange-500/20 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all placeholder:text-stone-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                    {t.formEmail} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 text-sm bg-[#110602]/80 border border-orange-500/20 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all placeholder:text-stone-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                  {t.formSubject}
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder={language === 'id' ? 'Contoh: Penawaran Magang / Kolaborasi Proyek' : 'e.g. Internship Inquiry / System Consultation'}
                  className="w-full px-4 py-2.5 text-sm bg-[#110602]/80 border border-orange-500/20 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all placeholder:text-stone-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                  {t.formMessage} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={language === 'id' ? 'Tuliskan deskripsi pesan atau kebutuhan Anda di sini...' : 'Write your inquiry or project details here...'}
                  className="w-full px-4 py-2.5 text-sm bg-[#110602]/80 border border-orange-500/20 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all resize-y placeholder:text-stone-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 rounded-xl shadow-lg shadow-orange-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>{t.formSending}</span>
                ) : (
                  <>
                    <span>{t.formSubmit}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
