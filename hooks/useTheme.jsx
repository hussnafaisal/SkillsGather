'use client';

import { useSyncExternalStore } from 'react';

export const THEME_KEY = 'sg-theme';
const EVENT = 'sg-theme-change';
const THEME_COLORS = { dark: '#050d1f', light: '#eef4fc' };

// Runs before first paint (see app/layout.jsx) so the page never flashes the wrong theme.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

function readTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
}

function subscribe(callback) {
  const onStorage = (e) => {
    // Another tab changed the theme: follow it.
    if (e.key === THEME_KEY) {
      applyTheme(e.newValue === 'light' ? 'light' : 'dark');
      callback();
    }
  };
  window.addEventListener(EVENT, callback);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener('storage', onStorage);
  };
}

/** Returns [theme, toggleTheme]. Dark is the default; the choice is remembered in localStorage. */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'dark');

  const toggleTheme = () => {
    const next = readTheme() === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage can be blocked (private mode). The theme still changes for this visit.
    }
    window.dispatchEvent(new Event(EVENT));
  };

  return [theme, toggleTheme];
}
