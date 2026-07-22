import { FiAward, FiShield, FiStar } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/siteData.js';

const pillars = [
  { title: 'Strategic Delivery', copy: 'Clear milestones, governance, and regular progress reviews for every project.', icon: FiShield },
  { title: 'Designed for Growth', copy: 'Websites and AI programs that are built to scale with your business.', icon: FiAward },
  { title: 'Trusted Execution', copy: 'Proven delivery processes with real client accountability and fast onboarding.', icon: FiStar }
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader eyebrow="Services" title="Enterprise service delivery for AI and web experiences" copy="We help leadership teams move from intent to launch with practical delivery, polished digital presence, and backend-ready execution." />
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div key={pillar.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <Icon size={24} className="text-secondary" />
              <h3 className="mt-5 text-xl font-black text-primary dark:text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{pillar.copy}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950">
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
