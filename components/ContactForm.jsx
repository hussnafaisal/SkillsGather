'use client';

import { useState } from 'react';
import { CheckIcon, AlertIcon } from './Icons';
import { CONTACT } from '@/lib/config';
import { CONTACT_TOPICS } from '@/lib/content';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Frontend-only contact form. On submit it opens the visitor's email app
 * with the message filled in (mailto), so no backend is needed.
 */
export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', topic: CONTACT_TOPICS[0], message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!EMAIL_PATTERN.test(values.email.trim())) next.email = 'Please enter a valid email address.';
    if (values.message.trim().length < 10) next.message = 'Please write at least a short sentence (10 characters).';
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      e.currentTarget.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    if (!CONTACT.email) {
      setErrors({ form: 'The team’s email address is not set up yet, so this message could not be sent. Please try again soon or use the pilot form.' });
      return;
    }
    const subject = `[SkillsGather] ${values.topic}`;
    const body = `${values.message.trim()}\n\n--\n${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form card" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-name">Your name</label>
          <input
            id="cf-name"
            className="input"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
          />
          {errors.name && (
            <p id="cf-name-err" className="field__error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="cf-email">Your email</label>
          <input
            id="cf-email"
            className="input"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
          />
          {errors.email && (
            <p id="cf-email-err" className="field__error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-topic">Topic</label>
        <select id="cf-topic" className="input" value={values.topic} onChange={update('topic')}>
          {CONTACT_TOPICS.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          className="input input--area"
          rows={6}
          value={values.message}
          onChange={update('message')}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
        />
        {errors.message && (
          <p id="cf-message-err" className="field__error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {errors.form && (
        <p className="field__error" role="alert">
          {errors.form}
        </p>
      )}

      <button type="submit" className="btn btn--primary">
        <span>Send message</span>
      </button>

      <p className="form-note" role="status">
        {sent ? (
          <>
            <CheckIcon size={18} className="form-note__icon" /> Your email app should open with the message ready. If
            nothing opens, write to {CONTACT.email} directly.
          </>
        ) : (
          <>
            <AlertIcon size={18} className="form-note__icon" /> This opens your email app. We only receive what you
            send.
          </>
        )}
      </p>
    </form>
  );
}
