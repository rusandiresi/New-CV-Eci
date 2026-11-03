import React from 'react';
import { Language, ProjectItem } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Layers, Clock, Wrench, GraduationCap, FileSpreadsheet, ShieldCheck } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  language: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  language,
  onClose
}) => {
  if (!project) return null;

  const isCompleted = (language === 'id' ? project.statusId : project.statusEn)?.toLowerCase().includes('selesai') ||
                      (language === 'id' ? project.statusId : project.statusEn)?.toLowerCase().includes('completed');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0402]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Backdrop click area */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-[#170c06] rounded-3xl max-w-4xl w-full shadow-2xl border border-orange-500/30 overflow-hidden z-10 max-h-[90vh] flex flex-col text-stone-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-orange-500/20 bg-[#120703]/90">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-3 py-1 bg-orange-950/80 text-orange-400 border border-orange-500/30 text-xs font-bold rounded-full">
              {language === 'id' ? project.categoryLabelId : project.categoryLabelEn}
            </span>
            
            {/* Status indicator badge */}
            <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full flex items-center gap-1.5 ${
              isCompleted
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                : 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
            }`}>
              {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
              <span>{language === 'id' ? project.statusId : project.statusEn}</span>
            </span>

            <span className="text-xs text-stone-400 font-medium hidden sm:inline">
              · {language === 'id' ? 'Studi Kasus Sistem Informasi' : 'Information Systems Case Study'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#241308] hover:bg-[#321a0b] text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-orange-500/30"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Main Title & Banner Image */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {project.title}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === 'id' ? project.summaryId : project.summaryEn}
            </p>

            <div className="mt-5 relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem Box */}
            <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30">
              <span className="text-xs uppercase tracking-wider font-bold text-rose-400 block mb-2">
                {language === 'id' ? 'Latar Belakang & Masalah' : 'Problem Statement'}
              </span>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {language === 'id' ? project.problemId : project.problemEn}
              </p>
            </div>

            {/* Solution Box */}
            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 block mb-2">
                {language === 'id' ? 'Solusi Arsitektur Sistem' : 'Engineered Solution'}
              </span>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {language === 'id' ? project.solutionId : project.solutionEn}
              </p>
            </div>
          </div>

          {/* Fitur Utama Section */}
          {project.featuresId && (
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <h3 className="font-heading text-base font-bold text-white mb-3.5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-400" />
                <span>{language === 'id' ? 'Fitur Utama Sistem' : 'Key System Features'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(language === 'id' ? project.featuresId : project.featuresEn)?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-orange-400 border border-slate-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Kompetensi yang Dikembangkan */}
          {project.competenciesId && (
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <h3 className="font-heading text-base font-bold text-white mb-3.5 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>{language === 'id' ? 'Kompetensi yang Dikembangkan' : 'Competencies Developed'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(language === 'id' ? project.competenciesId : project.competenciesEn)?.map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Alat yang Digunakan */}
          <div>
            <h3 className="font-heading text-sm font-bold text-slate-400 mb-2.5 flex items-center gap-2 uppercase tracking-wider text-xs">
              <Wrench className="w-4 h-4 text-orange-400" />
              <span>{language === 'id' ? 'Tools & Perangkat yang Digunakan' : 'Tools & Technologies Used'}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project.toolsUsed || project.tags).map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-800 text-slate-200 text-xs font-semibold rounded-lg transition-colors border border-slate-700/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Measurable Impact Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-950/40 via-amber-950/20 to-slate-900/60 border border-orange-500/30 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-orange-400 block">
                {language === 'id' ? 'Dampak & Hasil Terukur' : 'Measurable Impact & Results'}
              </span>
              <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                {language === 'id' ? project.impactId : project.impactEn}
              </p>
            </div>
          </div>

          {/* Technical Architecture Breakdown */}
          {project.architectureDetails && (
            <div>
              <h3 className="font-heading text-base font-bold text-white mb-3.5 flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-400" />
                <span>{language === 'id' ? 'Spesifikasi Arsitektur & Alur Data' : 'System Architecture & Data Flow Specifications'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                {project.architectureDetails.frontend && (
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="font-bold text-slate-300 block mb-1">Frontend / Client Tier:</span>
                    <p className="text-slate-400">{project.architectureDetails.frontend}</p>
                  </div>
                )}
                {project.architectureDetails.backend && (
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="font-bold text-slate-300 block mb-1">Backend & API Tier:</span>
                    <p className="text-slate-400">{project.architectureDetails.backend}</p>
                  </div>
                )}
                {project.architectureDetails.database && (
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="font-bold text-slate-300 block mb-1">Database & Data Structure:</span>
                    <p className="text-slate-400">{project.architectureDetails.database}</p>
                  </div>
                )}
                {project.architectureDetails.modeling && (
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="font-bold text-slate-300 block mb-1">System Modeling & Flow:</span>
                    <p className="text-slate-400">{project.architectureDetails.modeling}</p>
                  </div>
                )}
                {project.architectureDetails.deliverables && (
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 sm:col-span-2">
                    <span className="font-bold text-slate-300 block mb-1">Deliverables & Documents:</span>
                    <p className="text-slate-400">{project.architectureDetails.deliverables}</p>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#120703]/90 border-t border-orange-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                <span>{language === 'id' ? 'Buka Demo / Spreadsheet' : 'Open Demo / Spreadsheet'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-200 bg-[#241308] hover:bg-[#321a0b] border border-orange-500/30 rounded-xl transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{language === 'id' ? 'Repositori Proyek' : 'Project Repository'}</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            {language === 'id' ? 'Tutup' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
