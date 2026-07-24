import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '..', 'src', 'pages');

const serviceSlugs = {
  'AiProjectManagement.jsx': 'ai-project-management',
  'WebsiteDevelopment.jsx': 'website-development',
  'DigitalMarketing.jsx': 'digital-marketing',
  'BusinessConsultancy.jsx': 'business-consultancy',
  'HrConsultancy.jsx': 'hr-consultancy',
  'MobileAppDevelopment.jsx': 'mobile-app-development',
  'CloudSolutions.jsx': 'cloud-solutions',
  'Cybersecurity.jsx': 'cybersecurity'
};

const dynamicHook = (slug) => `
  if (loading) {
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
`;

for (const [filename, slug] of Object.entries(serviceSlugs)) {
  const filePath = path.join(pagesDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the bad dynamic hook code that was inserted outside the component
  content = content.replace(
    /const slug = '[^']+';\n  const \[service, setService\] = useState\(null\);\n  const \[relatedServices, setRelatedServices\] = useState\(\[\]\);\n  const \[loading, setLoading\] = useState\(true\);\n\n  useEffect\(\(\) => \{\n    let cancelled = false;\n    fetchPublishedBySlug\('services', slug\)\.then\(\(data\) => \{\n      if \(cancelled\) return;\n      setService\(data\);\n      if \(data\?\.related\?\.length\) \{\n        Promise\.all\(data\.related\.map\(\(rSlug\) => fetchPublishedBySlug\('services', rSlug\)\)\)\n          \.then\(\(results\) => \{ if \(!cancelled\) setRelatedServices\(results\.filter\(Boolean\)\); \}\);\n      \}\n      setLoading\(false\);\n    \}\)\.catch\(\(\) => setLoading\(false\)\);\n    return \(\) => \{ cancelled = true; \};\n  \}, \[slug\]\);\n\n/g,
    ''
  );

  // Remove the broken serviceSlug function that was mangled
  content = content.replace(/function serviceSlug\(title\) \{\n  return title\.toLowerCase\(\)\.replace\(\/\&amp;\/g, 'and'\)\.replace\(\/[^\na-z0-9]+\/g, '-'\)\.replace\(\/^-|-\$\/g, ''\);\n\}\n\n/g, '');

  // Remove duplicate export default if script created one
  const exportMatches = [...content.matchAll(/export default function \w+\(\) \{/g)];
  if (exportMatches.length > 1) {
    // Keep the first one, remove subsequent ones
    let count = 0;
    content = content.replace(/export default function \w+\(\) \{/g, (match) => {
      count++;
      return count === 1 ? match : '';
    });
  }

  // Remove any duplicate closing braces
  const openBraces = (content.match(/\{/g) || []).length;
  const closeBraces = (content.match(/\}/g) || []).length;
  if (closeBraces > openBraces) {
    let diff = closeBraces - openBraces;
    content = content.replace(/\}\n$/, '').replace(/\}\n$/, '').replace(/\}\n$/, '').replace(/\}\n$/, '').replace(/\}\n$/, '');
    while (diff > 0 && content.endsWith('}')) {
      content = content.slice(0, -1).trimEnd() + '\n';
      diff--;
    }
  }

  // Remove any stray loading checks outside the component that might have been duplicated
  // We'll add the proper one inside the component below

  // Find the component function and add proper state/loading checks
  const componentMatch = content.match(/export default function (\w+)\(\) \{/);
  if (componentMatch && !content.includes('const slug = ')) {
    const stateCode = `
const slug = '${slug}';
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

    content = content.replace(/export default function (\w+)\(\) \{/, (match) => {
      return stateCode + 'export default function ' + componentMatch[1] + '() {';
    });

    // Add loading/not-found at the beginning of the return
    content = content.replace(/return \(\n\s*<div className="min-h-screen"/, (match) => {
      return dynamicHook(slug) + '    return (<div className="min-h-screen"';
    });
  }

  // Replace benefit icons
  content = content.replace(/const BenefitIcon = benefit\.icon;/g, 'const BenefitIcon = resolveIcon(benefit.icon);');

  // Replace related services mapping
  if (content.includes('service.related.map')) {
    content = content.replace(
      /service\.related\.map\(\(slug\) => \{\s*const relatedService = services\.find\(\(s\) => serviceSlug\(s\.title\) === slug\)\s*if \(!relatedService\) return null;\s*return <ServiceCard key=\{relatedService\.title\} service=\{relatedService\} index=\{0\} \/>;\s*\}\)/,
      'relatedServices.map((rs) => (<ServiceCard key={rs.slug || rs._id} service={rs} index={0} />))'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${filename}`);
}

console.log('All service pages fixed successfully.');
