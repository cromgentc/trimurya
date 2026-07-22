import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowUp,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTwitter,
  FiYoutube
} from 'react-icons/fi';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import TextLogo from './TextLogo.jsx';

const footerColumns = [
  {
    title: 'AI & Technology',
    links: ['Artificial Intelligence', 'Software Development', 'Web Development', 'Mobile Apps', 'Cloud Solutions']
  },
  {
    title: 'Business Services',
    links: ['Business Consultancy', 'Digital Marketing', 'HR Consultancy', 'Recruitment', 'Call Center']
  },
  {
    title: 'Industries',
    links: ['Healthcare', 'Education', 'Telecommunications', 'E-Commerce', 'Film & Media']
  },
  {
    title: 'Company',
    links: ['About', 'Services', 'Projects', 'Careers', 'Blog', 'Contact']
  }
];

const socialLinks = [
  { label: 'LinkedIn', icon: FiLinkedin, href: '#' },
  { label: 'Twitter X', icon: FiTwitter, href: '#' },
  { label: 'Facebook', icon: FaFacebookF, href: '#' },
  { label: 'YouTube', icon: FiYoutube, href: '#' },
  { label: 'Instagram', icon: FiInstagram, href: '#' },
  { label: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/910000000000' },
  { label: 'GitHub', icon: FiGithub, href: '#' }
];

function slug(label) {
  const map = {
    About: '/about',
    Services: '/services',
    Projects: '/projects',
    Careers: '/careers',
    Blog: '/blog',
    Contact: '/contact'
  };
  return map[label] || '/services';
}

function FooterLink({ children, to }) {
  return (
    <Link
      to={to || slug(children)}
      className="w-fit text-[15px] font-semibold leading-7 text-slate-200 transition hover:text-accent"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <TextLogo />
            <p className="mt-4 max-w-md text-sm text-slate-300">
              Trimurya builds enterprise-grade data and AI products that power
              reliable, compliant, and scalable AI systems. Partner with us to
              accelerate your AI roadmap and access production-ready datasets.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:help@trimuryacorporation.in" className="inline-flex items-center gap-2 rounded-full bg-slate-800/40 px-3 py-2 text-sm font-semibold hover:bg-slate-800">
                <FiMail />
                help@trimuryacorporation.in
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.06 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/40 text-slate-100 hover:bg-accent"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase text-slate-300">Products</h4>
            <div className="grid gap-2">
              {['Data Marketplace', 'Annotation Tool', 'Transcription', 'RLHF Tool'].map((t) => (
                <FooterLink key={t}>{t}</FooterLink>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase text-slate-300">Solutions</h4>
            <div className="grid gap-2">
              {['Conversational AI', 'Computer Vision', 'Healthcare', 'Auto & ADAS'].map((t) => (
                <FooterLink key={t}>{t}</FooterLink>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-4 text-sm font-bold uppercase text-slate-300">Newsletter</h4>
            <p className="text-sm text-slate-300">Get product updates, dataset launches, and enterprise AI insights.</p>
            <form className="mt-4 flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Your business email"
                className="flex-1 rounded-md border border-slate-700 bg-slate-900/30 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="rounded-md bg-accent px-4 py-2 text-sm font-bold text-slate-900">Subscribe</button>
            </form>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <FiPhone />
              <span>+91 00000 00000</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <p>© 2026 Trimurya Corporation. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms-of-service">Terms</FooterLink>
              <FooterLink to="/cookie-policy">Cookie Policy</FooterLink>
            </div>
          </div>
        </div>

      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="focus-ring fixed bottom-8 right-6 inline-flex items-center justify-center rounded-full bg-accent p-3 text-slate-900 shadow-lg hover:translate-y-[-2px]"
        aria-label="Back to top"
      >
        <FiArrowUp size={20} />
      </button>
    </footer>
  );
}
