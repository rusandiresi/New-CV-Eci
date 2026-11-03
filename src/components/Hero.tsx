import React from 'react';
import { Language, ProfileData } from '../types';
import { translations } from '../data/portfolioData';
import { Phone, Mail, MapPin, ArrowRight, Download, ExternalLink, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

interface HeroProps {
  language: Language;
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, profile, onOpenResume }) => {
  const t = translations[language].hero;

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Hero: Left typography & contact card, Right layered photo container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Greeting & Name */}
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-orange-400 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                {language === 'id' ? 'PORTOFOLIO MAHASISWA SISTEM INFORMASI' : 'STUDENT PORTFOLIO · INFORMATION SYSTEMS'}
              </p>
              <div className="flex items-center flex-wrap gap-3">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  {t.greeting}{' '}
                  <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                    {profile.name}
                  </span>
                  {profile.nickname && (
                    <span className="text-2xl sm:text-3xl text-orange-400 font-semibold ml-2">
                      ({profile.nickname})
                    </span>
                  )}
                </h1>
              </div>
              
              {/* Role in signature Orange & Emerald Badge */}
              <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-orange-400">
                  {language === 'id' ? profile.roleId : profile.roleEn}
                </h2>
                <span className="text-slate-600 font-light text-xl hidden sm:inline">|</span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/70 px-3.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {profile.university}
                </span>
              </div>
            </div>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {language === 'id' ? profile.bioId : profile.bioEn}
            </p>

            {/* Subtle Radiant Accent Line */}
            <div className="w-48 h-0.5 bg-gradient-to-r from-orange-400 via-amber-400 to-transparent"></div>

            {/* Floating Contact Details Card (frosted dark executive glass) */}
            {/* Floating Contact Details Card (frosted dark orange-tinted glass) */}
            <div className="bg-[#180e07]/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-orange-500/25 max-w-xl transition-all hover:border-orange-500/50">
              <div className="space-y-3.5 text-sm text-stone-200">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-950/80 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-400 w-16">{t.phone}:</span>
                    <a href={`tel:${profile.phone}`} className="font-semibold text-stone-100 hover:text-orange-400 transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-950/80 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-400 w-16">{t.email}:</span>
                    <a href={`mailto:${profile.email}`} className="font-semibold text-stone-100 hover:text-orange-400 transition-colors truncate">
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-950/80 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-medium text-stone-400">{t.address}:</span>
                    </div>
                    <p className="font-semibold text-stone-200 leading-snug">
                      {profile.location}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-1">
                      {profile.university} · {profile.major}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Circle Icons at Bottom of Card */}
              <div className="mt-5 pt-4 border-t border-orange-500/20 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2.5">
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full bg-[#241308] text-orange-400 hover:bg-orange-500 hover:text-white border border-orange-500/30 flex items-center justify-center transition-colors shadow-xs"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-8 h-8 rounded-full bg-[#241308] text-orange-400 hover:bg-orange-500 hover:text-white border border-orange-500/30 flex items-center justify-center transition-colors shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-[#241308] text-orange-400 hover:bg-orange-500 hover:text-white border border-orange-500/30 flex items-center justify-center transition-colors shadow-xs"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="w-8 h-8 rounded-full bg-[#241308] text-orange-400 hover:bg-orange-500 hover:text-white border border-orange-500/30 flex items-center justify-center transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-xs font-medium text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{t.statusBadge}</span>
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 rounded-full shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.ctaProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-stone-200 bg-[#1f1007] hover:bg-[#2c160a] border border-orange-500/30 rounded-full transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>{t.ctaCv}</span>
              </button>
            </div>

          </div>

          {/* Right Column (Span 5): Layered Photo Layout matching reference image! */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Geometric Accent 1: Vibrant Orange Glow behind top-left */}
              <div 
                aria-hidden="true" 
                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 shadow-xl shadow-orange-500/50 z-0"
              />

              {/* Geometric Accent 2: Burnt Orange / Amber Crescent behind bottom */}
              <div 
                aria-hidden="true" 
                className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-amber-700/80 via-orange-950 to-[#120703] shadow-2xl z-0"
              />

              {/* Layered Stacked Card behind (slanted / offset) */}
              <div 
                aria-hidden="true" 
                className="absolute top-4 left-4 sm:top-6 sm:left-6 w-full h-full bg-[#201007]/80 rounded-3xl shadow-2xl border border-orange-500/25 z-10 transform rotate-2 pointer-events-none"
              />

              {/* Main Framed Photo Card */}
              <div className="relative z-20 bg-[#180d06]/90 backdrop-blur-md p-3 sm:p-4 rounded-3xl shadow-2xl border border-orange-500/35">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#0e0602] border border-orange-500/20">
                  <img
                    src={profile.avatarUrl}
                    alt={`${profile.name} - ${profile.roleEn}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_12%] hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/public/assets/aistudio/almamater_ab6385c0.jpeg";
                    }}
                  />
                  
                  {/* Subtle lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0602]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Orange Pill Badge at bottom right */}
                  <div className="absolute bottom-4 right-4 z-30">
                    <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-xs rounded-full shadow-lg shadow-orange-500/40 flex items-center gap-1.5 uppercase tracking-wide">
                      <span>{profile.name} {profile.nickname ? `(${profile.nickname})` : ''}</span>
                    </div>
                  </div>

                  {/* University & Major Tag in top-left */}
                  <div className="absolute top-3 left-3 z-30">
                    <span className="px-3 py-1 bg-[#150a04]/90 backdrop-blur-md text-amber-300 text-[11px] font-semibold rounded-full shadow-md border border-orange-500/30">
                      🎓 UNIKMA Cilacap · {profile.major}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column KPI Strip below the hero split */}
        <div className="mt-16 pt-8 border-t border-orange-500/20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#190e06]/70 backdrop-blur-md p-5 rounded-2xl border border-orange-500/20 shadow-lg hover:border-orange-500/40 transition-colors">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
              18+
            </span>
            <p className="text-xs sm:text-sm font-medium text-stone-400 mt-1">
              {t.stats.projects}
            </p>
          </div>

          <div className="bg-[#190e06]/70 backdrop-blur-md p-5 rounded-2xl border border-orange-500/30 shadow-lg hover:border-orange-500/60 transition-colors">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-orange-400 tabular-nums">
              {profile.gpa}
            </span>
            <p className="text-xs sm:text-sm font-medium text-stone-400 mt-1">
              {t.stats.gpa}
            </p>
          </div>

          <div className="bg-[#190e06]/70 backdrop-blur-md p-5 rounded-2xl border border-orange-500/20 shadow-lg hover:border-orange-500/40 transition-colors">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
              5+
            </span>
            <p className="text-xs sm:text-sm font-medium text-stone-400 mt-1">
              {t.stats.certs}
            </p>
          </div>

          <div className="bg-[#190e06]/70 backdrop-blur-md p-5 rounded-2xl border border-orange-500/20 shadow-lg hover:border-amber-500/40 transition-colors">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-amber-400 tabular-nums">
              15+
            </span>
            <p className="text-xs sm:text-sm font-medium text-stone-400 mt-1">
              {t.stats.stack}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
