import SectionHeader from '../components/SectionHeader.jsx';

export default function Dashboard() {
  const modules = ['Analytics', 'Manage Users', 'Manage Services', 'Manage Industries', 'Manage Projects', 'Manage Blogs', 'Manage Careers', 'Manage Jobs', 'Manage Testimonials', 'Manage Clients', 'Manage Team', 'Media Library', 'Role Permissions', 'Activity Logs'];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader eyebrow="Admin Panel" title="Enterprise Management Dashboard" copy="A scalable command center for admin, client, and candidate workflows." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{modules.map((module) => <div key={module} className="rounded-2xl bg-white p-6 font-black shadow-sm dark:bg-slate-900">{module}</div>)}</div>
    </section>
  );
}
