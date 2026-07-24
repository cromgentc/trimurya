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

for (const [filename, slug] of Object.entries(serviceSlugs)) {
  const filePath = path.join(pagesDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove old siteData import
  content = content.replace(/import \{ services \} from '\.\.\/data\/siteData\.js';\n/, '');

  // Add new imports
  if (!content.includes("import { fetchPublished, fetchPublishedBySlug } from '../services/contentApi.js';")) {
    content = content.replace("import SectionHeader from '../components/SectionHeader.jsx';",
      "import { fetchPublished, fetchPublishedBySlug } from '../services/contentApi.js';\nimport { resolveIcon } from '../utils/iconResolver.js';\nimport SectionHeader from '../components/SectionHeader.jsx';");
  }
  if (!content.includes("import { useState, useEffect } from 'react';")) {
    content = content.replace("import { Link } from 'react-router-dom';",
      "import { useState, useEffect } from 'react';\nimport { Link } from 'react-router-dom';");
  }

  // Replace static service lookup
  const oldServiceLookup = content.match(/const service = services\.find\(\(s\) => s\.id === '[^']+'\);/);
  if (oldServiceLookup) {
    content = content.replace(oldServiceLookup[0], `const slug = '${slug}';\n  const [service, setService] = useState(null);\n  const [relatedServices, setRelatedServices] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    let cancelled = false;\n    fetchPublishedBySlug('services', slug).then((data) => {\n      if (cancelled) return;\n      setService(data);\n      if (data?.related?.length) {\n        Promise.all(data.related.map((rSlug) => fetchPublishedBySlug('services', rSlug)))\n          .then((results) => { if (!cancelled) setRelatedServices(results.filter(Boolean)); });\n      }\n      setLoading(false);\n    }).catch(() => setLoading(false));\n    return () => { cancelled = true; };\n  }, [slug]);`);
  }

  // Add loading/not-found states
  const oldExport = content.match(/export default function \w+\(\) \{/);
  if (oldExport && !content.includes('if (loading) {')) {
    content = content.replace(oldExport[0], `${oldExport[0]}\n  if (loading) {\n    return (\n      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">\n        <div className="h-96 rounded-[28px] bg-slate-100 dark:bg-slate-800 animate-pulse" />\n      </div>\n    );\n  }\n\n  if (!service) {\n    return (\n      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">\n        <p className="text-center text-slate-600 dark:text-slate-300">Service not found</p>\n      </div>\n    );\n  }`);
  }

  // Replace benefit icons
  content = content.replace(/const BenefitIcon = benefit\.icon;/g, 'const BenefitIcon = resolveIcon(benefit.icon);');

  // Replace related services lookup
  content = content.replace(
    /const relatedService = services\.find\(\(s\) => serviceSlug\(s\.title\) === slug\);\s*if \(!relatedService\) return null;\s*return <ServiceCard key=\{relatedService\.title\} service=\{relatedService\} index=\{0\} \/>;/g,
    'return <ServiceCard key={rs.slug || rs._id} service={rs} index={0} />;'
  );
  content = content.replace(
    /service\.related\.map\(\(slug\) => \{[\s\S]*?\}\)/,
    'relatedServices.map((rs) => ('
  );

  // Remove serviceSlug function
  content = content.replace(/function serviceSlug\(title\) \{\s*return title\.toLowerCase\(\)\.replace\(\/&amp;\/g, 'and'\)\.replace\(\/[^a-z0-9]+\/g, '-'\)\.replace\(\/^-|-\$\/g, ''\);\s*\}\n/, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filename}`);
}

console.log('All service pages updated successfully.');
