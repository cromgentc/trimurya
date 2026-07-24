import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '..', 'src', 'pages');

const fixes = [
  { file: 'AiProjectManagement.jsx', slug: 'ai-project-management', hero: 'aiPmHero', heroPath: 'ai-project-management-hero.svg', icons: ['FiArrowLeft', 'FiCheckCircle', 'FiHome', 'FiCpu', 'FiChevronRight', 'FiHelpCircle', 'FiArrowRight', 'FiUsers', 'FiTrendingUp', 'FiShield', 'FiTarget', 'FiStar', 'FiMail'] },
  { file: 'WebsiteDevelopment.jsx', slug: 'website-development', hero: 'webDevHero', heroPath: 'website-development-hero.svg', icons: ['FiArrowLeft', 'FiCheckCircle', 'FiHome', 'FiGlobe', 'FiChevronRight', 'FiHelpCircle', 'FiArrowRight', 'FiUsers', 'FiTrendingUp', 'FiShield', 'FiTarget', 'FiStar'] },
  { file: 'DigitalMarketing.jsx', slug: 'digital-marketing', hero: 'digitalMarketingHero', heroPath: 'digital-marketing-hero.svg', icons: ['FiArrowLeft', 'FiCheckCircle', 'FiHome', 'FiTrendingUp', 'FiChevronRight', 'FiHelpCircle', 'FiArrowRight', 'FiUsers', 'FiTarget', 'FiShield', 'FiMail'] },
  { file: 'BusinessConsultancy.jsx', slug: 'business-consultancy', hero: 'businessConsultancyHero', heroPath: 'business-consultancy-hero.svg', icons: ['FiArrowLeft', 'FiCheckCircle', 'FiHome', 'FiBriefcase', 'FiChevronRight', 'FiHelpCircle', 'FiArrowRight', 'FiUsers', 'FiTrendingUp', 'FiShield', 'FiTarget'] },
  { file: 'HrConsultancy.jsx', slug: 'hr-consultancy', hero: 'hrConsultancyHero', heroPath: 'hr-consultancy-hero.svg', icons: ['FiArrowLeft', 'FiCheckCircle', 'FiHome', 'FiUsers', 'FiChevronRight', 'FiHelpCircle', 'FiArrowRight', 'FiTrendingUp', 'FiShield', 'FiTarget', 'FiMail'] },
  { file: 'MobileAppDevelopment.jsx', slug: 'mobile-app-development', hero: 'mobileAppHero', heroPath: 'mobile-app-development-hero.svg', icons: ['FiArrowLeft', 'FiCheckCircle', 'FiHome', 'FiSmartphone', 'FiChevronRight', 'FiHelpCircle', 'FiArrowRight', 'FiUsers', 'FiTrendingUp', 'FiShield', 'FiTarget'] },
  { file: 'CloudSolutions.jsx', slug: 'cloud-solutions', hero: 'cloudSolutionsHero', heroPath: 'cloud-solutions-hero.svg', icons: ['FiArrowLeft', 'FiCheckCircle', 'FiHome', 'FiCloud', 'FiChevronRight', 'FiHelpCircle', 'FiArrowRight', 'FiUsers', 'FiTrendingUp', 'FiShield', 'FiTarget'] },
  { file: 'Cybersecurity.jsx', slug: 'cybersecurity', hero: 'cybersecurityHero', heroPath: 'cybersecurity-hero.svg', icons: ['FiArrowLeft', 'FiCheckCircle', 'FiHome', 'FiShield', 'FiChevronRight', 'FiHelpCircle', 'FiArrowRight', 'FiUsers', 'FiTrendingUp', 'FiTarget', 'FiMail'] },
];

for (const fix of fixes) {
  const filePath = path.join(pagesDir, fix.file);
  let content = fs.readFileSync(filePath, 'utf8');

  const componentName = fix.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

  // Remove all imported icons that we don't need
  const neededIcons = ['FiArrowLeft', 'FiChevronRight', 'FiArrowRight', 'FiUsers', 'FiTrendingUp', 'FiTarget', 'FiShield', 'FiHelpCircle', 'FiMail', 'FiStar', ...fix.icons.filter(i => !['FiArrowLeft', 'FiChevronRight', 'FiArrowRight', 'FiUsers', 'FiTrendingUp', 'FiTarget', 'FiShield', 'FiHelpCircle', 'FiMail', 'FiStar'].includes(i))];
  const importBlock = `import {\n  ${neededIcons.join(',\n  ')}\n} from 'react-icons/fi';`;

  content = content.replace(/import \{[\s\S]*?\} from 'react-icons\/fi';/, importBlock);

  // Remove bad serviceSlug function
  content = content.replace(/function serviceSlug\(title\) \{\n  return title\.toLowerCase\(\)\.replace.*?\n\}\n\n/g, '');

  // Remove duplicate fetchPublished import if present
  content = content.replace("import { fetchPublished } from '../services/contentApi.js';\n", '');

  // Remove duplicate related services map and fix it
  content = content.replace(
    /\{service\.related\.map\(\(slug\) => \{\s*const relatedService = services\.find.*?\}\s*\}\)/,
    '{relatedServices.map((rs) => (<ServiceCard key={rs.slug || rs._id} service={rs} index={0} />))}'
  );
  content = content.replace(
    /\{relatedServices\.map\(\(rs\) => \(\)\}/,
    '{relatedServices.map((rs) => (<ServiceCard key={rs.slug || rs._id} service={rs} index={0} />))}'
  );

  // Build the dynamic hook block
  const dynamicHook = `
const ${fix.hero} = require('../assets/${fix.heroPath}');
const slug = '${fix.slug}';
  const [service, setService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchPublishedBySlug('services', slug).then((data) => {
      if (cancelled) return;
      setService(data);
      if (data?.related?.length) {
        Promise.all(data.related.map((rSlug) => fetchPublishedBySlug('services', rSlug)))
          .then((results) => { if (!cancelled) setRelatedServices(results.filter(Boolean)); });
      }
      setLoading(false);
    }).catch(() => setLoading(false));
    return () => { cancelled = true; };
  }, [slug]);
`;

  // Insert the dynamic hook just before the component declaration
  content = content.replace(/export default function (\w+)\(\) \{/, (match) => {
    return dynamicHook + '\nexport default function ' + componentName + '() {';
  });

  // Remove duplicate loading checks that were inserted by previous scripts
  content = content.replace(/if \(loading\) \{\n    return \(\n      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">\n        <div className="h-96 rounded\[\[28px\]\] bg-slate-100 dark:bg-slate-800 animate-pulse" \/>\n      </div>\n    \);\n  \}\n\n  if \(!service\) \{\n    return \(\n      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">\n        <p className="text-center text-slate-600 dark:text-slate-300">Service not found<\/p>\n      <\/div>\n    \);\n  \}\n  \n  if \(loading\) \{\n    return \(\n      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">\n        <div className="h-96 rounded\[\[28px\]\] bg-slate-100 dark:bg-slate-800 animate-pulse" \/>\n      <\/div>\n    \);\n  \}\n\n  if \(!service\) \{\n    return \(\n      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">\n        <p className="text-center text-slate-600 dark:text-slate-300">Service not found<\/p>\n      <\/div>\n    \);\n  \}\n    return \(/, (match) => {
    return `  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="h-96 rounded-[28px] bg-slate-100 dark:bg-slate-800 animate-pulse" />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <p className="text-center text-slate-600 dark:text-slate-300">Service not found</p>
      </div>
    );
  }

    return (<div className="min-h-screen">`;
  });

  // Remove extra opening braces if any
  const openBraces = (content.match(/\{/g) || []).length;
  const closeBraces = (content.match(/\}/g) || []).length;
  while (closeBraces > openBraces + 5) {
    content = content.replace(/\}\n$/, '').trimEnd() + '\n';
    if (!content.endsWith('}')) break;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${fix.file}`);
}

console.log('All service pages fixed successfully.');
