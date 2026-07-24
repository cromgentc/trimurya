import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import connectDB from './config/db.js';
import User from './models/User.js';
import ContactMessage from './models/ContactMessage.js';
import GenericContent from './models/GenericContent.js';

dotenv.config();

const seedUsers = async () => {
  const users = [
    { name: 'System Admin', email: 'admin@trimurya.com', password: 'Admin@123', role: 'admin', verified: true },
    { name: 'Rahul Sharma', email: 'rahul@trimurya.com', password: 'Employee@123', role: 'employee', verified: true },
    { name: 'Priya Patel', email: 'priya@trimurya.com', password: 'Client@123', role: 'client', verified: true },
    { name: 'Amit Kumar', email: 'amit@trimurya.com', password: 'Candidate@123', role: 'candidate', verified: true }
  ];
  for (const user of users) {
    const existing = await User.findOne({ email: user.email });
    if (!existing) {
      await User.create(user);
      console.log('Seeded user:', user.email);
    }
  }
};

const seedGenericContent = async () => {
  const serviceItems = [
    { title: 'AI Project Management', slug: 'ai-project-management', type: 'services', status: 'published', summary: 'We help teams launch AI initiatives with structure, governance, and transparent delivery so every milestone is measurable and dependable.', longDescription: 'Launching AI initiatives requires more than technical expertise—it demands structured governance, clear milestones, and stakeholder alignment.', items: ['Roadmap Design', 'Sprint Planning'], features: ['Custom AI delivery frameworks'], outcomes: ['35% faster time-to-market'], process: [{ step: '01', title: 'Discovery & Scoping', copy: 'We assess your AI readiness.' }], faqs: [{ q: 'What methodologies?', a: 'We blend Agile/Scrum with AI-specific workflows.' }], related: ['website-development', 'cloud-solutions'], heroStats: [{ value: '60+', label: 'AI Projects Guided' }], benefits: [{ icon: 'FiTrendingUp', title: 'Faster Time-to-Market', copy: 'Accelerate your AI initiatives.' }], technologies: ['OpenAI', 'Slack'], testimonials: [{ quote: "Trimurya's project management transformed our AI rollout.", author: 'Rajesh Kumar', role: 'CTO', company: 'Growth-Stage SaaS' }] },
    { title: 'Website Development', slug: 'website-development', type: 'services', status: 'published', summary: 'Enterprise-grade websites built for performance, conversion, and brand credibility.', longDescription: 'Your website is your most powerful digital asset.', items: ['Brand Website', 'Landing Pages'], features: ['Custom responsive design'], outcomes: ['40% improvement in page load speed'], process: [{ step: '01', title: 'Strategy & Discovery', copy: 'We define your brand architecture.' }], faqs: [{ q: 'What stack?', a: 'We specialize in React, Next.js, Vite, Node.js.' }], related: ['digital-marketing', 'cloud-solutions'], heroStats: [{ value: '180+', label: 'Web Experiences Delivered' }], benefits: [{ icon: 'FiTarget', title: 'Conversion-Focused Design', copy: 'Every element is designed to guide users toward action.' }], technologies: ['React', 'Next.js', 'Node.js'], testimonials: [{ quote: 'Trimurya transformed our online presence.', author: 'Amit Singh', role: 'Marketing Director', company: 'RetailMax Inc' }] },
    { title: 'Digital Marketing', slug: 'digital-marketing', type: 'services', status: 'published', summary: 'Performance-driven marketing strategies that combine SEO, paid media, and content.', longDescription: 'Digital marketing that delivers measurable ROI.', items: ['SEO Strategy', 'Paid Media'], features: ['Enterprise SEO audits'], outcomes: ['200% increase in qualified leads'], process: [{ step: '01', title: 'Audit & Research', copy: 'We analyze your current digital presence.' }], faqs: [{ q: 'How measure success?', a: 'We track metrics aligned to your business goals.' }], related: ['website-development', 'business-consultancy'], heroStats: [{ value: '200%', label: 'More Qualified Leads' }], benefits: [{ icon: 'FiTarget', title: 'Revenue Growth', copy: 'Data-driven strategies.' }], technologies: ['Google Ads', 'LinkedIn Ads', 'HubSpot'], testimonials: [{ quote: "Our pipeline has never been healthier.", author: 'Priya Sharma', role: 'VP of Product', company: 'FinTech Innovations' }] },
    { title: 'Business Consultancy', slug: 'business-consultancy', type: 'services', status: 'published', summary: 'Strategic advisory for digital transformation, operational efficiency, and growth enablement.', longDescription: 'Navigate complexity with confidence.', items: ['Digital Transformation', 'Operational Strategy'], features: ['Comprehensive business diagnostics'], outcomes: ['30% improvement in operational efficiency'], process: [{ step: '01', title: 'Diagnostic Assessment', copy: 'We conduct a thorough analysis.' }], faqs: [{ q: 'What industries?', a: 'We serve technology, healthcare, finance, manufacturing.' }], related: ['digital-marketing', 'ai-project-management'], heroStats: [{ value: '30%', label: 'Efficiency Gain' }], benefits: [{ icon: 'FiBriefcase', title: 'Strategic Clarity', copy: 'Clear roadmaps.' }], technologies: ['AWS', 'Tableau', 'Power BI'], testimonials: [{ quote: 'They combined strategic thinking with hands-on execution support.', author: 'Vikram Reddy', role: 'Operations Director', company: 'Manufacturing Enterprise' }] },
    { title: 'HR & Recruitment Solutions', slug: 'hr-consultancy', type: 'services', status: 'published', summary: 'End-to-end talent acquisition, workforce planning, and HR process optimization.', longDescription: 'Attract, retain, and develop top talent.', items: ['Talent Acquisition', 'Executive Search'], features: ['AI-powered candidate sourcing'], outcomes: ['40% reduction in time-to-hire'], process: [{ step: '01', title: 'Talent Needs Analysis', copy: 'We assess your talent gaps.' }], faqs: [{ q: 'What roles?', a: 'We cover all levels from individual contributors to C-suite.' }], related: ['business-consultancy', 'ai-project-management'], heroStats: [{ value: '40%', label: 'Faster Hiring' }], benefits: [{ icon: 'FiUsers', title: 'Quality Hires', copy: 'Rigorous screening.' }], technologies: ['LinkedIn Recruiter', 'Workday'], testimonials: [{ quote: 'Trimurya helped us build a world-class talent acquisition engine.', author: 'Arun Patel', role: 'Head of Talent', company: 'HealthTech Solutions' }] },
    { title: 'Mobile App Development', slug: 'mobile-app-development', type: 'services', status: 'published', summary: 'Native and cross-platform mobile applications built for performance, user engagement, and enterprise integration.', longDescription: 'Transform your business with powerful mobile experiences.', items: ['iOS & Android Apps', 'React Native'], features: ['Native iOS (Swift) and Android (Kotlin) development'], outcomes: ['4.8+ average app store ratings'], process: [{ step: '01', title: 'Product Strategy', copy: 'We define your app vision.' }], faqs: [{ q: 'Native vs Cross?', a: 'Native offers best performance.' }], related: ['website-development', 'ai-project-management'], heroStats: [{ value: '4.8+', label: 'App Store Rating' }], benefits: [{ icon: 'FiSmartphone', title: 'Cross-Platform Excellence', copy: 'Native-quality experiences.' }], technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin'], testimonials: [{ quote: 'The mobile app transformed our customer engagement.', author: 'Sneha Kapoor', role: 'Digital Director', company: 'RetailMax Inc' }] },
    { title: 'Cloud Solutions', slug: 'cloud-solutions', type: 'services', status: 'published', summary: 'Scalable cloud architecture, migration, and managed infrastructure services.', longDescription: 'Accelerate your digital transformation with robust cloud solutions.', items: ['Cloud Migration', 'AWS & Azure'], features: ['Multi-cloud and hybrid cloud architecture design'], outcomes: ['99.99% uptime with multi-region architecture'], process: [{ step: '01', title: 'Cloud Assessment', copy: 'We evaluate your current infrastructure.' }], faqs: [{ q: 'Which platforms?', a: 'We are certified partners with AWS, Azure, GCP.' }], related: ['website-development', 'cybersecurity'], heroStats: [{ value: '99.99%', label: 'Uptime SLA' }], benefits: [{ icon: 'FiCloud', title: 'Scalable Infrastructure', copy: 'Elastic architecture.' }], technologies: ['AWS', 'Azure', 'GCP', 'Terraform'], testimonials: [{ quote: 'Our platform now handles peak enrollment periods without breaking a sweat.', author: 'Vikram Reddy', role: 'CTO', company: 'EduTech Global' }] },
    { title: 'Cybersecurity Services', slug: 'cybersecurity', type: 'services', status: 'published', summary: 'Comprehensive security assessments, compliance frameworks, and threat protection.', longDescription: 'Protect your enterprise from evolving cyber threats.', items: ['Security Audits', 'Penetration Testing'], features: ['Comprehensive vulnerability assessment'], outcomes: ['95% reduction in security incidents'], process: [{ step: '01', title: 'Security Assessment', copy: 'We evaluate your current security posture.' }], faqs: [{ q: 'What frameworks?', a: 'We support SOC 2 Type II, GDPR, HIPAA, PCI DSS, ISO 27001.' }], related: ['cloud-solutions', 'ai-project-management'], heroStats: [{ value: '95%', label: 'Less Incidents' }], benefits: [{ icon: 'FiShield', title: 'Proactive Threat Protection', copy: 'Continuous monitoring.' }], technologies: ['SOC 2', 'Zero Trust', 'SIEM'], testimonials: [{ quote: 'Trimurya gave us enterprise-grade security posture.', author: 'Amit Singh', role: 'CISO', company: 'Financial Services Corp' }] }
  ];

  const projectItems = [
    { title: 'AI Delivery Rollout', slug: 'ai-delivery-rollout', type: 'projects', status: 'published', client: 'Growth-Stage SaaS Team', industry: 'SaaS', date: '2024-12-15', duration: '6 Months', teamSize: '12', tech: ['OpenAI', 'Slack'], summary: 'Structured AI delivery framework that reduced launch delays by 35%.', challenge: 'The client had multiple AI initiatives running in silos.', solution: 'We designed and implemented a unified AI delivery framework.', results: '35% fewer launch delays, 60% reduction in project derailment risks.', metrics: [{ label: 'Faster Delivery', value: '35%', trend: 'up' }], testimonial: { quote: "Trimurya's project management transformed our AI rollout.", author: 'Rajesh Kumar', role: 'CTO', company: 'Growth-Stage SaaS' }, related: ['service-website-redesign', 'cloud-native-platform'] },
    { title: 'Service Website Redesign', slug: 'service-website-redesign', type: 'projects', status: 'published', client: 'Business Consultancy', industry: 'Consulting', date: '2024-11-08', duration: '4 Months', teamSize: '8', tech: ['React', 'Next.js', 'Tailwind CSS'], summary: 'Complete digital presence overhaul that boosted conversion by 40%.', challenge: "The client's legacy website was slow and not mobile-responsive.", solution: 'We built a custom React/Next.js website with headless CMS integration.', results: '40% traffic-to-lead growth, 35% increase in organic search traffic.', metrics: [{ label: 'Traffic Growth', value: '35%', trend: 'up' }], testimonial: { quote: "The team delivered a stunning, blazing-fast website.", author: 'Neha Gupta', role: 'CEO', company: 'StartupVista' }, related: ['ai-delivery-rollout', 'digital-growth-engine'] },
    { title: 'Digital Growth Engine', slug: 'digital-growth-engine', type: 'projects', status: 'published', client: 'FinTech Innovations', industry: 'FinTech', date: '2024-10-20', duration: '8 Months', teamSize: '6', tech: ['Google Ads', 'HubSpot'], summary: 'Full-funnel marketing strategy that delivered 200% more qualified leads.', challenge: 'The client struggled with low-quality leads and high customer acquisition costs.', solution: 'We built an integrated marketing stack with SEO optimization and multi-channel paid media.', results: '200% increase in qualified leads, 45% reduction in cost-per-acquisition.', metrics: [{ label: 'Leads Generated', value: '200%', trend: 'up' }], testimonial: { quote: "Our pipeline has never been healthier.", author: 'Priya Sharma', role: 'VP of Product', company: 'FinTech Innovations' }, related: ['service-website-redesign', 'ai-delivery-rollout'] },
    { title: 'Digital Transformation Blueprint', slug: 'digital-transformation-blueprint', type: 'projects', status: 'published', client: 'Manufacturing Enterprise', industry: 'Manufacturing', date: '2024-09-05', duration: '10 Months', teamSize: '10', tech: ['AWS', 'Tableau'], summary: 'Enterprise-wide digital transformation program achieving 30% operational efficiency improvement.', challenge: 'Outdated legacy systems, siloed data, slow approval cycles.', solution: 'We conducted comprehensive diagnostics and built a phased transformation roadmap.', results: '30% improvement in operational efficiency, 50% faster decision-making cycles.', metrics: [{ label: 'Efficiency Gain', value: '30%', trend: 'up' }], testimonial: { quote: 'They combined strategic thinking with hands-on execution support.', author: 'Vikram Reddy', role: 'Operations Director', company: 'Manufacturing Enterprise' }, related: ['cloud-native-platform', 'ai-delivery-rollout'] },
    { title: 'HR Transformation Program', slug: 'hr-transformation-program', type: 'projects', status: 'published', client: 'HealthTech Solutions', industry: 'Healthcare', date: '2024-08-12', duration: '5 Months', teamSize: '7', tech: ['LinkedIn Recruiter', 'Workday'], summary: 'Talent strategy overhaul that cut time-to-hire by 40%.', challenge: 'Unstructured hiring processes and high turnover among new hires.', solution: 'We redesigned the talent lifecycle with competency-based frameworks.', results: '40% reduction in time-to-hire, 25% improvement in candidate quality scores.', metrics: [{ label: 'Faster Hiring', value: '40%', trend: 'up' }], testimonial: { quote: 'Trimurya helped us build a world-class talent acquisition engine.', author: 'Arun Patel', role: 'Head of Talent', company: 'HealthTech Solutions' }, related: ['digital-growth-engine', 'digital-transformation-blueprint'] },
    { title: 'Retail Mobile Experience', slug: 'retail-mobile-experience', type: 'projects', status: 'published', client: 'RetailMax Inc', industry: 'E-Commerce', date: '2024-07-01', duration: '7 Months', teamSize: '14', tech: ['Flutter', 'React Native', 'AWS', 'Firebase'], summary: 'Cross-platform retail application achieving 4.8+ App Store rating.', challenge: 'The client needed a unified mobile experience across iOS and Android.', solution: 'We built a Flutter-based cross-platform app with offline-first architecture.', results: '4.8+ average App Store rating, 10x faster feature delivery.', metrics: [{ label: 'App Rating', value: '4.8+', trend: 'up' }], testimonial: { quote: 'The mobile app transformed our customer engagement.', author: 'Sneha Kapoor', role: 'Digital Director', company: 'RetailMax Inc' }, related: ['service-website-redesign', 'cloud-native-platform'] },
    { title: 'Cloud-Native Platform', slug: 'cloud-native-platform', type: 'projects', status: 'published', client: 'EduTech Global', industry: 'Education', date: '2024-06-18', duration: '9 Months', teamSize: '11', tech: ['AWS', 'Terraform', 'Docker', 'Kubernetes'], summary: 'Multi-cloud migration achieving 99.99% uptime and 40% cost reduction.', challenge: 'Fragmented legacy infrastructure on-premises made scaling unpredictable.', solution: 'We architected a multi-cloud solution using AWS with Kubernetes orchestration.', results: '99.99% uptime, 40% reduction in infrastructure costs, 10x faster deployment velocity.', metrics: [{ label: 'Uptime SLA', value: '99.99%', trend: 'up' }], testimonial: { quote: 'Our platform now handles peak enrollment periods without breaking a sweat.', author: 'Vikram Reddy', role: 'CTO', company: 'EduTech Global' }, related: ['enterprise-cyber-fortress', 'digital-transformation-blueprint'] },
    { title: 'Enterprise Cyber Fortress', slug: 'enterprise-cyber-fortress', type: 'projects', status: 'published', client: 'Financial Services Corp', industry: 'Banking', date: '2024-05-22', duration: '6 Months', teamSize: '9', tech: ['SOC 2', 'Zero Trust', 'SIEM', 'AWS'], summary: 'Comprehensive security overhaul achieving 95% fewer incidents and zero data breaches.', challenge: 'The client faced increasing ransomware threats and fragmented security tools.', solution: 'We implemented Zero Trust architecture and deployed a 24/7 SOC with SIEM.', results: '95% reduction in security incidents, 100% compliance audit success rate.', metrics: [{ label: 'Security Incidents', value: '-95%', trend: 'up' }], testimonial: { quote: 'Trimurya gave us enterprise-grade security posture and compliance confidence.', author: 'Amit Singh', role: 'CISO', company: 'Financial Services Corp' }, related: ['cloud-native-platform', 'digital-transformation-blueprint'] }
  ];

  const industryItems = [
    { title: 'Healthcare', slug: 'healthcare', type: 'industries', status: 'published', summary: 'Digital health platforms and HIPAA-compliant solutions.', content: 'We build HIPAA-compliant health tech solutions.' },
    { title: 'Education', slug: 'education', type: 'industries', status: 'published', summary: 'EdTech platforms and learning management systems.', content: 'Scalable education technology solutions.' },
    { title: 'Finance', slug: 'finance', type: 'industries', status: 'published', summary: 'FinTech solutions and banking infrastructure.', content: 'Secure and compliant financial technology platforms.' },
    { title: 'E-Commerce', slug: 'ecommerce', type: 'industries', status: 'published', summary: 'Online retail platforms and payment solutions.', content: 'End-to-end e-commerce solutions.' },
    { title: 'Manufacturing', slug: 'manufacturing', type: 'industries', status: 'published', summary: 'IoT and Industry 4.0 solutions.', content: 'Smart manufacturing and IoT integration.' },
    { title: 'Retail', slug: 'retail', type: 'industries', status: 'published', summary: 'Omnichannel retail experiences.', content: 'Unified retail operations platforms.' },
    { title: 'Logistics', slug: 'logistics', type: 'industries', status: 'published', summary: 'Supply chain and fleet management.', content: 'Smart logistics and supply chain solutions.' },
    { title: 'Government', slug: 'government', type: 'industries', status: 'published', summary: 'Digital government and civic tech.', content: 'Secure government digital infrastructure.' }
  ];

  const statsItems = [
    { title: 'AI Projects Guided', slug: 'ai-projects-guided', type: 'stats', status: 'published', value: '60+', label: 'AI Projects Guided' },
    { title: 'Web Experiences Delivered', slug: 'web-experiences-delivered', type: 'stats', status: 'published', value: '180+', label: 'Web Experiences Delivered' },
    { title: 'On-Time Execution', slug: 'on-time-execution', type: 'stats', status: 'published', value: '99%', label: 'On-Time Execution' },
    { title: 'Client Satisfaction', slug: 'client-satisfaction', type: 'stats', status: 'published', value: '4.9/5', label: 'Client Satisfaction' }
  ];

  const valuesItems = [
    { title: 'Clear Planning', slug: 'clear-planning', type: 'values', status: 'published', icon: 'FiActivity', copy: 'We turn ideas into structured roadmaps that keep work focused and manageable.' },
    { title: 'Reliable Delivery', slug: 'reliable-delivery', type: 'values', status: 'published', icon: 'FiShield', copy: 'Your project stays visible, organized, and moving with practical accountability.' },
    { title: 'Fast Websites', slug: 'fast-websites', type: 'values', status: 'published', icon: 'FiTarget', copy: 'We build polished sites that load quickly, look sharp, and support business growth.' },
    { title: 'Hands-On Support', slug: 'hands-on-support', type: 'values', status: 'published', icon: 'FiBriefcase', copy: 'You get a dedicated partner who helps from kickoff through launch and beyond.' }
  ];

  const blogItems = [
    { title: 'How AI Automation Is Redefining Enterprise Operations', slug: 'how-ai-automation-is-redefining-enterprise-operations', type: 'blogs', status: 'published', category: 'AI', tags: ['Automation', 'LLM', 'Strategy'], time: '09:30 AM', readTime: '5 min read', visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent', summary: 'Enterprises are moving beyond pilots and using AI to improve support, reporting, operations, and decision speed.', content: 'AI is no longer experimental. Leading enterprises are embedding automation into support, reporting, operations, and decision workflows to reduce latency and improve outcomes.', image: 'https://picsum.photos/seed/ai-automation/800/400', images: ['https://picsum.photos/seed/ai-automation-1/800/400', 'https://picsum.photos/seed/ai-automation-2/800/400'] },
    { title: 'Building Scalable Hiring Pipelines for High-Growth Teams', slug: 'building-scalable-hiring-pipelines-for-high-growth-teams', type: 'blogs', status: 'published', category: 'Recruitment', tags: ['RPO', 'Hiring', 'HR'], time: '10:45 AM', readTime: '4 min read', visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent', summary: 'Structured screening, RPO support, and talent dashboards are becoming essential for fast-growing teams.', content: 'High-growth teams need hiring engines that combine structured screening, RPO support, and real-time talent dashboards to move fast without sacrificing quality.', image: 'https://picsum.photos/seed/hiring-pipelines/800/400', images: ['https://picsum.photos/seed/hiring-pipelines-1/800/400', 'https://picsum.photos/seed/hiring-pipelines-2/800/400'] },
    { title: 'Modern Cybersecurity Priorities for Distributed Businesses', slug: 'modern-cybersecurity-priorities-for-distributed-businesses', type: 'blogs', status: 'published', category: 'Technology', tags: ['Cloud', 'Security', 'IT'], time: '12:10 PM', readTime: '7 min read', visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent', summary: 'Cloud security, identity access, backup readiness, and staff awareness remain the strongest first layer.', content: 'Distributed businesses must prioritize cloud security, identity access management, backup readiness, and continuous staff awareness training as the foundation of their cyber defense.', image: 'https://picsum.photos/seed/cybersecurity/800/400', images: ['https://picsum.photos/seed/cybersecurity-1/800/400', 'https://picsum.photos/seed/cybersecurity-2/800/400'] },
    { title: 'The New Performance Marketing Stack for Enterprise Brands', slug: 'the-new-performance-marketing-stack-for-enterprise-brands', type: 'blogs', status: 'published', category: 'Marketing', tags: ['SEO', 'Ads', 'Analytics'], time: '02:20 PM', readTime: '5 min read', visualClass: 'bg-gradient-to-br from-secondary via-accent to-primary', summary: 'Search, paid media, content, analytics, and conversion systems now need one operating rhythm.', content: 'Enterprise brands need an integrated marketing stack where search, paid media, content, analytics, and conversion systems operate on a single unified rhythm.', image: 'https://picsum.photos/seed/marketing-stack/800/400', images: ['https://picsum.photos/seed/marketing-stack-1/800/400', 'https://picsum.photos/seed/marketing-stack-2/800/400'] },
    { title: 'Call Center Quality Metrics Leaders Should Review Weekly', slug: 'call-center-quality-metrics-leaders-should-review-weekly', type: 'blogs', status: 'published', category: 'Technology', tags: ['BPO', 'CX', 'Reporting'], time: '04:00 PM', readTime: '3 min read', visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent', summary: 'Resolution quality, response time, escalation reasons, and sentiment can reveal service risks early.', content: 'Tracking resolution quality, response time, escalation reasons, and sentiment weekly helps leaders spot service risks before they impact customer experience.', image: 'https://picsum.photos/seed/call-center/800/400', images: ['https://picsum.photos/seed/call-center-1/800/400', 'https://picsum.photos/seed/call-center-2/800/400'] },
    { title: 'Why Telecom Field Teams Need Real-Time Operational Visibility', slug: 'why-telecom-field-teams-need-real-time-operational-visibility', type: 'blogs', status: 'published', category: 'Technology', tags: ['Telecom', 'Field Ops', 'Network'], time: '05:15 PM', readTime: '4 min read', visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent', summary: 'Better field tracking improves delivery planning, issue handling, and network rollout accountability.', content: 'Real-time operational visibility enables telecom field teams to improve delivery planning, accelerate issue handling, and maintain accountability during network rollouts.', image: 'https://picsum.photos/seed/telecom-field/800/400', images: ['https://picsum.photos/seed/telecom-field-1/800/400', 'https://picsum.photos/seed/telecom-field-2/800/400'] }
  ];

  const videoItems = [
    { title: 'AI Automation Briefing: From Manual Work to Smart Operations', slug: 'ai-automation-briefing-from-manual-work-to-smart-operations', type: 'videos', status: 'published', speaker: 'Trimurya Strategy Desk', duration: '08:42', views: '12.4K', youtubeId: 'dQw4w9WgXcQ', visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent', summary: 'How enterprises are replacing manual workflows with AI-assisted operations.' },
    { title: 'Hiring Playbook: Building a Reliable Recruitment Engine', slug: 'hiring-playbook-building-a-reliable-recruitment-engine', type: 'videos', status: 'published', speaker: 'HR Advisory Team', duration: '06:18', views: '8.7K', youtubeId: 'ysz5S6PUM-U', visualClass: 'bg-gradient-to-br from-primary via-secondary to-accent', summary: 'A practical playbook for screening, RPO, and talent dashboard design.' },
    { title: 'Digital Growth Report: Metrics Enterprise Brands Should Watch', slug: 'digital-growth-report-metrics-enterprise-brands-should-watch', type: 'videos', status: 'published', speaker: 'Marketing Command Center', duration: '09:05', views: '15.1K', youtubeId: 'ScMzIvxBSi4', visualClass: 'bg-gradient-to-br from-secondary via-accent to-primary', summary: 'Search, paid media, content, analytics, and conversion metrics in one view.' }
  ];

  const allContent = [...serviceItems, ...projectItems, ...industryItems, ...statsItems, ...valuesItems, ...blogItems, ...videoItems];

  for (const item of allContent) {
    if (item.type === 'blogs') {
      await GenericContent.findOneAndUpdate(
        { type: item.type, slug: item.slug },
        { $set: item },
        { upsert: true, new: true }
      );
      console.log('Upserted:', item.type, '-', item.title || item.slug);
    } else {
      const existing = await GenericContent.findOne({ type: item.type, slug: item.slug });
      if (!existing) {
        await GenericContent.create(item);
        console.log('Seeded:', item.type, '-', item.title || item.slug);
      }
    }
  }
};

const seedContactMessages = async () => {
  const messages = [
    { name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91-9876543210', service: 'Web Development', message: 'We need a new corporate website.', status: 'new' },
    { name: 'Anita Desai', email: 'anita@example.com', phone: '+91-8765432109', service: 'Mobile Apps', message: 'Looking for an iOS app developer.', status: 'contacted' },
    { name: 'Rohan Mehta', email: 'rohan@example.com', phone: '+91-7654321098', service: 'SEO', message: 'Need SEO audit for our SaaS product.', status: 'closed' }
  ];
  for (const msg of messages) {
    const existing = await ContactMessage.findOne({ email: msg.email, message: msg.message });
    if (!existing) {
      await ContactMessage.create(msg);
      console.log('Seeded contact message:', msg.email);
    }
  }
};

const runSeed = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB. Starting seed...');
    await seedUsers();
    await seedGenericContent();
    await seedContactMessages();
    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Seeding failed:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
    process.exit(0);
  }
};

runSeed();
