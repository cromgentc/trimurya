import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiFileText, FiUsers, FiLayers, FiGrid, FiShoppingBag, FiBarChart2 } from 'react-icons/fi';
import api from '../../services/api.js';

const statsConfig = [
  { key: 'projects', label: 'Projects', icon: FiBriefcase, color: 'from-violet-500 to-indigo-600' },
  { key: 'services', label: 'Services', icon: FiLayers, color: 'from-emerald-500 to-teal-600' },
  { key: 'blogs', label: 'Blogs', icon: FiFileText, color: 'from-orange-500 to-rose-500' },
  { key: 'industries', label: 'Industries', icon: FiGrid, color: 'from-blue-500 to-indigo-600' },
  { key: 'users', label: 'Users', icon: FiUsers, color: 'from-pink-500 to-red-500' },
  { key: 'stats', label: 'Stats', icon: FiBarChart2, color: 'from-cyan-500 to-blue-600' },
];

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [summaryRes, projectsRes, blogsRes, servicesRes] = await Promise.all([
          api.get('/dashboard/summary'),
          api.get('/projects'),
          api.get('/blogs'),
          api.get('/services'),
        ]);

        setData(summaryRes.data.data);
        setRecent([
          ...(projectsRes.data.data || []).slice(0, 3).map((i) => ({ ...i, _type: 'Project' })),
          ...(blogsRes.data.data || []).slice(0, 3).map((i) => ({ ...i, _type: 'Blog' })),
          ...(servicesRes.data.data || []).slice(0, 3).map((i) => ({ ...i, _type: 'Service' })),
        ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
      } catch (error) {
        console.error('Dashboard error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-secondary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {statsConfig.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-sm`}>
                <Icon size={20} />
              </div>
              <p className="mt-4 text-3xl font-black text-primary dark:text-white">{data?.[stat.key] || 0}</p>
              <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <h3 className="text-lg font-black text-primary dark:text-white">Recent Activity</h3>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {recent.length === 0 ? (
            <p className="p-6 text-sm text-slate-500 dark:text-slate-400">No recent activity</p>
          ) : (
            recent.map((item, i) => (
              <div key={item._id || i} className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary dark:bg-secondary/20">
                    {item._type}
                  </span>
                  <span className="text-sm font-medium text-primary dark:text-white">{item.title}</span>
                </div>
                <span className="text-xs text-slate-400">
                  {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
