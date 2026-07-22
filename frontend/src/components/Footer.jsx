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
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="relative mx-auto max-w-[1180px] px-4 pb-8 pt-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.15fr]">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-lg font-black text-accent">{column.title}</h3>
              <div className="grid gap-1">
                {column.links.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-lg font-black text-accent">Contact Us</h3>
            <div className="grid gap-3 text-[15px] font-semibold leading-7 text-slate-200">
              <a className="inline-flex items-center gap-2 transition hover:text-accent" href="mailto:info@trimuryacorporation.com">
                <FiMail className="text-accent" /> help@trimuryacorporation.com
              </a>
              <a className="inline-flex items-center gap-2 transition hover:text-accent" href="tel:+910000000000">
                <FiPhone className="text-accent" /> +91 00000 00000
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.08 }}
                    className="text-accent transition hover:text-white"
                  >
                    <Icon size={22} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-secondary/20 pt-7 text-sm font-semibold text-slate-200 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Trimurya Corporation. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink to="/cookie-policy">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="focus-ring absolute bottom-12 right-5 hidden text-accent transition hover:-translate-y-1 hover:text-white lg:inline-flex"
        aria-label="Back to top"
      >
        <FiArrowUp size={34} />
      </button>
    </footer>
  );
}
