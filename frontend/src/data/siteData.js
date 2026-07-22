import {
  FiActivity,
  FiBriefcase,
  FiCloud,
  FiCpu,
  FiFilm,
  FiGlobe,
  FiHeadphones,
  FiLayers,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Projects', path: '/projects' }
];

export const stats = [
  { value: 62, suffix: '+', label: 'AI Projects Guided' },
  { value: 180, suffix: '+', label: 'Web Experiences Delivered' },
  { value: 99, suffix: '%', label: 'On-Time Execution' },
  { value: 4.9, suffix: '/5', label: 'Client Satisfaction' }
];

export const services = [
  {
    title: 'AI Project Management',
    icon: FiCpu,
    summary: 'We help teams launch AI initiatives with structure, governance, and transparent delivery so every milestone is measurable and dependable.',
    items: ['Roadmap Design', 'Sprint Planning', 'Stakeholder Alignment', 'Delivery Governance', 'Risk Mitigation', 'AI Ops Enablement']
  },
  {
    title: 'Website Development',
    icon: FiGlobe,
    summary: 'Enterprise-grade websites built for performance, conversion, and brand credibility, with responsive design and clear digital messaging.',
    items: ['Brand Website', 'Landing Pages', 'UX-led Design', 'SEO Readiness', 'Fast Performance', 'Conversion Optimization']
  }
];

export const industries = ['Healthcare', 'Education', 'Retail', 'Manufacturing', 'Banking', 'Finance', 'Insurance', 'Government', 'Telecommunications', 'IT', 'Real Estate', 'Construction', 'Hospitality', 'E-Commerce', 'Logistics', 'Film & Media', 'Automobile', 'Startups'];

export const projects = [
  { title: 'AI Delivery Rollout', client: 'Growth-Stage SaaS Team', tech: 'OpenAI, Slack, Notion, Airtable', type: 'AI Project Management', impact: '35% fewer launch delays' },
  { title: 'Service Website Redesign', client: 'Business Consultancy', tech: 'React, Vite, Tailwind, SEO', type: 'Website Development', impact: '40% traffic-to-lead growth' }
];

export const jobs = [
  { title: 'AI Solutions Consultant', location: 'Hybrid', type: 'Full Time', department: 'Artificial Intelligence' },
  { title: 'MERN Stack Developer', location: 'Remote', type: 'Full Time', department: 'Software Development' },
  { title: 'Recruitment Executive', location: 'Onsite', type: 'Full Time', department: 'HR Consultancy' },
  { title: 'Customer Support Team Lead', location: 'Onsite', type: 'Full Time', department: 'BPO Operations' }
];

export const blogs = [
  { title: 'How AI Automation Is Redefining Enterprise Operations', category: 'AI', tags: ['Automation', 'LLM', 'Strategy'] },
  { title: 'Building Scalable Hiring Pipelines for High-Growth Teams', category: 'Recruitment', tags: ['RPO', 'Hiring', 'HR'] },
  { title: 'Modern Cybersecurity Priorities for Distributed Businesses', category: 'Technology', tags: ['Cloud', 'Security', 'IT'] },
  { title: 'The New Performance Marketing Stack for Enterprise Brands', category: 'Marketing', tags: ['SEO', 'Ads', 'Analytics'] }
];

export const values = [
  { title: 'Clear Planning', icon: FiActivity, copy: 'We turn ideas into structured roadmaps that keep work focused and manageable.' },
  { title: 'Reliable Delivery', icon: FiShield, copy: 'Your project stays visible, organized, and moving with practical accountability.' },
  { title: 'Fast Websites', icon: FiTarget, copy: 'We build polished sites that load quickly, look sharp, and support business growth.' },
  { title: 'Hands-On Support', icon: FiBriefcase, copy: 'You get a dedicated partner who helps from kickoff through launch and beyond.' }
];
