export type Language = 'id' | 'en';

export interface ProfileData {
  name: string;
  nickname?: string;
  roleId: string;
  roleEn: string;
  subRole: string;
  university: string;
  faculty: string;
  major: string;
  gpa: string;
  semester: string;
  phone: string;
  email: string;
  location: string;
  bioId: string;
  bioEn: string;
  avatarUrl: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    whatsapp: string;
  };
}

export interface ServiceItem {
  id: string;
  titleId: string;
  titleEn: string;
  descId: string;
  descEn: string;
  iconName: string;
  deliverablesId: string[];
  deliverablesEn: string[];
  tools: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'analysis' | 'database' | 'uiux';
  categoryLabelId: string;
  categoryLabelEn: string;
  summaryId: string;
  summaryEn: string;
  problemId: string;
  problemEn: string;
  solutionId: string;
  solutionEn: string;
  impactId: string;
  impactEn: string;
  tags: string[];
  image: string;
  statusId?: string;
  statusEn?: string;
  featuresId?: string[];
  featuresEn?: string[];
  competenciesId?: string[];
  competenciesEn?: string[];
  toolsUsed?: string[];
  demoUrl?: string;
  githubUrl?: string;
  architectureDetails: {
    frontend?: string;
    backend?: string;
    database?: string;
    modeling?: string;
    deliverables?: string;
  };
}

export interface TimelineItem {
  id: string;
  period: string;
  titleId: string;
  titleEn: string;
  institutionId: string;
  institutionEn: string;
  location: string;
  descId: string;
  descEn: string;
  highlightsId: string[];
  highlightsEn: string[];
  type: 'education' | 'experience' | 'organization';
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl: string;
  skills: string[];
  featured?: boolean;
}

export interface SkillCategory {
  categoryNameId: string;
  categoryNameEn: string;
  skills: {
    name: string;
    level: number; // 1-100
    category: string;
  }[];
}
