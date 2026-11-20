'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Reveal from './Reveal';
import FormErrorBoundary from './FormErrorBoundary';
import { CheckIcon, ClockIcon, ExternalIcon, NamedIcon, ShieldIcon, WifiOffIcon } from './Icons';
import { COPY } from '@/lib/config';
import { INTENT_ORDER, buildFormUrl, normalizeIntent, normalizePreference } from '@/lib/form';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

const OPTIONS = [
  { id: 'swap', icon: 'swap', title: 'Swap a Skill', text: 'Trade a skill for help with a task.' },
  { id: 'volunteer', icon: 'heart', title: 'Volunteer Your Skills', text: 'Give some of your time to help.' },
  { id: 'help', icon: 'compass', title: 'Find Help', text: 'Tell us what you need support with.' },
];

const PREFERENCES = [
  { id: 'swap', title: 'Swap help', text: 'I can offer a skill in return.' },
  { id: 'volunteer', title: 'Volunteer help', text: 'I would like help from a volunteer.' },
];

const FORM_QUESTIONS = [
  'Your role',
  'The skill you can offer',
  'The help you need',
  'Your availability',
  'Your main concern',
];

const LABELS = { swap: 'Swap a Skill', volunteer: 'Volunteer Your Skills', help: 'Find Help' };
const PREF_LABELS = { swap: 'swap help', volunteer: 'volunteer help' };

function JoinForm() {
  const params = useSearchParams();
  const intentParam = normalizeIntent(params.get('intent'));
  // The help preference only counts when the link came from Find Help.
  const preferenceParam = intentParam === 'help' ? normalizePreference(params.get('preference')) : null;

  const [selected, setSelected] = useState(intentParam ? [intentParam] : []);
  const [preference, setPreference] = useState(preferenceParam);
  const [opened, setOpened] = useState(false);
  const online = useOnlineStatus();

  // If the link changes while this page is open, start again from the new link.
  useEffect(() => {
    setSelected(intentParam ? [intentParam] : []);
    setPreference(preferenceParam);
    setOpened(false);
  }, [intentParam, preferenceParam]);

  const helpSelected = selected.includes('help');

  const toggle = (id) => {
    setOpened(false);
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
      if (id === 'help') setPreference(null); // clear preference when Find Help is deselected
    } else {
      setSelected([...selected, id]);
    }
  };

  const chooseHelpPreference = (id) => {
    setOpened(false);
    setPreference(id);
  };

  const ordered = useMemo(() => INTENT_ORDER.filter((id) => selected.includes(id)), [selected]);

  const { url: formUrl, prefilled } = useMemo(
    () => buildFormUrl({ selected: ordered, preference: helpSelected ? preference : null }),
    [ordered, helpSelected, preference]
  );

  const registrationClosed = !formUrl;

  const summary = ordered.length
    ? ordered
        .map((id) => (id === 'help' && preference ? `${LABELS[id]} (${PREF_LABELS[preference]})` : LABELS[id]))
        .join(', ')
    : 'Nothing selected yet. You can also choose inside the form.';

  return (
    <>
      <section className="section section--tight" aria-labelledby="choose-title">
        <div className="container join__grid">
          <Reveal className="card join__panel">
            <fieldset className="choice">
              <legend id="choose-title" className="h3">
                How would you like to take part?
              </legend>
              <p className="muted">Choose one or more paths. You can change your mind at any time.</p>

              <div className="choice__grid">
                {OPTIONS.map((option) => {
                  const checked = selected.includes(option.id);
                  return (
                    <label key={option.id} className={`choice__option ${checked ? 'is-checked' : ''}`}>
                      <input
                        type="checkbox"
                        name="participation"
                        value={option.id}
                        checked={checked}
                        onChange={() => toggle(option.id)}
                      />
                      <span className="choice__icon">
                        <NamedIcon name={option.icon} size={22} />
                      </span>
                      <span className="choice__body">
                        <strong>{option.title}</strong>
                        <small>{option.text}</small>
                      </span>
                      <span className="choice__tick" aria-hidden="true">
                        <CheckIcon size={16} strokeWidth={3} />
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {helpSelected && (
              <fieldset className="choice choice--pref">
                <legend className="h4">What kind of help would you prefer?</legend>
                <div className="choice__grid choice__grid--two">
                  {PREFERENCES.map((pref) => {
                    const checked = preference === pref.id;
                    return (
                      <label key={pref.id} className={`choice__option ${checked ? 'is-checked' : ''}`}>
                        <input
                          type="radio"
                          name="help-preference"
                          value={pref.id}
                          checked={checked}
                          onChange={() => chooseHelpPreference(pref.id)}
                        />
                        <span className="choice__body">
                          <strong>{pref.title}</strong>
                          <small>{pref.text}</small>
                        </span>
                        <span className="choice__tick" aria-hidden="true">
                          <CheckIcon size={16} strokeWidth={3} />
                        </span>
                      </label>
                    );
                  })}
                </div>
                {preference && (
                  <button type="button" className="link-btn" onClick={() => chooseHelpPreference(null)}>
                    Clear preference
                  </button>
                )}
              </fieldset>
            )}

            <p className="choice__summary" role="status" aria-live="polite">
              <span>Your selection:</span> {summary}
            </p>
          </Reveal>

          <Reveal className="card join__panel" delay={120}>
            <h2 className="h3">What the form asks</h2>
            <ul className="ticks">
              {FORM_QUESTIONS.map((q) => (
                <li key={q}>
                  <CheckIcon size={18} strokeWidth={2.6} />
                  {q}
                </li>
              ))}
            </ul>
            <p className="muted">
              Contact details are optional for research responses. Pilot follow-up is opt-in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="privacy-title">
        <div className="container">
          <Reveal className="card privacy">
            <span className="privacy__icon">
              <ShieldIcon size={28} />
            </span>
            <div>
              <h2 id="privacy-title" className="h3">
                Privacy and follow-up
              </h2>
              <p>{COPY.privacy}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="open-title">
        <div className="container">
          <Reveal className="cta-band cta-band--form" direction="zoom">
            <div className="cta-band__glow" aria-hidden="true" />
            <h2 id="open-title" className="h2">
              Ready when you are
            </h2>
            <p className="lead">
              The pilot form opens in a new tab with your choices filled in where possible. Every answer stays
              editable.
            </p>

            <div className="cta-band__actions" aria-live="polite">
              {registrationClosed ? (
                <p className="closed" role="status">
                  <ClockIcon size={22} />
                  {COPY.registrationClosed}
                </p>
              ) : !online ? (
                <p className="closed closed--warn" role="alert">
                  <WifiOffIcon size={22} />
                  You appear to be offline. Reconnect to open the form.
                </p>
              ) : (
                <a
                  className="btn btn--primary btn--lg"
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpened(true)}
                >
                  <span>Open Pilot Form</span>
                  <ExternalIcon size={20} />
                </a>
              )}
            </div>

            {!registrationClosed && online && (
              <p className="form-note">
                {prefilled
                  ? 'Your selections will be filled in for you. You can still edit them in the form.'
                  : ordered.length
                    ? 'This form opens without prefilled choices, so please pick your options there.'
                    : 'No default selection. Choose your options inside the form.'}
              </p>
            )}

            {opened && !registrationClosed && online && (
              <div className="notice notice--ok" role="status">
                <CheckIcon size={22} strokeWidth={2.6} />
                <p>The form opened in a new tab. If nothing appeared, allow pop-ups for this site and try again.</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="after-title">
        <div className="container">
          <Reveal className="card confirm">
            <h2 id="after-title" className="h3">
              After you submit
            </h2>
            <p>{COPY.confirmation}</p>
            <p className="muted">Google Forms shows this confirmation message once your response is sent.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FormSkeleton() {
  return (
    <div className="container section" aria-busy="true" aria-live="polite">
      <div className="skeleton skeleton--card" />
      <span className="sr-only">Loading the pilot form options</span>
    </div>
  );
}

// useSearchParams needs a Suspense boundary; the error boundary protects the rest of the page.
export default function JoinClient() {
  return (
    <FormErrorBoundary>
      <Suspense fallback={<FormSkeleton />}>
        <JoinForm />
      </Suspense>
    </FormErrorBoundary>
  );
}
