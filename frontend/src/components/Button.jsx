import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-secondary text-white shadow-lg shadow-secondary/25 hover:bg-secondary/80',
  ghost: 'border border-slate-300/80 bg-white/70 text-primary hover:border-secondary hover:text-secondary dark:border-slate-700 dark:bg-slate-900/60 dark:text-white',
  dark: 'bg-primary text-white hover:bg-slate-800 dark:bg-white dark:text-primary'
};

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`;
  if (to) return <Link className={classes} to={to} {...props}>{children}</Link>;
  if (href) return <a className={classes} href={href} {...props}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}
