import SectionHeader from '../components/SectionHeader.jsx';
import { industries } from '../data/siteData.js';

export default function Industries() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader eyebrow="Industries" title="Industry-Specific Consulting And Delivery" copy="Domain-aware execution for regulated enterprises, fast-growth companies, public sector teams, and creative industries." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map((industry) => <div key={industry} className="rounded-2xl border border-slate-200 bg-white p-6 font-black shadow-sm transition hover:-translate-y-1 hover:shadow-premium dark:border-slate-800 dark:bg-slate-900">{industry}</div>)}</div>
    </section>
  );
}
