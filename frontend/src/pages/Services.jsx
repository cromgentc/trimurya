import { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { fetchPublished } from '../services/contentApi.js';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublished('services').then((data) => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader eyebrow="Services" title="Our Services" copy="Explore our comprehensive enterprise solutions tailored to your business needs." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {loading ? (
          [1,2,3,4,5,6,7,8].map((n) => <div key={n} className="h-48 rounded-[28px] bg-slate-100 dark:bg-slate-800 animate-pulse" />)
        ) : (
          services.map((service, index) => (
            <ServiceCard key={service.slug || service._id} service={service} index={index} />
          ))
        )}
      </div>
    </section>
  );
}
