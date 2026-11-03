import React, { useState } from 'react';
import { Language, TimelineItem } from '../types';
import { timelineItems, translations } from '../data/portfolioData';
import { Briefcase, GraduationCap, Users, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

interface ExperienceEducationProps {
  language: Language;
}

export const ExperienceEducationSection: React.FC<ExperienceEducationProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'experience' | 'organization'>('all');
  const t = translations[language].experience;

  const filteredItems = activeTab === 'all'
    ? timelineItems
    : timelineItems.filter(item => item.type === activeTab);

  const getTabIcon = (type: string) => {
    switch (type) {
      case 'education': return <GraduationCap className="w-4 h-4" />;
      case 'experience': return <Briefcase className="w-4 h-4" />;
      case 'organization': return <Users className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#160a04]/40 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30 mb-3 shadow-md shadow-orange-950/30">
              <Award className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.title}
            </h2>
            <p className="mt-3 text-base text-stone-300">
              {t.subtitle}
            </p>
          </div>

          {/* Segmented Filter */}
          <div className="flex items-center p-1 bg-[#1a0e07]/90 rounded-xl border border-orange-500/25 shadow-md shrink-0 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25' : 'text-stone-400 hover:text-white'
              }`}
            >
              {language === 'id' ? 'Semua' : 'All'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'education' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25' : 'text-stone-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.tabEducation}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'experience' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.tabExperience}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('organization')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'organization' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{t.tabOrganization}</span>
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-orange-500/30 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Marker Pin */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1b0e06] border-2 border-orange-500 shadow-md flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <div className="scale-75 sm:scale-90">
                  {getTabIcon(item.type)}
                </div>
              </div>

              {/* Card Container */}
              <div className="bg-[#190e06]/75 rounded-2xl p-6 sm:p-7 border border-orange-500/20 shadow-xl hover:border-orange-500/50 transition-all backdrop-blur-md">
                
                {/* Header row: Period & Type badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-orange-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-300 bg-[#241308] px-2.5 py-0.5 rounded-full border border-orange-500/25">
                    {item.type === 'education' ? 'Pendidikan' : item.type === 'experience' ? 'Pengalaman Kerja' : 'Organisasi'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {language === 'id' ? item.titleId : item.titleEn}
                </h3>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-300 font-medium mt-1 mb-3">
                  <span className="text-white font-semibold">
                    {language === 'id' ? item.institutionId : item.institutionEn}
                  </span>
                  <span className="text-stone-600">·</span>
                  <div className="flex items-center gap-1 text-stone-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                  {language === 'id' ? item.descId : item.descEn}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 pt-4 border-t border-orange-500/20 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    {t.highlightsHeader}
                  </span>
                  {(language === 'id' ? item.highlightsId : item.highlightsEn).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
