import { FiBriefcase, FiLayers, FiShield, FiUsers } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader.jsx';
import { values } from '../data/siteData.js';
import heroBackground from '../assets/ai-hero.png';

const enterpriseCards = [
  {
    title: 'Integrated Delivery',
    description: 'Cross-functional teams, systems, and workflows aligned to your business priorities.',
    icon: FiLayers
  },
  {
    title: 'Security & Governance',
    description: 'Enterprise-grade compliance and operational oversight built into every project.',
    icon: FiShield
  },
  {
    title: 'People-Led Growth',
    description: 'Experienced teams that help your business navigate change with confidence.',
    icon: FiUsers
  }
];

export default function About() {
  const timeline = [
    'Company foundation and consulting launch',
    'Technology and software division expanded',
    'Recruitment, HR and BPO operations scaled',
    'AI solutions and enterprise automation practice launched'
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader
        eyebrow="About Us"
        title="A Multi-Service Enterprise Partner For Modern Businesses"
        copy="Trimurya Corporation aligns business strategy, technology delivery, people operations, and customer experience into one integrated growth platform."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {['Mission', 'Vision', 'Leadership'].map((item) => (
          <div key={item} className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary transition group-hover:bg-secondary group-hover:text-white">
              <FiBriefcase size={24} />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{item}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              To deliver secure, scalable, and measurable enterprise solutions with professional teams, transparent processes, and practical innovation.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${heroBackground})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="relative p-10 text-white">
            <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Enterprise DNA
            </span>
            <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">Core values that power every partnership</h3>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200">
              Our work combines strategic foresight, proven delivery methods, and a human-centered approach to help modern businesses achieve measurable results.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <p className="font-black text-white">{value.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{value.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-2xl dark:bg-slate-900">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-secondary">Company Timeline</p>
              <h3 className="mt-3 text-3xl font-black text-slate-900 dark:text-white">Enterprise growth in action</h3>
            </div>
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary dark:bg-secondary/20">
              Since 2018
            </span>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-3 top-0 h-full w-0.5 rounded-full bg-slate-200/70 dark:bg-slate-700" />
            {timeline.map((event, index) => (
              <div key={event} className="relative mb-8 last:mb-0">
                <div className="absolute -left-2 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                  {index + 1}
                </div>
                <div className="ml-12 rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {enterpriseCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-secondary/10 text-secondary dark:bg-secondary/20">
                <Icon size={24} />
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white">{card.title}</h4>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
