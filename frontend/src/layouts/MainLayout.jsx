import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data/siteData.js';
import Button from '../components/Button.jsx';
import AIChatAssistant from '../components/AIChatAssistant.jsx';
import TextLogo from '../components/TextLogo.jsx';
import Footer from '../components/Footer.jsx';

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-primary dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 lg:px-8">
          <TextLogo compact />
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-bold transition ${isActive ? 'bg-secondary/10 text-secondary dark:bg-slate-950/50' : 'text-slate-600 hover:text-secondary dark:text-slate-300'}`}>
                {link.label.toUpperCase()}
              </NavLink>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button to="/marketplace" variant="ghost" className="hidden md:inline-flex">Marketplace</Button>
            <Button to="/contact" className="hidden md:inline-flex">Get Started</Button>
            <button className="focus-ring p-3 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open navigation">
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-bold text-slate-700 dark:text-slate-200">
                {link.label.toUpperCase()}
              </NavLink>
            ))}
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <AIChatAssistant />
    </div>
  );
}
