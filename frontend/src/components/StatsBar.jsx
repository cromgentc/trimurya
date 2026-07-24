import { FiTrendingUp, FiUsers, FiBriefcase, FiAward, FiGlobe, FiActivity } from 'react-icons/fi';

export default function StatsBar() {
  const stats = [
    { icon: FiBriefcase, value: '62+', label: 'Enterprise Projects' },
    { icon: FiGlobe, value: '18', label: 'Industries Served' },
    { icon: FiActivity, value: '99%', label: 'On-Time Delivery' },
    { icon: FiAward, value: '4.9/5', label: 'Client Rating' },
    { icon: FiUsers, value: '200+', label: 'Team Engaged' },
    { icon: FiTrendingUp, value: '14', label: 'Markets Reached' }
  ];

  return (
    <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6" data-aos="fade-up">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div key={i} className="rounded-[24px] border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary dark:bg-secondary/20">
              <Icon size={24} />
            </div>
            <p className="text-2xl font-black text-primary dark:text-white">{stat.value}</p>
            <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
