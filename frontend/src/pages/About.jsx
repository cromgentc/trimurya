import SectionHeader from '../components/SectionHeader.jsx';
import { values } from '../data/siteData.js';
import heroBackground from '../assets/ai-hero.png';

export default function About() {
  const timeline = ['Company foundation and consulting launch', 'Technology and software division expanded', 'Recruitment, HR and BPO operations scaled', 'AI solutions and enterprise automation practice launched'];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader eyebrow="About Us" title="A Multi-Service Enterprise Partner For Modern Businesses" copy="Trimurya Corporation aligns business strategy, technology delivery, people operations, and customer experience into one integrated growth platform." />
      <div className="grid gap-6 lg:grid-cols-3">
        {['Mission', 'Vision', 'Leadership'].map((item) => (
          <div key={item} className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-900">
            <h3 className="text-xl font-black">{item}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">To deliver secure, scalable, and measurable enterprise solutions with professional teams, transparent processes, and practical innovation.</p>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl p-8 text-white shadow-xl">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${heroBackground})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative">
            <h3 className="text-2xl font-black">Core Values</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-black">{value.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{value.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900">
          <h3 className="text-2xl font-black">Company Timeline</h3>
          <div className="mt-6 grid gap-4">{timeline.map((event, index) => <div key={event} className="flex gap-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary/10 font-black text-secondary dark:bg-secondary/20">{index + 1}</span><p className="pt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{event}</p></div>)}</div>
        </div>
      </div>
    </section>
  );
}
