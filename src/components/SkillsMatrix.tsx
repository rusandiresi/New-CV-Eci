import React from 'react';
import { Language } from '../types';
import { skillCategories, translations } from '../data/portfolioData';
import { Cpu, CheckCircle } from 'lucide-react';

interface SkillsMatrixProps {
  language: Language;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ language }) => {
  const t = translations[language].skills;

  return (
    <section className="py-20 bg-[#160a04]/40 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30 mb-3 shadow-md shadow-orange-950/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-stone-300">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#190e06]/75 rounded-3xl p-6 sm:p-7 border border-orange-500/20 shadow-xl hover:border-orange-500/50 transition-all space-y-6 backdrop-blur-md"
            >
              <div>
                <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest block mb-1">
                  Kategori 0{idx + 1}
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  {language === 'id' ? cat.categoryNameId : cat.categoryNameEn}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-stone-200">{skill.name}</span>
                      <span className="text-stone-400 font-mono tabular-nums">{skill.level}%</span>
                    </div>

                    {/* Progress Bar with smooth radiant gradient */}
                    <div className="w-full h-2 bg-[#261308] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 rounded-full transition-all duration-1000 shadow-sm shadow-orange-500/30"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
