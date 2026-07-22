import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import ContactForm from '../components/ContactForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  const items = [
    { icon: FiPhone, label: 'Phone / WhatsApp', value: '+91 00000 00000' },
    { icon: FiMail, label: 'Email', value: 'info@trimuryacorporation.in' },
    { icon: FiMapPin, label: 'Office Address', value: 'India • Global Delivery' },
    { icon: FiClock, label: 'Business Hours', value: 'Mon - Sat, 10:00 AM - 7:00 PM' }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeader eyebrow="Get in Touch" title="Enterprise-grade support for AI programs and web development" copy="Send your brief and we’ll respond with a tailored plan, delivery timeline, and next-step proposal." />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-2xl font-black text-primary dark:text-white">Talk to our delivery team</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Whether you need AI program guidance or a modern website, we’ll help you scope the work with clear next steps and the right execution plan.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary dark:bg-secondary/20">
                    <Icon size={20} />
                  </div>
                  <p className="mt-4 font-black text-primary dark:text-white">{item.label}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.value}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl dark:border-slate-800">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-secondary/80">Partner experience</p>
            <p className="mt-4 text-lg font-black">Your website and AI delivery setup should feel strategic, polished, and ready for growth.</p>
            <p className="mt-4 text-sm leading-7 text-secondary/70">We provide practical execution support, transparent communication, and a backend-ready approach so your launch is smooth and reliable.</p>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-950">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
