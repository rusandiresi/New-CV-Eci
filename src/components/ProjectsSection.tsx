import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { projectItems, translations } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { FolderGit2, ArrowUpRight, Github, ExternalLink, CheckCircle2, Clock, Wrench } from 'lucide-react';

interface ProjectsProps {
  language: Language;
}

export const ProjectsSection: React.FC<ProjectsProps> = ({ language }) => {
  const [filter, setFilter] = useState<'all' | 'database' | 'analysis' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const t = translations[language].projects;

  const filteredProjects = filter === 'all'
    ? projectItems
    : projectItems.filter(p => p.category === filter);

  const filterTabs = [
    { key: 'all' as const, label: t.all, count: projectItems.length },
    { key: 'database' as const, label: t.database, count: projectItems.filter(p => p.category === 'database').length },
    { key: 'analysis' as const, label: t.analysis, count: projectItems.filter(p => p.category === 'analysis').length },
    { key: 'web' as const, label: t.web, count: projectItems.filter(p => p.category === 'web').length },
  ];

  return (
    <section id="projects" className="py-20 bg-[#150a04]/40 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30 mb-3 shadow-md shadow-orange-950/30">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.title}
            </h2>
            <p className="mt-3 text-base text-stone-300">
              {t.subtitle}
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center p-1 bg-[#1a0e07]/90 border border-orange-500/25 rounded-xl overflow-x-auto max-w-full">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  filter === tab.key
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] opacity-70">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 3-column / 2-column large cards with high-fidelity preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isCompleted = (language === 'id' ? project.statusId : project.statusEn)?.toLowerCase().includes('selesai') ||
                                (language === 'id' ? project.statusId : project.statusEn)?.toLowerCase().includes('completed');

            return (
              <div
                key={project.id}
                className="bg-[#190e06]/75 rounded-3xl border border-orange-500/20 overflow-hidden shadow-xl hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md"
              >
                <div>
                  {/* Project Image Banner */}
                  <div 
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#0d0502] cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-3 py-1 bg-[#140803]/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-orange-500/30 shadow-md">
                        {language === 'id' ? project.categoryLabelId : project.categoryLabelEn}
                      </span>
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-md ${
                        isCompleted
                          ? 'bg-emerald-500/90 text-white'
                          : 'bg-amber-500/90 text-white'
                      }`}>
                        {isCompleted ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        <span>{language === 'id' ? project.statusId : project.statusEn}</span>
                      </span>
                    </div>

                    {/* Hover Quick Action */}
                    <div className="absolute inset-0 bg-[#120703]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-stone-900 text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <span>{t.viewDetails}</span>
                        <ArrowUpRight className="w-4 h-4 text-orange-600" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="font-heading text-lg font-bold text-white group-hover:text-orange-400 transition-colors cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed line-clamp-3">
                      {language === 'id' ? project.summaryId : project.summaryEn}
                    </p>

                    {/* Key Features Preview */}
                    {project.featuresId && (
                      <div className="mt-4 pt-3 border-t border-orange-500/20">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                          {language === 'id' ? 'Fitur Utama:' : 'Key Features:'}
                        </span>
                        <ul className="space-y-1.5">
                          {(language === 'id' ? project.featuresId : project.featuresEn)?.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tools Deployed */}
                    <div className="mt-4 pt-3 border-t border-orange-500/20">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2 flex items-center gap-1.5">
                        <Wrench className="w-3 h-3 text-orange-400/70" />
                        <span>{language === 'id' ? 'Tools Digunakan:' : 'Tools Used:'}</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(project.toolsUsed || project.tags).slice(0, 4).map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[11px] font-medium bg-[#241308] text-stone-300 border border-orange-500/25 rounded-md"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact strip */}
                    <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-orange-950/60 via-amber-950/30 to-[#190e06]/80 border border-orange-500/35 text-xs font-medium text-stone-200 flex items-start gap-2">
                      <span className="font-bold text-orange-400 shrink-0">Impact:</span>
                      <span className="line-clamp-2">{language === 'id' ? project.impactId : project.impactEn}</span>
                    </div>

                  </div>
                </div>

                {/* Bottom Card Footer Actions */}
                <div className="px-6 py-3.5 bg-[#120703]/80 border-t border-orange-500/20 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 py-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3 text-slate-400">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors p-1"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-orange-400 transition-colors p-1"
                        title="Demo / Spreadsheet"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
