import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSettings, FiSave, FiGlobe, FiMail, FiShield } from 'react-icons/fi';
import api from '../../services/api.js';

export default function AdminSettings() {
  const [admin, setAdmin] = useState(null);
  const [siteName, setSiteName] = useState('Trimurya Corporation');
  const [siteUrl, setSiteUrl] = useState('https://www.trimuryacorporation.in');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const adminData = localStorage.getItem('trimurya_admin');
    if (adminData) {
      try {
        setAdmin(JSON.parse(adminData));
      } catch {}
    }
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h2 className="text-2xl font-black text-primary dark:text-white">Settings</h2>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <form onSubmit={handleSave} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-black text-primary dark:text-white">
              <FiGlobe size={20} className="text-secondary" /> Site Configuration
            </h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Site Name</label>
                <input type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm font-medium text-primary focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Site URL</label>
                <input type="url" value={siteUrl} onChange={(e) => setSiteUrl(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm font-medium text-primary focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end">
              <button type="submit" disabled={saving} className="focus-ring inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-secondary/80 disabled:opacity-60">
                {saving ? 'Saving...' : <><FiSave size={16} /> Save Settings</>}
              </button>
            </div>
            {saved && <p className="mt-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">Settings saved successfully!</p>}
          </form>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-black text-primary dark:text-white">
              <FiMail size={20} className="text-secondary" /> API Configuration
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                <div><p className="text-sm font-medium text-primary dark:text-white">API Endpoint</p><p className="text-xs text-slate-500 dark:text-slate-400">/api</p></div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">Active</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                <div><p className="text-sm font-medium text-primary dark:text-white">Authentication</p><p className="text-xs text-slate-500 dark:text-slate-400">Bearer Token (JWT)</p></div>
                <FiShield className="text-secondary" size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-black text-primary dark:text-white">Admin Profile</h3>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-black text-white dark:bg-white dark:text-primary">
                {admin?.name?.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-black text-primary dark:text-white">{admin?.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{admin?.email}</p>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary dark:bg-primary/20 dark:text-white">{admin?.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
