import * as FiIcons from 'react-icons/fi';

export function resolveIcon(name) {
  if (!name || typeof name !== 'string') return null;
  return FiIcons[name] || null;
}
