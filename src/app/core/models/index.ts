export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export interface ContactInfo {
  heading: string;
  subheading: string;
  email: string;
}

export interface SiteStats {
  yearsExperience?: number;
  projects?: number;
  roles?: number;
}

export interface SiteData {
  name: string;
  tagline: string;
  metaDescription: string;
  location?: string;
  nav: NavItem[];
  social: SocialLink[];
  contact: ContactInfo;
  cvUrl?: string;
  cvDownloadName?: string;
  stats?: SiteStats;
}

export interface TimelineItem {
  year: string;
  title: string;
  note: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface AboutData {
  photo?: string;
  /** Short intro for the Hero section (who you are + 17+ years). */
  heroBio?: string;
  /** Longer bio for the About section. */
  bio: string;
  quickBits?: string[];
  skills: string[];
  /** Tech stack with icons for the Skills section (icon = skill-icons.dev key). */
  techStack?: TechStackItem[];
  timeline: TimelineItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  highlights: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  role: string;
  year: string;
  client?: string;
  summary: string;
  description: string;
  tags: string[];
  featured: boolean;
  images: string[];
  linkLive?: string;
  linkRepo?: string;
  metrics?: string;
}

export interface Testimonial {
  id: string;
  personName: string;
  personTitle: string;
  personAvatar?: string;
  testimonial: string;
  project?: string;
}
