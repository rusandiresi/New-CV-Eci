/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { initialProfileData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('id');
  const profile = initialProfileData;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#1c0d05] via-[#140803] to-[#0c0502] text-stone-100 antialiased selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      {/* Ambient background mesh light orbs - Radiant Orange Theme */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Right Vibrant Solar Flare (Hero area) */}
        <div className="absolute -top-32 right-0 w-[650px] h-[650px] bg-gradient-to-br from-orange-500/35 via-amber-500/25 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Top-Left Warm Tangerine ambient bloom */}
        <div className="absolute top-16 -left-32 w-[650px] h-[650px] bg-gradient-to-tr from-orange-600/30 via-amber-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Center-Left Amber Glow */}
        <div className="absolute top-[35%] -left-40 w-[600px] h-[600px] bg-gradient-to-r from-orange-600/25 via-amber-700/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Center-Right Warm Fiery Coral Glow (Projects Showcase) */}
        <div className="absolute top-[60%] -right-40 w-[650px] h-[650px] bg-gradient-to-l from-orange-500/30 via-amber-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Bottom Warm Sunset Bloom */}
        <div className="absolute -bottom-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-t from-orange-600/30 via-amber-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Central Ambient Orange Depth */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial from-orange-500/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Fine technical grid texture across the entire background */}
        <div className="absolute inset-0 bg-tech-grid opacity-60" />
      </div>

      {/* Top Navbar */}
      <div className="relative z-40">
        <Navbar
          language={language}
          onLanguageChange={setLanguage}
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* Hero Section matching the reference layout */}
        <Hero
          language={language}
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* About Section: Academic credentials & 4 Pillars of Information Systems */}
        <AboutSection
          language={language}
          profile={profile}
        />

        {/* Services & Core Competencies: BPMN, Database, Web, UI/UX, BI */}
        <ServicesSection
          language={language}
        />

        {/* Projects Showcase & Case Studies with Interactive Modal */}
        <ProjectsSection
          language={language}
        />

        {/* Academic Journey & Work / Org Experience Timeline */}
        <ExperienceEducationSection
          language={language}
        />

        {/* Industry Certifications & Credentials Verification */}
        <CertificationsSection
          language={language}
        />

        {/* Skills Matrix & Toolchains */}
        <SkillsMatrix
          language={language}
        />

        {/* Contact Form & Direct Coordinates (WhatsApp & Email copy) */}
        <ContactSection
          language={language}
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        profile={profile}
      />

      {/* ATS Printable Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        language={language}
        profile={profile}
      />
    </div>
  );
}
