import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { services } from '../data/siteData.js';

function serviceSlug(title) {
  return title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ServiceDetail() {
  const { serviceSlug: currentSlug } = useParams();
  const service = services.find((item) => serviceSlug(item.title) === currentSlug);

  if (!service) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h1 className="text-4xl font-black text-primary">Service not found</h1>
        <Link to="/services" className="mt-8 inline-flex font-bold text-secondary hover:text-accent">
          Back to services
        </Link>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
      <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:text-accent">
        <FiArrowLeft /> Back to services
      </Link>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
          <Icon size={30} />
        </div>
        <h1 className="mt-6 text-4xl font-black leading-tight text-primary md:text-5xl">{service.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{service.summary}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-sm font-bold text-slate-700">
              <FiCheckCircle className="shrink-0 text-accent" size={20} />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-secondary px-8 font-bold text-white shadow-[0_16px_36px_rgba(255,122,18,0.22)] transition hover:-translate-y-1 hover:bg-accent"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-8 font-bold text-slate-700 transition hover:border-secondary hover:text-secondary"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
