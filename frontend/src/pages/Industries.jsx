import { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { fetchPublished } from '../services/contentApi.js';

export default function Industries() {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublished('industries').then((data) => {
      setIndustries(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader eyebrow="Industries" title="Industry-Specific Consulting And Delivery" copy="Domain-aware execution for regulated enterprises, fast-growth companies, public sector teams, and creative industries." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          [1,2,3,4,5,6,7,8].map((n) => <div key={n} className="h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />)
        ) : (
          industries.map((industry) => <div key={industry.slug || industry._id} className="rounded-2xl border border-slate-200 bg-white p-6 font-black shadow-sm transition hover:-translate-y-1 hover:shadow-premium dark:border-slate-800 dark:bg-slate-900">{industry.title}</div>)
        )}
      </div>
    </section>
  );
}
