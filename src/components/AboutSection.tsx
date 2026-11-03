import React from 'react';
import { Language, ProfileData } from '../types';
import { translations } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Layers, CheckCircle2, Building, Sparkles } from 'lucide-react';

interface AboutProps {
  language: Language;
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutProps> = ({ language, profile }) => {
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 bg-[#160b05]/50 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30 mb-3 shadow-md shadow-orange-950/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            {t.lead}
          </p>
        </div>

        {/* 2-Column Content: Left Academic Spotlight, Right 4 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Academic Spotlight Card) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1d0e06] via-[#170a04] to-[#100602] text-white rounded-3xl p-8 shadow-2xl border border-orange-500/30 relative overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/15 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {t.academicTitle}
                  </h3>
                  <p className="text-xs text-stone-400">
                    {language === 'id' ? 'Profil Pendidikan Tinggi' : 'Higher Education Profile'}
                  </p>
                </div>
              </div>

              {/* Academic Highlights List with Unboxed Separators */}
              <div className="space-y-4 pt-2 border-t border-orange-500/20 text-sm">
                <div>
                  <span className="text-xs uppercase text-stone-400 font-semibold tracking-wider">
                    {language === 'id' ? 'Universitas & Fakultas' : 'University & Faculty'}
                  </span>
                  <p className="text-base font-semibold text-white mt-0.5">
                    {profile.university}
                  </p>
                  <p className="text-xs text-stone-400">{profile.faculty}</p>
                </div>

                <div>
                  <span className="text-xs uppercase text-stone-400 font-semibold tracking-wider">
                    {language === 'id' ? 'Program Studi' : 'Degree Major'}
                  </span>
                  <p className="text-base font-semibold text-orange-400 mt-0.5">
                    {profile.major}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#100602]/80 p-3.5 rounded-xl border border-orange-500/20">
                    <span className="text-xs text-stone-400 block font-medium">IPK Kumulatif</span>
                    <span className="font-heading text-2xl font-bold text-white tabular-nums">
                      {profile.gpa}
                    </span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5 font-medium">
                      High Honors
                    </span>
                  </div>
                  <div className="bg-[#100602]/80 p-3.5 rounded-xl border border-orange-500/20">
                    <span className="text-xs text-stone-400 block font-medium">Status Akademik</span>
                    <span className="font-heading text-xl font-bold text-white">
                      {profile.semester}
                    </span>
                    <span className="text-[10px] text-stone-400 block mt-0.5">
                      {language === 'id' ? 'Tingkat Akhir' : 'Senior Year'}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs uppercase text-stone-400 font-semibold tracking-wider">
                    {language === 'id' ? 'Fokus Keilmuan Utama' : 'Core Academic Concentration'}
                  </span>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    {language === 'id'
                      ? 'Pengembangan Aplikasi & Website (Software Development), Pemrograman Web Modern, Rekayasa Basis Data, serta Solusi Digital.'
                      : 'Application & Web Development (Software Development), Modern Web Engineering, Database Design, and Digital Solutions.'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Pillars of Information Systems */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white">
              {t.pillarsTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#190e06]/70 hover:bg-[#231309]/90 border border-orange-500/20 hover:border-orange-500/50 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#27140a] text-orange-400 border border-orange-500/30 flex items-center justify-center font-bold text-sm mb-3 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">
                    {`0${idx + 1}`}
                  </div>
                  <h4 className="font-heading text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote / Value Proposition Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-950/60 via-amber-950/40 to-[#1b0e07]/70 border border-orange-500/35 flex items-start gap-4 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-orange-500/30">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-200 leading-relaxed">
                  {language === 'id'
                    ? '"Teknologi yang baik bukan sekadar baris kode yang rumit, melainkan sistem yang secara tepat menyelesaikan masalah nyata dan mendorong efisiensi manusia."'
                    : '"Good technology is not measured merely by intricate code, but by how accurately an information system resolves real operational friction and empowers human decision-making."'}
                </p>
                <span className="text-xs text-orange-400 font-bold block mt-2 uppercase tracking-wider">
                  — Filosofi Sistem Informasi
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
