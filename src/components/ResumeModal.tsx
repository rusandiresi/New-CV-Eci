import React from 'react';
import { Language, ProfileData } from '../types';
import { translations, timelineItems, projectItems, certificationItems, skillCategories } from '../data/portfolioData';
import { X, Printer, Download, MapPin, Mail, Phone, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  profile: ProfileData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  language,
  profile
}) => {
  if (!isOpen) return null;

  const t = translations[language].resumeModal;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#090402]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-[#170c06] rounded-3xl max-w-4xl w-full shadow-2xl border border-orange-500/30 overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-orange-500/20 bg-[#120703]/90">
          <div className="flex items-center gap-3">
            <h3 className="font-heading font-bold text-white text-sm sm:text-base">
              {t.title}
            </h3>
            <span className="px-2.5 py-0.5 text-[11px] font-bold bg-orange-950/80 text-orange-400 border border-orange-500/30 rounded-full">
              {language === 'id' ? 'Format ATS-Friendly' : 'ATS Format'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-lg shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.downloadPdf}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Paper Area */}
        <div id="printable-cv" className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-white text-slate-800">
          
          {/* Header Block */}
          <div className="border-b-2 border-slate-900 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-20 h-24 rounded-lg overflow-hidden border border-slate-300 shrink-0 bg-slate-100 shadow-xs">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <div>
                  <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                    {profile.name}
                  </h1>
                  <p className="font-semibold text-sm sm:text-base text-orange-600 mt-0.5">
                    {language === 'id' ? profile.roleId : profile.roleEn} · {profile.subRole}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {profile.university} — {profile.faculty}
                  </p>
                </div>
              </div>

              {/* Contact meta */}
              <div className="text-xs text-slate-600 space-y-1 sm:text-right">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
                <p>{profile.location}</p>
                <p className="text-slate-400">linkedin.com · github.com</p>
              </div>
            </div>
          </div>

          {/* Section: Executive Summary */}
          <div>
            <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              {t.summary}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {language === 'id' ? profile.bioId : profile.bioEn}
            </p>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              {t.education}
            </h2>
            <div className="space-y-4">
              {timelineItems.filter(t => t.type === 'education').map(edu => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{language === 'id' ? edu.institutionId : edu.institutionEn}</span>
                    <span className="font-normal text-slate-500 text-xs">{edu.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-slate-700 font-semibold text-xs mt-0.5">
                    <span>{language === 'id' ? edu.titleId : edu.titleEn}</span>
                    <span className="text-orange-600 font-bold">IPK: {profile.gpa}</span>
                  </div>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-slate-600">
                    {(language === 'id' ? edu.highlightsId : edu.highlightsEn).map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Professional & Internship Experience */}
          <div>
            <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              {t.experience}
            </h2>
            <div className="space-y-5">
              {timelineItems.filter(t => t.type !== 'education').map(exp => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{language === 'id' ? exp.titleId : exp.titleEn}</span>
                    <span className="font-normal text-slate-500 text-xs">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-700 font-semibold mt-0.5">
                    {language === 'id' ? exp.institutionId : exp.institutionEn} — {exp.location}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {language === 'id' ? exp.descId : exp.descEn}
                  </p>
                  <ul className="mt-1.5 list-disc list-inside space-y-1 text-xs text-slate-600">
                    {(language === 'id' ? exp.highlightsId : exp.highlightsEn).map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Featured Projects */}
          <div>
            <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              {language === 'id' ? 'Proyek Sistem Informasi Unggulan' : 'Featured Information Systems Projects'}
            </h2>
            <div className="space-y-4">
              {projectItems.slice(0, 3).map(proj => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="text-xs font-normal text-slate-500">
                      {language === 'id' ? proj.categoryLabelId : proj.categoryLabelEn}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === 'id' ? proj.summaryId : proj.summaryEn}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    <span className="font-bold text-slate-700">Tech Stack:</span> {proj.tags.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications & Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                {t.certifications}
              </h2>
              <ul className="space-y-2 text-xs text-slate-700">
                {certificationItems.slice(0, 4).map(cert => (
                  <li key={cert.id}>
                    <span className="font-bold block">{cert.name}</span>
                    <span className="text-slate-500 text-[11px]">{cert.issuer} ({cert.issueDate})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                {t.skills}
              </h2>
              <div className="space-y-2 text-xs text-slate-700">
                <div>
                  <span className="font-bold block text-slate-800">
                    {language === 'id' ? 'Komputer & Aplikasi Kantor:' : 'Computer & Office Suite:'}
                  </span>
                  <span className="text-slate-600">
                    {language === 'id'
                      ? 'Pengoperasian Komputer & TI, Microsoft Word, Excel, PowerPoint, Belajar Teknologi Baru'
                      : 'Computer & IT Operations, Microsoft Word, Excel, PowerPoint, Rapid Tech Learning'}
                  </span>
                </div>
                <div>
                  <span className="font-bold block text-slate-800">
                    {language === 'id' ? 'Pengolahan Data & Analisis:' : 'Data Processing & Analysis:'}
                  </span>
                  <span className="text-slate-600">
                    {language === 'id'
                      ? 'Pengolahan & Penyajian Data Terstruktur, Analisis Proses Bisnis, Pemecahan Masalah (Problem Solving)'
                      : 'Structured Data Processing, Business Process Analysis, Problem Solving'}
                  </span>
                </div>
                <div>
                  <span className="font-bold block text-slate-800">
                    {language === 'id' ? 'Komunikasi & Manajemen Kerja:' : 'Communication & Work Ethics:'}
                  </span>
                  <span className="text-slate-600">
                    {language === 'id'
                      ? 'Komunikasi Efektif, Kerja Sama Tim (Teamwork), Manajemen Waktu & Skala Prioritas, Tanggung Jawab'
                      : 'Clear Communication, Team Collaboration, Time Management, Consistency & Reliability'}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
