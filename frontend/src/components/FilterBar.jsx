import { FiSearch } from 'react-icons/fi';

export default function FilterBar({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  industryFilter,
  setIndustryFilter,
  sortOrder,
  setSortOrder,
  types,
  industries
}) {
  return (
    <div className="mb-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900" data-aos="fade-up">
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Search Projects</label>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, client, or technology..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-medium text-primary placeholder:text-slate-400 transition focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Type</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm font-medium text-primary transition focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="">All Types</option>
            {types.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="lg:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Industry</label>
          <select
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm font-medium text-primary transition focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="">All Industries</option>
            {industries.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>

        <div className="lg:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Sort By</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm font-medium text-primary transition focus:border-secondary focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="impact">Highest Impact</option>
            <option value="team">Largest Team</option>
          </select>
        </div>

        <div className="lg:col-span-2 flex items-end">
          <button
            onClick={() => { setSearch(''); setTypeFilter(''); setIndustryFilter(''); setSortOrder('newest'); }}
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-bold text-slate-600 transition hover:border-secondary hover:text-secondary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
