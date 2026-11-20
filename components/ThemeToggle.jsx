'use client';

import { useTheme } from '@/hooks/useTheme';
import { MoonIcon, SunIcon } from './Icons';

/**
 * Switches between the dark (default) and light theme.
 * `showLabel` renders a full-width row with text, used inside the mobile menu.
 */
export default function ThemeToggle({ showLabel = false, className = '' }) {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      className={`theme-toggle ${showLabel ? 'theme-toggle--row' : 'nav__iconbtn'} ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? <SunIcon size={22} /> : <MoonIcon size={22} />}
      </span>
      {showLabel && <span>{isDark ? 'Light theme' : 'Dark theme'}</span>}
    </button>
  );
}
