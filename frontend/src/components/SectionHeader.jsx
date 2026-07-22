
export default function SectionHeader({ eyebrow, title, copy, centered = true }) {
  return (
    <div className={`mb-8 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`} data-aos="fade-up">
      {eyebrow && <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">{eyebrow}</p>}
      <h2 className="text-2xl font-black leading-tight text-primary dark:text-white md:text-4xl">{title}</h2>
      {copy && <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">{copy}</p>}
    </div>
  );
}
