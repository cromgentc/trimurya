import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/siteData.js';

export default function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader eyebrow="Projects" title="Project Gallery, Portfolio And Case Studies" />
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <article key={project.title} className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-slate-900"><div className="h-44 bg-gradient-to-br from-primary via-secondary to-accent" /><div className="p-7"><p className="text-sm font-black uppercase tracking-widest text-secondary">{project.type}</p><h3 className="mt-3 text-2xl font-black">{project.title}</h3><p className="mt-3 text-slate-600 dark:text-slate-300">Client: {project.client}</p><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Technology Used: {project.tech}</p><p className="mt-5 rounded-xl bg-secondary/10 px-4 py-3 text-sm font-black text-secondary dark:bg-secondary/20">{project.impact}</p></div></article>)}</div>
    </section>
  );
}
