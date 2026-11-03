import React from 'react';
import { Language, CertificationItem } from '../types';
import { certificationItems, translations } from '../data/portfolioData';
import { ShieldCheck, ExternalLink, Calendar, CheckCircle2, Award } from 'lucide-react';

interface CertificationsProps {
  language: Language;
}

export const CertificationsSection: React.FC<CertificationsProps> = ({ language }) => {
  const t = translations[language].certificates;

  return (
    <section id="certificates" className="py-20 bg-[#150a04]/40 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30 mb-3 shadow-md shadow-orange-950/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-stone-300">
            {t.subtitle}
          </p>
        </div>

        {/* Certifications Grid: 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationItems.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#190e06]/75 rounded-2xl p-6 border border-orange-500/20 shadow-xl hover:shadow-2xl hover:border-orange-500/50 transition-all flex flex-col justify-between group relative backdrop-blur-md"
            >
              <div>
                {/* Header: Issuer & Date */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#241308] text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-stone-400 flex items-center gap-1 justify-end">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.issueDate}</span>
                    </span>
                  </div>
                </div>

                {/* Cert Name */}
                <h3 className="font-heading text-base font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-orange-400 mt-1">
                  {cert.issuer}
                </p>

                {/* Credential ID */}
                <div className="mt-4 p-2.5 rounded-lg bg-[#120703]/80 border border-orange-500/20 flex items-center justify-between text-xs">
                  <span className="text-stone-400 font-medium">{t.credentialIdLabel}:</span>
                  <span className="font-mono font-semibold text-stone-200">{cert.credentialId}</span>
                </div>

                {/* Skills tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-medium bg-[#241308] text-stone-300 border border-orange-500/25 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <div className="mt-6 pt-4 border-t border-orange-500/20 flex items-center justify-between">
                <span className="text-xs font-medium text-amber-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-400 hover:text-orange-400 transition-colors"
                >
                  <span>{t.viewCert}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
