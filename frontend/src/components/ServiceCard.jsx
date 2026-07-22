import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

function servicePath(title) {
  return `/services/${title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  const MotionLink = motion(Link);

  return (
    <MotionLink
      to={servicePath(service.title)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary dark:bg-secondary/20">
          <Icon size={24} />
        </span>
        <FiArrowUpRight className="text-slate-400 transition group-hover:text-accent" size={22} />
      </div>
      <h3 className="text-xl font-black text-primary dark:text-white">{service.title}</h3>
      <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.items.slice(0, 6).map((item) => (
          <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{item}</span>
        ))}
      </div>
    </MotionLink>
  );
}
