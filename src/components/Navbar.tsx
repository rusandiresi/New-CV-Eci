import React, { useState } from 'react';
import { Language, ProfileData } from '../types';
import { translations } from '../data/portfolioData';
import { Globe, Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  profile,
  onOpenResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#services', label: t.services },
    { href: '#projects', label: t.projects },
    { href: '#experience', label: t.experience },
    { href: '#certificates', label: t.certificates },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#140803]/85 backdrop-blur-xl border-b border-orange-500/20 shadow-lg shadow-orange-950/20 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Zone (Orange-Amber Monogram + Bold Clean Name) */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-400 p-[1.5px] shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#170a04] flex items-center justify-center text-white font-extrabold text-sm">
                {profile.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-white uppercase group-hover:text-orange-400 transition-colors">
                {profile.name}
              </span>
              <span className="text-[10px] tracking-wider text-emerald-400 font-semibold uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {language === 'id' ? 'Sistem Informasi UNIKMA' : 'Information Systems'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Clean typography with luminous active accent) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-2 hover:text-orange-400 transition-colors whitespace-nowrap ${
                  idx === 0 ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-emerald-400' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone: Language Switcher + CV Button + Contact CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language Switcher Pill */}
            <div className="flex items-center p-1 bg-slate-900/90 rounded-full border border-slate-800">
              <button
                type="button"
                onClick={() => onLanguageChange('id')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  language === 'id'
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Bahasa Indonesia"
              >
                <span>🇮🇩</span>
                <span>ID</span>
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="English"
              >
                <span>🇬🇧</span>
                <span>EN</span>
              </button>
            </div>

            {/* CV Button */}
            <button
              type="button"
              onClick={onOpenResume}
              className="px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              {t.downloadCv}
            </button>

            {/* Contact CTA Button (Luminous Orange pill) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all transform active:scale-95 whitespace-nowrap"
            >
              <span>{t.contact}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Quick Language Toggle on Mobile */}
            <button
              type="button"
              onClick={() => onLanguageChange(language === 'id' ? 'en' : 'id')}
              className="px-2 py-1 text-xs font-bold text-orange-400 bg-slate-900 rounded-md border border-slate-800"
            >
              {language === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-orange-500/20 bg-[#140803]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-stone-200 hover:text-orange-400 hover:bg-orange-950/40 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-orange-500/20 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-lg text-center"
            >
              {t.downloadCv}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg text-center shadow-lg shadow-orange-500/20"
            >
              {t.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
