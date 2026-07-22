import { Link } from 'react-router-dom';
import logo from '../assets/trimurya-logo-vector.svg';

export default function TextLogo({ compact = false, className = '' }) {
  const sizeClass = compact ? 'w-[150px] sm:w-[190px] lg:w-[220px]' : 'w-[240px] sm:w-[320px]';

  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center ${sizeClass} ${className}`}
      aria-label="Trimurya Corporation home"
    >
      <img
        src={logo}
        alt="Trimurya Corporation - Create Preserve Transform"
        className="block h-auto w-full object-contain"
        decoding="async"
      />
    </Link>
  );
}
