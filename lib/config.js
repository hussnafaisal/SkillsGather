// Single place for the Google Form configuration.
// All six pages use the same form and response sheet.

export const SITE = {
  name: 'SkillsGather',
  tagline: 'Faisalabad Pilot',
  description:
    'Exchange digital skills and help others put theirs to work. Join the SkillsGather Faisalabad pilot to swap skills, volunteer or find help.',
};

// NOTE: process.env.NEXT_PUBLIC_* values must be referenced literally so Next.js can inline them.
export const FORM = {
  url: (process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || '').trim(),
  entries: {
    participation: process.env.NEXT_PUBLIC_FORM_ENTRY_PARTICIPATION || '',
    helpPreference: process.env.NEXT_PUBLIC_FORM_ENTRY_HELP_PREFERENCE || '',
  },
  // These labels must match the option text in your Google Form EXACTLY,
  // otherwise Google Forms ignores the prefilled value.
  labels: {
    participation: {
      swap: 'Swap a Skill',
      volunteer: 'Volunteer Your Skills',
      help: 'Find Help',
    },
    helpPreference: {
      swap: 'Swap help',
      volunteer: 'Volunteer help',
    },
  },
};

export const COPY = {
  registrationClosed: 'Pilot registration opens soon',
  confirmation:
    'Thanks for telling us how you’d like to take part. If you opted in and a suitable pilot opportunity comes up, our team may contact you.',
  privacy:
    'We use your answers to understand interest in the pilot and arrange suitable matches. Follow-up is optional and we keep your contact information private.',
};
