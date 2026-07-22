import { motion } from 'framer-motion';
import { FiCpu, FiGlobe, FiShield, FiUsers } from 'react-icons/fi';

const nodes = [
  { label: 'AI', icon: FiCpu, pos: 'left-8 top-10' },
  { label: 'Talent', icon: FiUsers, pos: 'right-8 top-20' },
  { label: 'Cloud', icon: FiGlobe, pos: 'left-16 bottom-16' },
  { label: 'Secure', icon: FiShield, pos: 'right-14 bottom-10' }
];

export default function HeroVisual() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/40 bg-primary p-6 shadow-premium enterprise-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(242,178,24,0.28),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(255,122,18,0.24),transparent_35%)]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 34, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 48, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
      />
      <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-white/20 bg-white/10 text-center backdrop-blur-xl">
        <div>
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-secondary">
            <FiCpu size={28} />
          </div>
          <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-white">Enterprise AI</p>
          <p className="mt-1 text-xs text-secondary/80">Technology + Talent</p>
        </div>
      </div>
      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 + index, ease: 'easeInOut' }}
            className={`absolute ${node.pos} glass flex items-center gap-3 rounded-2xl px-4 py-3 text-white`}
          >
            <Icon size={20} />
            <span className="text-sm font-bold">{node.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
