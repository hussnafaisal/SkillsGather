// All page copy lives here so it is easy to edit without touching components.

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
];

export const GET_INVOLVED = [
  { href: '/swap', label: 'Swap a Skill', text: 'Trade one skill for another', icon: 'swap' },
  { href: '/volunteer', label: 'Volunteer Your Skills', text: 'Give a little time to help', icon: 'heart' },
  { href: '/find-help', label: 'Find Help', text: 'Ask for support on a task', icon: 'compass' },
];

export const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/swap', label: 'Swap a Skill' },
  { href: '/volunteer', label: 'Volunteer Your Skills' },
  { href: '/find-help', label: 'Find Help' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/join', label: 'Join the Pilot' },
];

export const PARTICIPATION = [
  {
    href: '/swap',
    icon: 'swap',
    title: 'Swap a Skill',
    text: 'Trade a skill you have for help with a task you need. Both people agree on the work before anything starts.',
    cta: 'Explore swaps',
  },
  {
    href: '/volunteer',
    icon: 'heart',
    title: 'Volunteer Your Skills',
    text: 'Contribute some of your time with a CV review, portfolio feedback or a short design or video review.',
    cta: 'Explore volunteering',
  },
  {
    href: '/find-help',
    icon: 'compass',
    title: 'Find Help',
    text: 'Describe a concrete digital task, feedback request or short mentoring session and choose how to receive support.',
    cta: 'Explore ways to get help',
  },
];

export const HERO_WORDS = ['Design', 'Short video editing', 'CV reviews', 'Portfolio reviews'];

export const PILOT_STEPS = [
  {
    title: 'Tell us what you can offer or need',
    text: 'Choose swap, volunteer or find help and share a few details through one short form.',
  },
  {
    title: 'The team reviews submissions',
    text: 'We read every submission and look for needs and availability that line up.',
  },
  {
    title: 'We reach out if there is a match',
    text: 'If a suitable match is available, the team contacts you. Follow-up is always optional.',
  },
];

export const WHO_CAN_JOIN = [
  { title: 'Students', text: 'With a practical skill you are happy to put to work.' },
  { title: 'New freelancers', text: 'Building experience, samples and confidence.' },
  { title: 'Professionals', text: 'Ready to share some time and know-how.' },
];

export const STARTING_SKILLS = ['Design', 'Short video editing', 'CV or portfolio reviews'];

export const SWAP_PROMPTS = [
  { label: 'What you will deliver', example: 'e.g. three PNG designs', icon: 'upload' },
  { label: 'What you would like in return', example: 'e.g. one short reel edit', icon: 'swap' },
  { label: 'When you can deliver', example: 'e.g. within seven days of agreement', icon: 'clock' },
];

export const SWAP_STEPS = [
  { title: 'Submit an offer', text: 'Tell us the skill you can offer and what you would like in return.' },
  { title: 'Review a proposed match', text: 'If a suitable match is available, the team proposes it to you.' },
  { title: 'Agree on both deliverables', text: 'Settle files, deadlines and revisions together before you begin.' },
  { title: 'Confirm completion', text: 'The swap closes once both people accept the work.' },
];

export const VOLUNTEER_WAYS = [
  { icon: 'file', title: 'CV review', text: 'Suggest edits to someone’s resume so it reads clearly and confidently.' },
  { icon: 'folder', title: 'Portfolio feedback', text: 'Help choose and present samples so the best work stands out.' },
  { icon: 'eye', title: 'Design or video review', text: 'Give specific, practical suggestions on a draft.' },
];

export const VOLUNTEER_STEPS = [
  { title: 'Submit your availability', text: 'Say what you can help with, how many slots and how long each takes.' },
  { title: 'Review a suitable request', text: 'If a fitting request comes up, you see the details first.' },
  { title: 'Confirm scope or session time', text: 'Agree what you will cover and when.' },
  { title: 'Complete the contribution', text: 'Deliver your feedback or session. There is no return commitment.' },
];

export const HELP_PATHS = [
  {
    href: '/join?intent=help&preference=swap',
    icon: 'swap',
    title: 'Offer a skill in return',
    text: 'Swap help. Offer something you can do and receive help with your task in exchange.',
    cta: 'Choose swap help',
  },
  {
    href: '/join?intent=help&preference=volunteer',
    icon: 'heart',
    title: 'Request volunteer help',
    text: 'Volunteer help. Ask a volunteer for one scoped task or short session with nothing owed back.',
    cta: 'Choose volunteer help',
  },
];

export const HELP_PROMPTS = [
  { label: 'What are you working on?', icon: 'folder' },
  { label: 'What help do you need?', icon: 'eye' },
  { label: 'When do you need it?', icon: 'clock' },
  { label: 'What could you offer in return, if anything?', icon: 'swap' },
];

export const HOW_STEPS = [
  { title: 'Submit an offer or request', text: 'Use the pilot form to say what you can offer or what you need.' },
  { title: 'Review a proposed match', text: 'When needs and availability align, the coordinator proposes a match to you.' },
  { title: 'Agree on scope', text: 'Settle deliverables, timing and revisions where relevant.' },
  { title: 'Confirm completion', text: 'Both sides confirm the work is done.' },
];

// NOTE: please review these answers and adjust to your real pilot rules.
export const FAQ = [
  {
    q: 'Who can take part?',
    a: 'The pilot is for students with a practical skill, new freelancers and professionals. We are starting with design, short video editing and CV or portfolio reviews.',
  },
  {
    q: 'Does it cost anything?',
    a: 'Sending your interest through the pilot form does not cost anything. Swaps are an exchange of work between two people, and volunteering is offered freely.',
  },
  {
    q: 'Will I definitely be matched?',
    a: 'Not always. Matching depends on the skills and time people have available. The team reviews submissions and reaches out only if a suitable match comes up.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'Let the coordinator know as soon as you can so the other person is not left waiting. Cancelling before work starts is fine.',
  },
  {
    q: 'How are my contact details used?',
    a: 'Contact details are optional for research responses. Follow-up is opt-in, and we keep your contact information private.',
  },
  {
    q: 'Can I share completed work in my portfolio?',
    a: 'Only with permission. Agree with the other person before showing the finished work in a portfolio.',
  },
];
