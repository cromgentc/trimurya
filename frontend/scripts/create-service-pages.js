import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const templatePath = path.join(pagesDir, 'AiProjectManagement.jsx');
const template = fs.readFileSync(templatePath, 'utf8');

const services = [
  { slug: 'website-development', hero: 'websiteDevHero', badge: 'Web Excellence', cta: 'Start Your Web Journey', heroAlt: 'Website Development Dashboard' },
  { slug: 'digital-marketing', hero: 'digitalMarketingHero', badge: 'Growth Engine', cta: 'Start Your Growth Journey', heroAlt: 'Digital Marketing Dashboard' },
  { slug: 'business-consultancy', hero: 'businessConsultancyHero', badge: 'Strategy Partner', cta: 'Start Your Strategy Journey', heroAlt: 'Business Consultancy Dashboard' },
  { slug: 'hr-consultancy', hero: 'hrConsultancyHero', badge: 'Talent Partner', cta: 'Start Your Talent Journey', heroAlt: 'HR Consultancy Dashboard' },
  { slug: 'mobile-app-development', hero: 'mobileAppHero', badge: 'Mobile Excellence', cta: 'Start Your Mobile Journey', heroAlt: 'Mobile App Development Dashboard' },
  { slug: 'cloud-solutions', hero: 'cloudSolutionsHero', badge: 'Cloud Partner', cta: 'Start Your Cloud Journey', heroAlt: 'Cloud Solutions Dashboard' },
  { slug: 'cybersecurity', hero: 'cybersecurityHero', badge: 'Security Partner', cta: 'Start Your Security Journey', heroAlt: 'Cybersecurity Services Dashboard' },
];

for (const s of services) {
  let content = template;
  const componentName = s.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page';
  const componentNameJSX = s.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

  content = content.replace("export default function AiProjectManagement()", `export default function ${componentNameJSX}()`);
  content = content.replace("const slug = 'ai-project-management';", `const slug = '${s.slug}';`);
  content = content.replace("import aiPmHero from '../assets/ai-project-management-hero.svg';", `import ${s.hero} from '../assets/${s.hero === 'websiteDevHero' ? 'website' : s.hero === 'digitalMarketingHero' ? 'digital' : s.hero === 'businessConsultancyHero' ? 'business' : s.hero === 'hrConsultancyHero' ? 'hr' : s.hero === 'mobileAppHero' ? 'mobile' : s.hero === 'cloudSolutionsHero' ? 'cloud' : 'cybersecurity'}-${s.slug === 'website-development' ? 'development' : s.slug === 'digital-marketing' ? 'marketing' : s.slug === 'business-consultancy' ? 'consultancy' : s.slug === 'hr-consultancy' ? 'hr' : s.slug === 'mobile-app-development' ? 'app' : s.slug === 'cloud-solutions' ? 'solutions' : 'security'}-hero.svg';`);
  content = content.replace('AI-Powered Service', s.badge);
  content = content.replace('Start Your AI Journey', s.cta);
  content = content.replace('AI Project Management Dashboard', s.heroAlt);
  content = content.replace('Real-time visibility into your AI program', `Real-time visibility into your ${s.slug.replace('-', ' ')} program`);
  content = content.replace('We deliver measurable results through structured AI project management that de-risks initiatives and accelerates outcomes.', `We deliver measurable results through structured ${s.slug.replace('-', ' ')} services that de-risks initiatives and accelerates outcomes.`);
  content = content.replace('We work with industry-leading platforms to deliver scalable, observable, and secure AI delivery.', `We work with industry-leading platforms to deliver scalable, observable, and secure ${s.slug.replace('-', ' ')} delivery.`);

  fs.writeFileSync(path.join(pagesDir, `${componentNameJSX}.jsx`), content, 'utf8');
  console.log(`Created ${componentNameJSX}.jsx`);
}

console.log('All service pages created from template.');
