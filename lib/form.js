import { FORM } from './config';

export const INTENT_ORDER = ['swap', 'volunteer', 'help'];
const PREFERENCES = ['swap', 'volunteer'];

/** Accepts only swap | volunteer | help. Anything else means "no initial selection". */
export function normalizeIntent(value) {
  if (typeof value !== 'string') return null;
  const v = value.trim().toLowerCase();
  return INTENT_ORDER.includes(v) ? v : null;
}

/** Accepts only swap | volunteer. */
export function normalizePreference(value) {
  if (typeof value !== 'string') return null;
  const v = value.trim().toLowerCase();
  return PREFERENCES.includes(v) ? v : null;
}

/** True only for an https Google Forms link (docs.google.com/forms/... or forms.gle/...). */
export function isValidFormUrl(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return false;
  try {
    const u = new URL(raw.trim());
    if (u.protocol !== 'https:') return false;
    if (u.hostname === 'forms.gle') return u.pathname.length > 1;
    return u.hostname === 'docs.google.com' && u.pathname.startsWith('/forms');
  } catch {
    return false;
  }
}

/** Accepts "1234567890" or "entry.1234567890". Returns digits or "" when invalid. */
function normalizeEntryId(value) {
  const cleaned = String(value || '').trim().replace(/^entry\./i, '');
  return /^\d+$/.test(cleaned) ? cleaned : '';
}

/**
 * Builds the Google Form link for the current selection.
 * Returns { url, prefilled }.  url is null when no valid form URL is configured.
 * If prefill cannot be configured (short link, missing entry ids, nothing selected)
 * the general form opens and people choose their options there.
 */
export function buildFormUrl({
  selected = [],
  preference = null,
  baseUrl = FORM.url,
  entries = FORM.entries,
  labels = FORM.labels,
} = {}) {
  if (!isValidFormUrl(baseUrl)) return { url: null, prefilled: false };

  const base = baseUrl.trim();
  const participationId = normalizeEntryId(entries.participation);
  const preferenceId = normalizeEntryId(entries.helpPreference);
  const chosen = INTENT_ORDER.filter((id) => selected.includes(id));

  let u;
  try {
    u = new URL(base);
  } catch {
    return { url: base, prefilled: false };
  }

  // forms.gle short links cannot carry prefill parameters.
  if (u.hostname === 'forms.gle') return { url: base, prefilled: false };

  let prefilled = false;
  const params = new URLSearchParams();

  if (participationId && chosen.length > 0) {
    chosen.forEach((id) => {
      params.append(`entry.${participationId}`, labels.participation[id]);
    });
    prefilled = true;
  }

  const pref = chosen.includes('help') ? normalizePreference(preference) : null;
  if (preferenceId && pref) {
    params.append(`entry.${preferenceId}`, labels.helpPreference[pref]);
    prefilled = true;
  }

  if (!prefilled) return { url: base, prefilled: false };

  if (!u.pathname.includes('/viewform')) {
    u.pathname = `${u.pathname.replace(/\/+$/, '')}/viewform`;
  }
  u.searchParams.set('usp', 'pp_url');
  params.forEach((value, key) => u.searchParams.append(key, value));
  return { url: u.toString(), prefilled: true };
}
