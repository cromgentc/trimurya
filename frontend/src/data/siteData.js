import {
  FiActivity,
  FiBriefcase,
  FiCloud,
  FiCpu,
  FiFilm,
  FiFolder,
  FiGlobe,
  FiHeadphones,
  FiHome,
  FiLayers,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';

export const navLinks = [
  { label: 'Home', path: '/', icon: FiHome },
  { label: 'About', path: '/about', icon: FiUsers },
  { label: 'Services', path: '#services', icon: FiLayers },
  { label: 'Industries', path: '#industries', icon: FiGlobe },
  { label: 'Projects', path: '#projects', icon: FiFolder }
];

export const stats = [
  { value: 62, suffix: '+', label: 'AI Projects Guided' },
  { value: 180, suffix: '+', label: 'Web Experiences Delivered' },
  { value: 99, suffix: '%', label: 'On-Time Execution' },
  { value: 4.9, suffix: '/5', label: 'Client Satisfaction' }
];

export const services = [
  {
    id: 'ai-project-management',
    title: 'AI Project Management',
    icon: FiCpu,
    summary: 'We help teams launch AI initiatives with structure, governance, and transparent delivery so every milestone is measurable and dependable.',
    longDescription: 'Launching AI initiatives requires more than technical expertise—it demands structured governance, clear milestones, and stakeholder alignment. Our AI Project Management service provides end-to-end oversight from ideation to deployment, ensuring your AI programs deliver measurable business outcomes while staying on schedule and within budget. We combine agile methodologies with AI-specific workflows to de-risk complex initiatives and accelerate your time-to-value.\n\nFrom machine learning model rollouts to enterprise-wide AI adoption programs, we bring proven frameworks, real-time visibility, and hands-on delivery leadership. Our project managers understand the unique challenges of AI development—data dependencies, model validation cycles, regulatory compliance, and change management—so you can focus on innovation while we handle the complexity.',
    items: ['Roadmap Design', 'Sprint Planning', 'Stakeholder Alignment', 'Delivery Governance', 'Risk Mitigation', 'AI Ops Enablement'],
    features: [
      'Custom AI delivery frameworks tailored to your organization',
      'Real-time dashboard with KPI tracking and milestone visibility',
      'Cross-functional team coordination and dependency management',
      'Risk registers with proactive mitigation strategies',
      'Post-launch monitoring and AI ops integration',
      'Stakeholder reporting dashboards with business impact metrics'
    ],
    outcomes: [
      '35% faster time-to-market for AI initiatives',
      '60% reduction in project derailment risks',
      '98% stakeholder satisfaction rate',
      'Scalable delivery frameworks for ongoing AI programs'
    ],
    process: [
      { step: '01', title: 'Discovery & Scoping', copy: 'We assess your AI readiness, define success metrics, and map out the delivery roadmap aligned with business objectives.' },
      { step: '02', title: 'Architectural Planning', copy: 'We design the technical architecture, team structure, and sprint cadence needed for reliable AI delivery.' },
      { step: '03', title: 'Execution & Governance', copy: 'We run iterative sprints with transparent reporting, quality gates, and continuous stakeholder alignment.' },
      { step: '04', title: 'Launch & AI Ops', copy: 'We manage production deployment, monitoring setup, and post-launch optimization for sustained performance.' }
    ],
    faqs: [
      { q: 'What AI project management methodologies do you use?', a: 'We blend Agile/Scrum with AI-specific workflows, including MLOps integration, model validation checkpoints, and data governance reviews.' },
      { q: 'How do you handle changing requirements in AI projects?', a: 'We use adaptive sprint planning with rolling wave elaboration, allowing scope evolution while protecting critical path milestones.' },
      { q: 'Can you manage multi-team AI programs?', a: 'Yes, we coordinate across distributed teams, vendors, and stakeholders with unified governance and communication frameworks.' }
    ],
    related: ['website-development', 'cloud-solutions', 'cybersecurity'],
    heroStats: [
      { value: '60+', label: 'AI Projects Guided' },
      { value: '35%', label: 'Faster Time-to-Market' },
      { value: '98%', label: 'Stakeholder Satisfaction' },
      { value: '24/7', label: 'Delivery Visibility' }
    ],
    benefits: [
      { icon: FiTrendingUp, title: 'Faster Time-to-Market', copy: 'Accelerate your AI initiatives by up to 35% with structured delivery frameworks and optimized sprint cycles.' },
      { icon: FiShield, title: 'Risk Mitigation', copy: 'Proactive risk management and dependency tracking reduce project derailment by 60%, keeping your program on track.' },
      { icon: FiUsers, title: 'Stakeholder Confidence', copy: 'Real-time dashboards and transparent reporting build trust across leadership, ensuring continuous alignment.' },
      { icon: FiTarget, title: 'Measurable Outcomes', copy: 'Every milestone is tied to business KPIs, so you can clearly measure ROI and program impact.' }
    ],
    technologies: ['OpenAI', 'Slack', 'Notion', 'Airtable', 'Jira', 'Confluence', 'GitHub', 'Docker', 'AWS', 'Azure'],
    testimonials: [
      { quote: 'Trimurya\'s project management transformed our AI rollout. We launched in half the expected time with zero major blockers.', author: 'Rajesh Kumar', role: 'CTO', company: 'Growth-Stage SaaS' },
      { quote: 'The visibility and governance they brought to our AI program was exactly what we needed to secure executive buy-in.', author: 'Priya Sharma', role: 'VP of Product', company: 'FinTech Innovations' },
      { quote: 'Finally, a partner who understands both AI technology and enterprise delivery. Our model deployment velocity doubled.', author: 'Arun Patel', role: 'Head of Data Science', company: 'HealthTech Solutions' }
    ]
  },
  {
    id: 'website-development',
    title: 'Website Development',
    icon: FiGlobe,
    summary: 'Enterprise-grade websites built for performance, conversion, and brand credibility, with responsive design and clear digital messaging.',
    longDescription: 'Your website is your most powerful digital asset. We design and build enterprise-grade websites that combine stunning aesthetics with robust performance, ensuring every visitor has a seamless experience. From custom React applications to headless CMS implementations, our websites are engineered for speed, accessibility, and conversion. Every pixel is purposeful, every interaction refined, and every line of code optimized for search engines and users alike.',
    items: ['Brand Website', 'Landing Pages', 'UX-led Design', 'SEO Readiness', 'Fast Performance', 'Conversion Optimization'],
    features: [
      'Custom responsive design with mobile-first approach',
      'Headless CMS integration (Contentful, Sanity, Strapi)',
      'Performance optimization achieving Core Web Vitals excellence',
      'SEO technical foundation with schema markup and structured data',
      'Enterprise security with HTTPS, CSP headers, and regular audits',
      'Analytics integration and conversion tracking setup'
    ],
    outcomes: [
      '40% improvement in page load speed',
      '35% increase in organic search traffic',
      '50% higher mobile conversion rates',
      '99.9% uptime with enterprise hosting'
    ],
    process: [
      { step: '01', title: 'Strategy & Discovery', copy: 'We define your brand architecture, user personas, content strategy, and technical requirements.' },
      { step: '02', title: 'UX/UI Design', copy: 'We create wireframes, interactive prototypes, and pixel-perfect designs validated through user testing.' },
      { step: '03', title: 'Development & Integration', copy: 'We build the frontend and backend, integrate third-party systems, and implement enterprise features.' },
      { step: '04', title: 'Launch & Optimization', copy: 'We perform QA testing, deploy to production, and continuously optimize based on analytics data.' }
    ],
    faqs: [
      { q: 'What technology stack do you use?', a: 'We specialize in React, Next.js, Vite, and Node.js for frontend, with headless CMS solutions. Backend options include Node.js, Python, or serverless architectures.' },
      { q: 'How long does a typical website project take?', a: 'Enterprise websites typically take 8-16 weeks from discovery to launch, depending on complexity and integration requirements.' },
      { q: 'Do you provide hosting and maintenance?', a: 'Yes, we offer managed hosting on AWS, Vercel, or Netlify with 24/7 monitoring, security updates, and performance optimization.' }
    ],
    related: ['digital-marketing', 'cloud-solutions', 'business-consultancy'],
    heroStats: [
      { value: '180+', label: 'Web Experiences Delivered' },
      { value: '40%', label: 'Faster Load Speed' },
      { value: '35%', label: 'More Organic Traffic' },
      { value: '99.9%', label: 'Uptime Guaranteed' }
    ],
    benefits: [
      { icon: FiTarget, title: 'Conversion-Focused Design', copy: 'Every element is designed to guide users toward action, improving engagement metrics and driving measurable business growth.' },
      { icon: FiTrendingUp, title: 'SEO Excellence', copy: 'Technical SEO foundations, schema markup, and performance optimization ensure your site ranks high and stays visible.' },
      { icon: FiShield, title: 'Enterprise Security', copy: 'Bank-grade security with HTTPS, CSP headers, regular audits, and DDoS protection to keep your business safe.' },
      { icon: FiUsers, title: 'Seamless User Experience', copy: 'Mobile-first responsive design with intuitive navigation ensures every visitor has a flawless experience across devices.' }
    ],
    technologies: ['React', 'Next.js', 'Vite', 'Node.js', 'Tailwind CSS', 'TypeScript', 'WordPress', 'Contentful', 'Sanity', 'AWS', 'Vercel', 'Netlify'],
    testimonials: [
      { quote: 'Trimurya transformed our online presence. Our website load time dropped 50% and conversions increased by 35% in the first month.', author: 'Amit Singh', role: 'Marketing Director', company: 'RetailMax Inc' },
      { quote: 'The team delivered a stunning, blazing-fast website that perfectly captures our brand. Their attention to detail is unmatched.', author: 'Neha Gupta', role: 'CEO', company: 'StartupVista' },
      { quote: 'From design to deployment, the process was seamless. Our new site handles 10x traffic without breaking a sweat.', author: 'Vikram Reddy', role: 'CTO', company: 'EduTech Global' }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: FiTrendingUp,
    summary: 'Performance-driven marketing strategies that combine SEO, paid media, and content to scale revenue and brand visibility.',
    longDescription: 'Digital marketing that delivers measurable ROI. We design and execute comprehensive marketing strategies spanning SEO, paid advertising, content marketing, and social media. Our data-driven approach ensures every campaign is optimized for conversions and aligned with your business goals. From enterprise SEO audits to full-funnel paid media campaigns, we help you reach the right audience at the right time with the right message.',
    items: ['SEO Strategy', 'Paid Media', 'Content Marketing', 'Social Media', 'Analytics & ROI', 'Brand Positioning'],
    features: [
      'Enterprise SEO audits and technical optimization',
      'Multi-channel paid media management (Google, LinkedIn, Meta)',
      'Content strategy aligned with buyer journey stages',
      'Marketing automation and CRM integration',
      'A/B testing and conversion rate optimization',
      'Monthly performance reporting with actionable insights'
    ],
    outcomes: [
      '200% increase in qualified leads',
      '45% reduction in cost-per-acquisition',
      '3x ROI on paid media spend',
      'Top 3 organic rankings for 80% of target keywords'
    ],
    process: [
      { step: '01', title: 'Audit & Research', copy: 'We analyze your current digital presence, competitive landscape, and audience behavior to identify opportunities.' },
      { step: '02', title: 'Strategy Development', copy: 'We create a comprehensive marketing roadmap with KPIs, budget allocation, and channel priorities.' },
      { step: '03', title: 'Campaign Execution', copy: 'We launch campaigns across channels, create content, and manage paid media with continuous optimization.' },
      { step: '04', title: 'Measure & Scale', copy: 'We track performance against KPIs, refine strategies, and scale successful campaigns for maximum ROI.' }
    ],
    faqs: [
      { q: 'How do you measure marketing success?', a: 'We track metrics aligned to your business goals: lead generation, conversion rates, customer acquisition cost, lifetime value, and ROI across all channels.' },
      { q: 'What platforms do you specialize on', a: 'Google Ads, LinkedIn Ads, Meta, SEO, email marketing, and marketing automation platforms like HubSpot and Marketo.' },
      { q: 'How quickly can we see results?', a: 'Paid media delivers results immediately. SEO typically takes 3-6 months to show significant organic growth. We provide monthly progress reports from day one.' }
    ],
    related: ['website-development', 'business-consultancy', 'ai-project-management'],
    heroStats: [
      { value: '200%', label: 'More Qualified Leads' },
      { value: '3x', label: 'ROI on Paid Media' },
      { value: '45%', label: 'Lower CPA' },
      { value: 'Top 3', label: 'Organic Rankings' }
    ]
  },
  {
    id: 'business-consultancy',
    title: 'Business Consultancy',
    icon: FiBriefcase,
    summary: 'Strategic advisory for digital transformation, operational efficiency, and growth enablement for enterprise organizations.',
    longDescription: 'Navigate complexity with confidence. Our business consultancy services help enterprises identify opportunities, optimize operations, and execute digital transformation initiatives that drive sustainable growth. We bring deep industry expertise combined with analytical rigor to solve your most challenging business problems. From organizational design to go-to-market strategy, we partner with leadership teams to build capabilities that last.',
    items: ['Digital Transformation', 'Operational Strategy', 'Change Management', 'Growth Planning', 'Process Optimization', 'Technology Assessment'],
    features: [
      'Comprehensive business diagnostics and opportunity mapping',
      'Digital transformation roadmaps with phased implementation',
      'Organizational design and change management frameworks',
      'Technology stack assessment and modernization planning',
      'Go-to-market strategy and competitive positioning',
      'Executive coaching and leadership development programs'
    ],
    outcomes: [
      '30% improvement in operational efficiency',
      '50% faster decision-making cycles',
      '25% revenue growth through new capabilities',
      'Stronger organizational agility and resilience'
    ],
    process: [
      { step: '01', title: 'Diagnostic Assessment', copy: 'We conduct a thorough analysis of your business, identifying gaps, opportunities, and strategic priorities.' },
      { step: '02', title: 'Strategy Formulation', copy: 'We develop a comprehensive strategy with clear objectives, initiatives, and success metrics.' },
      { step: '03', title: 'Implementation Planning', copy: 'We create detailed execution plans, assign ownership, and set governance structures for accountability.' },
      { step: '04', title: 'Execution & Coaching', copy: 'We guide implementation, coach leaders, and ensure sustainable adoption of new ways of working.' }
    ],
    faqs: [
      { q: 'What industries do you specialize in?', a: 'We serve technology, healthcare, finance, manufacturing, retail, and professional services with deep domain expertise in each.' },
      { q: 'How is your consultancy different from others?', a: 'We combine strategic thinking with hands-on execution support, ensuring recommendations are actionable and results-driven.' },
      { q: 'Do you work with C-suite executives?', a: 'Yes, we regularly engage with CEOs, CTOs, and leadership teams on strategic initiatives and transformation programs.' }
    ],
    related: ['digital-marketing', 'ai-project-management', 'hr-consultancy'],
    heroStats: [
      { value: '30%', label: 'Efficiency Gain' },
      { value: '50%', label: 'Faster Decisions' },
      { value: '25%', label: 'Revenue Growth' },
      { value: '200+', label: 'Engagements' }
    ]
  },
  {
    id: 'hr-consultancy',
    title: 'HR & Recruitment Solutions',
    icon: FiUsers,
    summary: 'End-to-end talent acquisition, workforce planning, and HR process optimization for high-growth organizations.',
    longDescription: 'Attract, retain, and develop top talent with our comprehensive HR and recruitment solutions. We help organizations build high-performing teams through strategic talent acquisition, workforce planning, and HR process optimization. From executive search to employer branding, we deliver the talent strategy your business needs to thrive in competitive markets. Our data-driven approach ensures every hire adds measurable value to your organization.',
    items: ['Talent Acquisition', 'Executive Search', 'Employer Branding', 'Workforce Planning', 'HR Process Design', 'Onboarding Programs'],
    features: [
      'AI-powered candidate sourcing and screening',
      'Executive search for C-suite and leadership roles',
      'Employer brand strategy and talent marketing',
      'Competency-based interview frameworks',
      'Onboarding and early talent development programs',
      'HR analytics and workforce planning dashboards'
    ],
    outcomes: [
      '40% reduction in time-to-hire',
      '25% improvement in candidate quality scores',
      '90% retention rate for placed candidates',
      'Streamlined HR processes saving 15+ hours weekly'
    ],
    process: [
      { step: '01', title: 'Talent Needs Analysis', copy: 'We assess your talent gaps, define role requirements, and build candidate personas aligned with your culture.' },
      { step: '02', title: 'Sourcing & Screening', copy: 'We deploy multi-channel sourcing strategies and rigorous screening to identify top candidates.' },
      { step: '03', title: 'Assessment & Selection', copy: 'We conduct structured interviews, technical assessments, and cultural fit evaluations to ensure quality hires.' },
      { step: '04', title: 'Onboarding & Integration', copy: 'We support smooth transitions with onboarding programs and 90-day performance tracking.' }
    ],
    faqs: [
      { q: 'What types of roles do you recruit for?', a: 'We cover all levels from individual contributors to C-suite executives, with deep expertise in technology, AI, and business roles.' },
      { q: 'How do you ensure cultural fit?', a: 'We use psychometric assessments, structured interviews, and team interactions to ensure alignment with your values and work style.' },
      { q: 'What is your typical recruitment timeline?', a: 'Standard roles: 2-4 weeks. Executive searches: 6-12 weeks. We provide weekly progress updates throughout.' }
    ],
    related: ['business-consultancy', 'ai-project-management', 'digital-marketing'],
    heroStats: [
      { value: '40%', label: 'Faster Hiring' },
      { value: '25%', label: 'Better Quality' },
      { value: '90%', label: 'Retention Rate' },
      { value: '15+', label: 'Hrs Saved Weekly' }
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: FiLayers,
    summary: 'Native and cross-platform mobile applications built for performance, user engagement, and enterprise integration.',
    longDescription: 'Transform your business with powerful mobile experiences. We design and develop native iOS, Android, and cross-platform applications that deliver exceptional user experiences while integrating seamlessly with your enterprise systems. From consumer-facing apps to internal workforce tools, our mobile solutions are built with scalability, security, and performance in mind. We use modern frameworks like React Native and Flutter to deliver quality across platforms with faster time-to-market.',
    items: ['iOS & Android Apps', 'React Native', 'Flutter Development', 'App Store Deployment', 'Mobile UX Design', 'Enterprise Integration'],
    features: [
      'Native iOS (Swift) and Android (Kotlin) development',
      'Cross-platform apps with React Native and Flutter',
      'Offline-first architecture with sync capabilities',
      'Enterprise SSO and security compliance (SOC 2, GDPR)',
      'Push notifications and real-time features',
      'App store optimization and deployment support'
    ],
    outcomes: [
      '4.8+ average app store ratings',
      '10x faster feature delivery with cross-platform',
      '99.9% app uptime with robust backend',
      'Seamless integration with 50+ enterprise systems'
    ],
    process: [
      { step: '01', title: 'Product Strategy', copy: 'We define your app vision, user journeys, feature roadmap, and platform strategy aligned with business goals.' },
      { step: '02', title: 'Design & Prototype', copy: 'We create interactive prototypes, conduct usability testing, and refine the design before development begins.' },
      { step: '03', title: 'Development & QA', copy: 'We build the app using Agile sprints, conduct rigorous testing, and provide regular builds for feedback.' },
      { step: '04', title: 'Launch & Grow', copy: 'We handle app store submission, launch marketing, and ongoing updates based on user feedback and analytics.' }
    ],
    faqs: [
      { q: 'Native vs Cross-platform - which should we choose?', a: 'Native offers best performance and access to latest features. Cross-platform reduces cost and time to market. We recommend based on your specific requirements and timeline.' },
      { q: 'Do you provide ongoing app maintenance?', a: 'Yes, we offer comprehensive maintenance packages including bug fixes, OS updates, feature enhancements, and analytics review.' },
      { q: 'How do you handle app security?', a: 'We implement enterprise-grade security including encryption, secure authentication, code obfuscation, and regular security audits.' }
    ],
    related: ['website-development', 'ai-project-management', 'cloud-solutions'],
    heroStats: [
      { value: '4.8+', label: 'App Store Rating' },
      { value: '10x', label: 'Faster Delivery' },
      { value: '99.9%', label: 'Uptime' },
      { value: '50+', label: 'Integrations' }
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: FiCloud,
    summary: 'Scalable cloud architecture, migration, and managed infrastructure services for enterprise-grade reliability.',
    longDescription: 'Accelerate your digital transformation with robust cloud solutions. We design, migrate, and manage cloud infrastructure on AWS, Azure, and GCP that scales with your business while optimizing costs and ensuring security. From cloud-native application development to legacy migration, our certified architects deliver solutions that improve uptime, reduce operational overhead, and enable rapid innovation. We implement IaC, CI/CD pipelines, and observability stacks for modern cloud operations.',
    items: ['Cloud Migration', 'AWS & Azure', 'Cloud Architecture', 'DevOps & CI/CD', 'Cost Optimization', 'Disaster Recovery'],
    features: [
      'Multi-cloud and hybrid cloud architecture design',
      'Serverless and container orchestration (Kubernetes, ECS)',
      'Infrastructure as Code using Terraform and CloudFormation',
      'CI/CD pipeline automation with GitHub Actions and GitLab CI',
      'Cost optimization reducing cloud spend by 30-40%',
      '24/7 monitoring with SRE practices and incident response'
    ],
    outcomes: [
      '99.99% uptime with multi-region architecture',
      '40% reduction in infrastructure costs',
      '10x faster deployment with CI/CD automation',
      'Sub-minute recovery from incidents with disaster recovery'
    ],
    process: [
      { step: '01', title: 'Cloud Assessment', copy: 'We evaluate your current infrastructure, applications, and data to build a cloud adoption roadmap.' },
      { step: '02', title: 'Architecture Design', copy: 'We design secure, scalable cloud architecture with cost models, compliance frameworks, and migration paths.' },
      { step: '03', title: 'Migration & Deployment', copy: 'We execute migration with minimal downtime, validate performance, and optimize for production workloads.' },
      { step: '04', title: 'Optimize & Operate', copy: 'We provide ongoing management, cost optimization, security hardening, and architectural evolution.' }
    ],
    faqs: [
      { q: 'Which cloud platforms do you support?', a: 'We are certified partners with AWS, Microsoft Azure, and Google Cloud Platform, and can recommend the best fit for your use case.' },
      { q: 'How do you minimize migration downtime?', a: 'We use phased migration strategies with blue-green deployments, canary releases, and comprehensive rollback plans to ensure zero downtime.' },
      { q: 'What is your approach to cloud cost management?', a: 'We implement FinOps practices with automated cost alerts, right-sizing recommendations, and reserved instance optimization.' }
    ],
    related: ['website-development', 'cybersecurity', 'ai-project-management'],
    heroStats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '40%', label: 'Cost Savings' },
      { value: '10x', label: 'Faster Deployment' },
      { value: '<1', label: 'Min Recovery' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Services',
    icon: FiShield,
    summary: 'Comprehensive security assessments, compliance frameworks, and threat protection for enterprise environments.',
    longDescription: 'Protect your enterprise from evolving cyber threats with our comprehensive security services. We provide end-to-end cybersecurity solutions including risk assessment, compliance implementation, threat detection, and incident response. Our security experts help you build a robust security posture that protects your data, systems, and reputation while ensuring compliance with regulatory requirements. We combine advanced technology with human expertise to provide proactive threat protection.',
    items: ['Security Audits', 'Penetration Testing', 'Compliance (SOC 2, GDPR)', 'SIEM & Monitoring', 'Incident Response', 'Security Training'],
    features: [
      'Comprehensive vulnerability assessment and penetration testing',
      'SOC 2 Type II and GDPR compliance implementation',
      '24/7 Security Operations Center (SOC) with SIEM tools',
      'Zero Trust architecture and identity management',
      'Incident response planning and disaster recovery',
      'Security awareness training and phishing simulations'
    ],
    outcomes: [
      '95% reduction in security incidents',
      '100% compliance audit success rate',
      'Sub-15 minute mean time to detection',
      'Zero data breaches for enterprise clients'
    ],
    process: [
      { step: '01', title: 'Security Assessment', copy: 'We evaluate your current security posture, identify vulnerabilities, and map compliance requirements.' },
      { step: '02', title: 'Architecture & Planning', copy: 'We design a security framework with tools, policies, and controls aligned with industry standards.' },
      { step: '03', title: 'Implementation', copy: 'We deploy security tools, implement controls, and conduct training across your organization.' },
      { step: '04', title: 'Monitor & Improve', copy: 'We provide continuous monitoring, threat intelligence, and regular security assessments to stay ahead of risks.' }
    ],
    faqs: [
      { q: 'What compliance frameworks do you support?', a: 'We support SOC 2 Type II, GDPR, HIPAA, PCI DSS, ISO 27001, and custom regulatory requirements across industries.' },
      { q: 'How do you handle incident response?', a: 'We have a 24/7 SOC team with defined escalation procedures, forensic investigation capabilities, and post-incident analysis.' },
      { q: 'Can you work with our existing security tools?', a: 'Yes, we integrate with your existing security stack and can recommend enhancements or replacements based on your needs.' }
    ],
    related: ['cloud-solutions', 'ai-project-management', 'website-development'],
    heroStats: [
      { value: '95%', label: 'Less Incidents' },
      { value: '100%', label: 'Compliance Rate' },
      { value: '<15', label: 'Min Detection' },
      { value: 'Zero', label: 'Data Breaches' }
    ]
  }
];

export const aiProjectManagement = services[0];
export const websiteDevelopment = services[1];
export const digitalMarketing = services[2];
export const businessConsultancy = services[3];
export const hrConsultancy = services[4];
export const mobileAppDevelopment = services[5];
export const cloudSolutions = services[6];
export const cybersecurity = services[7];

export const industries = ['Healthcare', 'Education', 'Retail', 'Manufacturing', 'Banking', 'Finance', 'Insurance', 'Government', 'Telecommunications', 'IT', 'Real Estate', 'Construction', 'Hospitality', 'E-Commerce', 'Logistics', 'Film & Media', 'Automobile', 'Startups'];

const PROJECT_TYPES = ['AI Project Management', 'Website Development', 'Digital Marketing', 'Business Consultancy', 'HR & Recruitment', 'Mobile App Development', 'Cloud Solutions', 'Cybersecurity'];

const techOptions = [
  'OpenAI', 'React', 'Next.js', 'Vite', 'Node.js', 'Tailwind CSS', 'TypeScript', 'AWS', 'Azure', 'GCP',
  'Slack', 'Notion', 'Airtable', 'Jira', 'Docker', 'Kubernetes', 'GraphQL', 'MongoDB', 'PostgreSQL',
  'Python', 'TensorFlow', 'Flutter', 'React Native', 'Swift', 'Kotlin', 'Terraform', 'GitHub Actions'
];

export const industryOptions = [
  'SaaS', 'Healthcare', 'FinTech', 'E-Commerce', 'Education', 'Real Estate', 'Manufacturing',
  'Logistics', 'Government', 'Telecommunications', 'Automobile', 'Hospitality'
];

export const projects = [
  {
    id: 'ai-delivery-rollout',
    title: 'AI Delivery Rollout',
    slug: 'ai-delivery-rollout',
    client: 'Growth-Stage SaaS Team',
    industry: 'SaaS',
    type: 'AI Project Management',
    status: 'published',
    date: '2024-12-15',
    duration: '6 Months',
    teamSize: '12',
    tech: ['OpenAI', 'Slack', 'Notion', 'Airtable', 'Jira'],
    image: null,
    summary: 'Structured AI delivery framework that reduced launch delays by 35% and accelerated time-to-market through unified governance and real-time visibility.',
    challenge: 'The client had multiple AI initiatives running in silos causing missed deadlines, duplicate work, and stakeholder misalignment. Teams lacked visibility into dependencies and risk factors, leading to last-minute blockers and disappointing executives.',
    solution: 'We designed and implemented a unified AI delivery framework combining Agile sprints with MLOps workflows, real-time dashboards, and centralized stakeholder reporting. Teams gained end-to-end visibility into dependencies, model validation cycles, and regulatory compliance requirements.',
    results: '35% fewer launch delays, 60% reduction in project derailment risks, 98% stakeholder satisfaction rate, and scalable delivery frameworks now supporting ongoing AI programs across the organization.',
    metrics: [
      { label: 'Faster Delivery', value: '35%', trend: 'up' },
      { label: 'Risk Reduction', value: '60%', trend: 'up' },
      { label: 'Client Satisfaction', value: '98%', trend: 'up' },
      { label: 'Programs Scaled', value: '12', trend: 'up' }
    ],
    testimonial: {
      quote: 'Trimurya\'s project management transformed our AI rollout. We launched in half the expected time with zero major blockers.',
      author: 'Rajesh Kumar',
      role: 'CTO',
      company: 'Growth-Stage SaaS'
    },
    related: ['service-website-redesign', 'cloud-native-platform', 'enterprise-cyber-fortress']
  },
  {
    id: 'service-website-redesign',
    title: 'Service Website Redesign',
    slug: 'service-website-redesign',
    client: 'Business Consultancy',
    industry: 'Consulting',
    type: 'Website Development',
    status: 'published',
    date: '2024-11-08',
    duration: '4 Months',
    teamSize: '8',
    tech: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'WordPress'],
    image: null,
    summary: 'Complete digital presence overhaul that boosted traffic-to-lead conversion by 40% through UX-led design, conversion optimization, and enterprise-grade performance.',
    challenge: 'The client\'s legacy website was slow, not mobile-responsive, and failing to convert visitors. Organic search rankings were declining, and the site couldn\'t handle traffic spikes during campaign periods.',
    solution: 'We built a custom React/Next.js website with headless CMS integration, implementing mobile-first responsive design, Core Web Vitals optimization, SEO technical foundation, and conversion-focused UX patterns.',
    results: '40% traffic-to-lead growth, 35% increase in organic search traffic, 50% higher mobile conversion rates, and 99.9% uptime even during peak traffic events.',
    metrics: [
      { label: 'Traffic Growth', value: '35%', trend: 'up' },
      { label: 'Conversion Lift', value: '40%', trend: 'up' },
      { label: 'Mobile Users', value: '50%', trend: 'up' },
      { label: 'Uptime SLA', value: '99.9%', trend: 'neutral' }
    ],
    testimonial: {
      quote: 'The team delivered a stunning, blazing-fast website that perfectly captures our brand. Their attention to detail is unmatched.',
      author: 'Neha Gupta',
      role: 'CEO',
      company: 'StartupVista'
    },
    related: ['ai-delivery-rollout', 'digital-growth-engine', 'enterprise-cyber-fortress']
  },
  {
    id: 'digital-growth-engine',
    title: 'Digital Growth Engine',
    slug: 'digital-growth-engine',
    client: 'FinTech Innovations',
    industry: 'FinTech',
    type: 'Digital Marketing',
    status: 'published',
    date: '2024-10-20',
    duration: '8 Months',
    teamSize: '6',
    tech: ['Google Ads', 'LinkedIn Ads', 'HubSpot', 'SEO', 'Analytics', 'Python'],
    image: null,
    summary: 'Full-funnel marketing strategy that delivered 200% more qualified leads and 3x ROI through multi-channel campaign orchestration and data-driven optimization.',
    challenge: 'The client struggled with low-quality leads, high customer acquisition costs, and fragmented marketing efforts across channels with no unified measurement framework.',
    solution: 'We built an integrated marketing stack with SEO technical optimization, multi-channel paid media management, marketing automation via HubSpot, and comprehensive analytics dashboards tied to business KPIs.',
    results: '200% increase in qualified leads, 45% reduction in cost-per-acquisition, 3x ROI on paid media spend, and top 3 organic rankings for 80% of target keywords.',
    metrics: [
      { label: 'Leads Generated', value: '200%', trend: 'up' },
      { label: 'ROI', value: '3x', trend: 'up' },
      { label: 'CPA Reduction', value: '45%', trend: 'up' },
      { label: 'Organic Rank', value: 'Top 3', trend: 'neutral' }
    ],
    testimonial: {
      quote: 'Our pipeline has never been healthier. Trimurya doesn\'t just run campaigns—they engineer measurable revenue growth.',
      author: 'Priya Sharma',
      role: 'VP of Product',
      company: 'FinTech Innovations'
    },
    related: ['service-website-redesign', 'ai-delivery-rollout', 'hr-transformation-program']
  },
  {
    id: 'digital-transformation-blueprint',
    title: 'Digital Transformation Blueprint',
    slug: 'digital-transformation-blueprint',
    client: 'Manufacturing Enterprise',
    industry: 'Manufacturing',
    type: 'Business Consultancy',
    status: 'published',
    date: '2024-09-05',
    duration: '10 Months',
    teamSize: '10',
    tech: ['AWS', 'Tableau', 'Power BI', 'Jira', 'Miro', 'Figma'],
    image: null,
    summary: 'Enterprise-wide digital transformation program achieving 30% operational efficiency improvement, 50% faster decision cycles, and sustained revenue growth.',
    challenge: 'Outdated legacy systems, siloed data, slow approval cycles, and resistance to change were hampering growth. The client needed a pragmatic transformation roadmap that didn\'t disrupt operations.',
    solution: 'We conducted comprehensive diagnostics, built a phased transformation roadmap, implemented new governance structures, deployed cloud infrastructure, and coached leadership teams through change management.',
    results: '30% improvement in operational efficiency, 50% faster decision-making cycles, 25% revenue growth through new digital capabilities, and stronger organizational agility.',
    metrics: [
      { label: 'Efficiency Gain', value: '30%', trend: 'up' },
      { label: 'Faster Decisions', value: '50%', trend: 'up' },
      { label: 'Revenue Growth', value: '25%', trend: 'up' },
      { label: 'Programs Delivered', value: '6', trend: 'up' }
    ],
    testimonial: {
      quote: 'They combined strategic thinking with hands-on execution support. Recommendations are always actionable and results-driven.',
      author: 'Vikram Reddy',
      role: 'Operations Director',
      company: 'Manufacturing Enterprise'
    },
    related: ['cloud-native-platform', 'ai-delivery-rollout', 'enterprise-cyber-fortress']
  },
  {
    id: 'hr-transformation-program',
    title: 'HR Transformation Program',
    slug: 'hr-transformation-program',
    client: 'HealthTech Solutions',
    industry: 'Healthcare',
    type: 'HR & Recruitment',
    status: 'published',
    date: '2024-08-12',
    duration: '5 Months',
    teamSize: '7',
    tech: ['LinkedIn Recruiter', 'Workday', 'Slack', 'Notion', 'Tableau', 'Zoom'],
    image: null,
    summary: 'Talent strategy overhaul that cut time-to-hire by 40%, improved candidate quality by 25%, and achieved 90% retention rate for all placed candidates.',
    challenge: 'Unstructured hiring processes, inconsistent interview standards, and high turnover among new hires were increasing costs and undermining team morale.',
    solution: 'We redesigned the talent lifecycle with competency-based frameworks, AI-powered sourcing tools, structured interview protocols, and comprehensive onboarding programs with 90-day performance tracking.',
    results: '40% reduction in time-to-hire, 25% improvement in candidate quality scores, 90% retention rate for placed candidates, and streamlined HR processes saving 15+ hours weekly.',
    metrics: [
      { label: 'Faster Hiring', value: '40%', trend: 'up' },
      { label: 'Quality Score', value: '25%', trend: 'up' },
      { label: 'Retention Rate', value: '90%', trend: 'up' },
      { label: 'Hrs Saved', value: '15+', trend: 'up' }
    ],
    testimonial: {
      quote: 'Trimurya helped us build a world-class talent acquisition engine. Our hiring velocity doubled while quality improved significantly.',
      author: 'Arun Patel',
      role: 'Head of Talent',
      company: 'HealthTech Solutions'
    },
    related: ['digital-growth-engine', 'digital-transformation-blueprint', 'service-website-redesign']
  },
  {
    id: 'retail-mobile-experience',
    title: 'Retail Mobile Experience',
    slug: 'retail-mobile-experience',
    client: 'RetailMax Inc',
    industry: 'E-Commerce',
    type: 'Mobile App Development',
    status: 'published',
    date: '2024-07-01',
    duration: '7 Months',
    teamSize: '14',
    tech: ['Flutter', 'React Native', 'AWS', 'Firebase', 'GraphQL', 'Stripe'],
    image: null,
    summary: 'Cross-platform retail application achieving 4.8+ App Store rating, 99.9% uptime, and seamless integration with 50+ enterprise systems.',
    challenge: 'The client needed a unified mobile experience across iOS and Android that could handle seasonal traffic spikes, integrate with legacy ERP systems, and provide offline capabilities for in-store staff.',
    solution: 'We built a Flutter-based cross-platform app with offline-first architecture, real-time inventory sync, enterprise SSO, push notifications, and deep integrations with payment, logistics, and CRM systems.',
    results: '4.8+ average App Store rating, 10x faster feature delivery, 99.9% app uptime, and seamless integration with 50+ enterprise systems for unified operations.',
    metrics: [
      { label: 'App Rating', value: '4.8+', trend: 'up' },
      { label: 'Uptime', value: '99.9%', trend: 'neutral' },
      { label: 'Delivery Speed', value: '10x', trend: 'up' },
      { label: 'Integrations', value: '50+', trend: 'up' }
    ],
    testimonial: {
      quote: 'The mobile app transformed our customer engagement. App downloads surged, and checkout completion rates improved dramatically.',
      author: 'Sneha Kapoor',
      role: 'Digital Director',
      company: 'RetailMax Inc'
    },
    related: ['service-website-redesign', 'cloud-native-platform', 'ai-delivery-rollout']
  },
  {
    id: 'cloud-native-platform',
    title: 'Cloud-Native Platform Migration',
    slug: 'cloud-native-platform',
    client: 'EduTech Global',
    industry: 'Education',
    type: 'Cloud Solutions',
    status: 'published',
    date: '2024-06-18',
    duration: '9 Months',
    teamSize: '11',
    tech: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus'],
    image: null,
    summary: 'Multi-cloud migration achieving 99.99% uptime, 40% infrastructure cost reduction, and 10x faster deployment velocity with full observability.',
    challenge: 'Fragmented legacy infrastructure on-premises made scaling unpredictable during enrollment peaks. Manual deployments caused outages, and cloud costs were spiraling without visibility.',
    solution: 'We architected a multi-cloud solution using AWS with Kubernetes orchestration, Terraform IaC, automated CI/CD pipelines, and comprehensive observability with Prometheus and Grafana.',
    results: '99.99% uptime, 40% reduction in infrastructure costs, 10x faster deployment with CI/CD automation, and sub-minute incident recovery via disaster recovery protocols.',
    metrics: [
      { label: 'Uptime SLA', value: '99.99%', trend: 'up' },
      { label: 'Cost Savings', value: '40%', trend: 'up' },
      { label: 'Deployment Speed', value: '10x', trend: 'up' },
      { label: 'Recovery Time', value: '<1 min', trend: 'up' }
    ],
    testimonial: {
      quote: 'Our platform now handles peak enrollment periods without breaking a sweat. The cloud foundation Trimurya built is rock solid.',
      author: 'Vikram Reddy',
      role: 'CTO',
      company: 'EduTech Global'
    },
    related: ['enterprise-cyber-fortress', 'digital-transformation-blueprint', 'retail-mobile-experience']
  },
  {
    id: 'enterprise-cyber-fortress',
    title: 'Enterprise Cyber Fortress',
    slug: 'enterprise-cyber-fortress',
    client: 'Financial Services Corp',
    industry: 'Banking',
    type: 'Cybersecurity',
    status: 'published',
    date: '2024-05-22',
    duration: '6 Months',
    teamSize: '9',
    tech: ['SOC 2', 'Zero Trust', 'SIEM', 'AWS', 'Python', 'Splunk', 'CrowdStrike'],
    image: null,
    summary: 'Comprehensive security overhaul achieving 95% fewer incidents, zero data breaches, 100% compliance audit success, and sub-15-minute threat detection.',
    challenge: 'The client faced increasing ransomware threats, regulatory pressure, and fragmented security tools with no unified visibility. Previous audits revealed critical gaps in incident response and access controls.',
    solution: 'We implemented Zero Trust architecture, deployed a 24/7 SOC with SIEM, conducted penetration testing, established incident response playbooks, and delivered comprehensive security awareness training.',
    results: '95% reduction in security incidents, 100% compliance audit success rate, sub-15 minute mean time to detection, and zero data breaches throughout the engagement.',
    metrics: [
      { label: 'Security Incidents', value: '-95%', trend: 'up' },
      { label: 'Compliance Rate', value: '100%', trend: 'neutral' },
      { label: 'Detection Time', value: '<15 min', trend: 'up' },
      { label: 'Data Breaches', value: '0', trend: 'neutral' }
    ],
    testimonial: {
      quote: 'Trimurya gave us enterprise-grade security posture and compliance confidence. Their SOC team is world-class.',
      author: 'Amit Singh',
      role: 'CISO',
      company: 'Financial Services Corp'
    },
    related: ['cloud-native-platform', 'digital-transformation-blueprint', 'service-website-redesign']
  }
];

export const projectStats = [
  { value: '62+', label: 'Enterprise Projects' },
  { value: '18', label: 'Industries Served' },
  { value: '98%', label: 'Client Retention' },
  { value: '4.9/5', label: 'Project Rating' },
  { value: '200+', label: 'Team Members Engaged' },
  { value: '14', label: 'Countries Reached' }
];

export const projectTypes = PROJECT_TYPES;
export const projectTechOptions = techOptions;

function serviceSlug(title) {
  return title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export const navDropdowns = {
  Services: services.map((service) => ({ label: service.title, href: `/services/${serviceSlug(service.title)}`, icon: service.icon })),
  Industries: industries.slice(0, 8).map((label, index) => ({ label, href: '/industries', icon: [FiActivity, FiCloud, FiCpu, FiShield, FiTarget, FiTrendingUp, FiFilm, FiHeadphones][index] })),
  Projects: [
    { label: 'AI Delivery Rollout', href: '/projects', icon: FiCpu },
    { label: 'Service Website Redesign', href: '/projects', icon: FiGlobe },
    { label: 'Digital Growth Engine', href: '/projects', icon: FiTrendingUp },
    { label: 'Digital Transformation', href: '/projects', icon: FiBriefcase },
    { label: 'HR Transformation', href: '/projects', icon: FiUsers },
    { label: 'Retail Mobile App', href: '/projects', icon: FiLayers }
  ]
};

export const jobs = [
  { title: 'AI Solutions Consultant', location: 'Hybrid', type: 'Full Time', department: 'Artificial Intelligence' },
  { title: 'MERN Stack Developer', location: 'Remote', type: 'Full Time', department: 'Software Development' },
  { title: 'Recruitment Executive', location: 'Onsite', type: 'Full Time', department: 'HR Consultancy' },
  { title: 'Customer Support Team Lead', location: 'Onsite', type: 'Full Time', department: 'BPO Operations' }
];

export const values = [
  { title: 'Clear Planning', icon: FiActivity, copy: 'We turn ideas into structured roadmaps that keep work focused and manageable.' },
  { title: 'Reliable Delivery', icon: FiShield, copy: 'Your project stays visible, organized, and moving with practical accountability.' },
  { title: 'Fast Websites', icon: FiTarget, copy: 'We build polished sites that load quickly, look sharp, and support business growth.' },
  { title: 'Hands-On Support', icon: FiBriefcase, copy: 'You get a dedicated partner who helps from kickoff through launch and beyond.' }
];
