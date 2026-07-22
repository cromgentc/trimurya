import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi';
import Button from '../components/Button.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { jobs } from '../data/siteData.js';

export default function Careers() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('q') || '');

  useEffect(() => {
    if (query) {
      setSearchParams({ q: query }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [query, setSearchParams]);

  const filtered = jobs.filter((job) => `${job.title} ${job.department}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader eyebrow="Careers" title="Find Your Next Enterprise Opportunity" copy="Search jobs, apply online, upload resume, and track candidate dashboard updates." />
      <SearchBar value={query} onChange={setQuery} placeholder="Search jobs by title or department" />
      <div className="mt-8 grid gap-5 md:grid-cols-2">{filtered.map((job) => <article key={job.title} className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900"><p className="text-sm font-bold text-secondary">{job.department}</p><h3 className="mt-2 text-xl font-black">{job.title}</h3><p className="mt-3 text-sm text-slate-500">{job.location} • {job.type}</p><Button className="mt-5"><FiUpload /> Apply Online</Button></article>)}</div>
    </section>
  );
}
