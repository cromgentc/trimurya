import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const template = fs.readFileSync(path.join(pagesDir, 'AiProjectManagement.jsx'), 'utf8');

const configs = [
  { name: 'WebsiteDevelopment', slug: 'website-development', heroImport: "import webDevHero from '../assets/website-development-hero.svg';", heroVar: 'webDevHero', heroPath: "website-development-hero.svg", badge: 'Web Excellence', cta1: "Start Your Web Journey", cta1Class: "", heroAlt: 'Website Development Dashboard', dashboardCopy: 'Track milestones, dependencies, and team velocity from a single unified command center designed for web delivery.', benefitsCopy: 'We deliver measurable results through structured website development services that de-risks initiatives and accelerates outcomes.', techCopy: 'We work with industry-leading platforms to deliver scalable, fast, and secure web experiences.' },
  { name: 'DigitalMarketing', slug: 'digital-marketing', heroImport: "import digitalMarketingHero from '../assets/digital-marketing-hero.svg';", heroVar: 'digitalMarketingHero', heroPath: "digital-marketing-hero.svg", badge: 'Growth Engine', cta1: "Start Your Growth Journey", cta1Class: "", heroAlt: 'Digital Marketing Dashboard', dashboardCopy: 'Track milestones, dependencies, and team velocity from a single unified command center designed for marketing delivery.', benefitsCopy: 'We deliver measurable results through structured digital marketing services that de-risks initiatives and accelerates outcomes.', techCopy: 'We work with industry-leading platforms to deliver scalable, measurable, and secure digital marketing.' },
  { name: 'BusinessConsultancy', slug: 'business-consultancy', heroImport: "import businessConsultancyHero from '../assets/business-consultancy-hero.svg';", heroVar: 'businessConsultancyHero', heroPath: "business-consultancy-hero.svg", badge: 'Strategy Partner', cta1: "Start Your Strategy Journey", cta1Class: "", heroAlt: 'Business Consultancy Dashboard', dashboardCopy: 'Track milestones, dependencies, and team velocity from a single unified command center designed for strategy delivery.', benefitsCopy: 'We deliver measurable results through structured business consultancy services that de-risks initiatives and accelerates outcomes.', techCopy: 'We work with industry-leading platforms to deliver scalable, strategic, and secure consultancy.' },
  { name: 'HrConsultancy', slug: 'hr-consultancy', heroImport: "import hrConsultancyHero from '../assets/hr-consultancy-hero.svg';", heroVar: 'hrConsultancyHero', heroPath: "hr-consultancy-hero.svg", badge: 'Talent Partner', cta1: "Start Your Talent Journey", cta1Class: "", heroAlt: 'HR Consultancy Dashboard', dashboardCopy: 'Track milestones, dependencies, and team velocity from a single unified command center designed for talent delivery.', benefitsCopy: 'We deliver measurable results through structured HR consultancy services that de-risks initiatives and accelerates outcomes.', techCopy: 'We work with industry-leading platforms to deliver scalable, people-first, and secure HR solutions.' },
  { name: 'MobileAppDevelopment', slug: 'mobile-app-development', heroImport: "import mobileAppHero from '../assets/mobile-app-development-hero.svg';", heroVar: 'mobileAppHero', heroPath: "mobile-app-development-hero.svg", badge: 'Mobile Excellence', cta1: "Start Your Mobile Journey", cta1Class: "", heroAlt: 'Mobile App Development Dashboard', dashboardCopy: 'Track milestones, dependencies, and team velocity from a single unified command center designed for mobile delivery.', benefitsCopy: 'We deliver measurable results through structured mobile app development services that de-risks initiatives and accelerates outcomes.', techCopy: 'We work with industry-leading platforms to deliver scalable, performant, and secure mobile experiences.' },
  { name: 'CloudSolutions', slug: 'cloud-solutions', heroImport: "import cloudSolutionsHero from '../assets/cloud-solutions-hero.svg';", heroVar: 'cloudSolutionsHero', heroPath: "cloud-solutions-hero.svg", badge: 'Cloud Partner', cta1: "Start Your Cloud Journey", cta1Class: "", heroAlt: 'Cloud Solutions Dashboard', dashboardCopy: 'Track milestones, dependencies, and team velocity from a single unified command center designed for cloud delivery.', benefitsCopy: 'We deliver measurable results through structured cloud solutions services that de-risks initiatives and accelerates outcomes.', techCopy: 'We work with industry-leading platforms to deliver scalable, reliable, and secure cloud infrastructure.' },
  { name: 'Cybersecurity', slug: 'cybersecurity', heroImport: "import cybersecurityHero from '../assets/cybersecurity-hero.svg';", heroVar: 'cybersecurityHero', heroPath: "cybersecurity-hero.svg", badge: 'Security Partner', cta1: "Start Your Security Journey", cta1Class: "", heroAlt: 'Cybersecurity Services Dashboard', dashboardCopy: 'Track milestones, dependencies, and team velocity from a single unified command center designed for security delivery.', benefitsCopy: 'We deliver measurable results through structured cybersecurity services that de-risks initiatives and accelerates outcomes.', techCopy: 'We work with industry-leading platforms to deliver scalable, compliant, and secure cybersecurity.' },
];

for (const cfg of configs) {
  let content = template;
  const componentName = cfg.name;

  content = content.replace("export default function AiProjectManagement()", `export default function ${componentName}()`);
  content = content.replace("const slug = 'ai-project-management';", `const slug = '${cfg.slug}';`);
  content = content.replace(/import aiPmHero from '\.\.\/assets\/ai-project-management-hero\.svg';/, cfg.heroImport);
  content = content.replace(/const aiPmHero = require.*?;/, '');
  content = content.replace(/aiPmHero/, cfg.heroVar);
  content = content.replace('AI-Powered Service', cfg.badge);
  content = content.replace('Start Your AI Journey', cfg.cta1);
  content = content.replace('AI Project Management Dashboard', cfg.heroAlt);

  // Find and replace the dashboard section copy
  content = content.replace('Real-time visibility into your AI program', `Real-time visibility into your ${cfg.slug.replace('-', ' ')} program`);
  content = content.replace('Track milestones, dependencies, and team velocity from a single unified command center designed for AI delivery.', cfg.dashboardCopy);

  // Find and replace benefits copy
  content = content.replace('We deliver measurable results through structured AI project management that de-risks initiatives and accelerates outcomes.', cfg.benefitsCopy);

  // Find and replace tech copy
  content = content.replace('We work with industry-leading platforms to deliver scalable, observable, and secure AI delivery.', cfg.techCopy);

  fs.writeFileSync(path.join(pagesDir, `${componentName}.jsx`), content, 'utf8');
  console.log(`Created ${componentName}.jsx`);
}

console.log('All service pages generated successfully.');
