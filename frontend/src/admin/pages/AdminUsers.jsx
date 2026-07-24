import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiEdit2, FiTrash2, FiX, FiSave, FiMail, FiUser, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import api from '../../services/api.js';

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/users');
      setUsers(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const openEdit = (user) => {
    setEditing(user._id);
    setForm({
      name: user.name || '',
      email: user.email || '',
      role: user.role || 'candidate',
      verified: user.verified || false,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      await api.put(`/users/${editing}`, form);
      await fetchUsers();
      setEditing(null);
      setForm({});
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update user');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/users/${deleteId}`);
      await fetchUsers();
      setDeleteId(null);
    } catch {
      alert('Failed to delete user');
    }
  };

  const filtered = users.filter((u) =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase()) ||
    u.role?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black text-primary dark:text-white">User Management</h2>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="w-64 rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm font-medium text-primary placeholder:text-slate-400 transition focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Name</th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email</th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Role</th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Verified</th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {loading ? (
                <tr><td colSpan={5} className="p-8 text-center text-sm text-slate-500">Loading...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={5} className="p-8 text-center text-sm text-slate-500">No users found</td></tr>
              ) : (
                filtered.map((user, i) => (
                  <tr key={user._id || i} className="transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-sm font-black text-secondary dark:bg-secondary/20">
                          {user.name?.charAt(0)}
                        </div>
                        <span className="font-medium text-primary dark:text-white">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-slate-600 dark:text-slate-300">{user.email}</td>
                    <td className="px-6 py-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary dark:bg-primary/20 dark:text-white">{user.role}</span>
                    </td>
                    <td className="px-6 py-3">
                      {user.verified ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"><FiCheckCircle size={14} /> Verified</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400"><FiXCircle size={14} /> Unverified</span>
                      )}
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEdit(user)} className="rounded-lg p-2 text-slate-500 transition hover:bg-secondary/10 hover:text-secondary">
                          <FiEdit2 size={16} />
                        </button>
                        <button onClick={() => setDeleteId(user._id)} className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600">
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {editing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-lg rounded-[24px] border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-black text-primary dark:text-white">Edit User</h3>
                <button onClick={() => { setEditing(null); setForm({}); setError(''); }} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><FiX size={20} /></button>
              </div>

              {error && <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-400">{error}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Name</label>
                  <div className="relative"><FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-medium text-primary focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email</label>
                  <div className="relative"><FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-medium text-primary focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Role</label>
                  <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm font-medium text-primary focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                    <option value="client">Client</option>
                    <option value="candidate">Candidate</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="verified" checked={form.verified} onChange={(e) => setForm({ ...form, verified: e.target.checked })} className="h-4 w-4 rounded border-slate-300 text-secondary focus:ring-secondary" />
                  <label htmlFor="verified" className="text-sm font-medium text-primary dark:text-white">Verified</label>
                </div>

                <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <button type="button" onClick={() => { setEditing(null); setForm({}); setError(''); }} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 dark:border-slate-700 dark:text-slate-300">Cancel</button>
                  <button type="submit" disabled={saving} className="rounded-xl bg-secondary px-5 py-2.5 text-sm font-bold text-white hover:bg-secondary/80 disabled:opacity-60">Save Changes</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {deleteId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-md rounded-[24px] border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-black text-primary dark:text-white">Delete User</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Are you sure? This will permanently delete the user account.</p>
              <div className="mt-6 flex justify-end gap-3">
                <button onClick={() => setDeleteId(null)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 dark:border-slate-700 dark:text-slate-300">Cancel</button>
                <button onClick={handleDelete} className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-red-700">Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
