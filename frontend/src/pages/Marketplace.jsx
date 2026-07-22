import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const marketplaceFeatures = [
  {
    id: 'ai-data',
    title: 'AI Data',
    description: 'Top-tier off-the-shelf structured training data for scaling AI systems.',
    image: 'https://data.macgence.com/_next/image?url=%2Fimg%2Fcircle3.png&w=256&q=75'
  },
  {
    id: 'build-ai',
    title: 'Build AI',
    description: 'Accelerate time to market with rapid prototyping of generic models.',
    image: 'https://data.macgence.com/_next/image?url=%2Fimg%2Fcircle2.png&w=256&q=75'
  },
  {
    id: 'solutions',
    title: 'Solutions',
    description: 'Access clean, ethical and relevant datasets for faster development.',
    image: 'https://data.macgence.com/_next/image?url=%2Fimg%2Fcircle1.png&w=256&q=75'
  }
];

export default function Marketplace() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950/95 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.36em] text-slate-300">AI Marketplace</p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Rapid AI development with compliant datasets for scalable model deployment.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Top-tier structured training data and development tools designed to accelerate your AI roadmap without compromise.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="#ai-data" variant="ghost">AI Data</Button>
              <Button to="#build-ai">Get Started</Button>
            </div>
          </div>
          <div className="relative max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%)]" />
            <div className="relative space-y-6">
              {marketplaceFeatures.map((feature) => (
                <article key={feature.id} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-xl">
                  <img src={feature.image} alt={feature.title} className="h-16 w-16 rounded-3xl border border-white/10 object-cover" />
                  <div>
                    <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
                    <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="AI Marketplace" title="Built for teams that need fast, compliant AI data and product-ready tooling" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <section id="ai-data" className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-xl font-black text-white">AI Data</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">Structured, compliant datasets for training models across enterprise scenarios.</p>
          </section>
          <section id="build-ai" className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-xl font-black text-white">Build AI</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">Ship prototypes faster with ready-to-use datasets and tooling that moves your team forward.</p>
          </section>
          <section id="solutions" className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-xl font-black text-white">Solutions</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">Practical AI solutions for data ingestion, model training, and enterprise delivery.</p>
          </section>
          <section id="products" className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-xl font-black text-white">Products</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">Browse products designed to speed development and reduce risk across your AI stack.</p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-xl font-black text-white">Pricing</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">Explore pricing plans for data services and AI tooling.</p>
            <a href="https://data.macgence.com/prices" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-secondary/90">View Pricing</a>
          </section>
          <section id="our-company" className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl">
            <h3 className="text-xl font-black text-white">Our Company</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">Enterprise-grade support, compliance, and delivery for modern AI teams.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
