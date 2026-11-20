# Pages and Sections

Shared on every page: **Navbar** (glass), **Footer**, animated background, scroll progress bar, Back-to-top button.

**Navbar**
- Desktop (1100px and up): Logo, Home, Get Involved dropdown (Swap a Skill, Volunteer Your Skills, Find Help), How It Works, About, Contact, Join the Pilot button and theme toggle.
- Mobile: menu button opens a glass sidebar with Home, a Get Involved dropdown, How It Works, About, Contact, the theme toggle and Join the Pilot. The sidebar closes by itself when a page is chosen.
- One glass style everywhere (blur plus tint). It sticks to the top on scroll with stronger blur and the same colour.
- Theme: dark by default, light on request. The choice is saved in the browser (`sg-theme`).

**Footer**
- Brand and short note about how pilot submissions are used
- Links to all pages, including About and Contact
- Join the Pilot button
- Bottom bar with Terms of Service, Privacy Policy and Cookie Policy

---

## 1. Home `/`  (`app/page.js`)

1. **Hero**: "Exchange digital skills and help others put theirs to work." with Join the Pilot (`/join`) and See How It Works (`/how-it-works`), animated logo art, rotating "Starting with" skill
2. **Participation cards**: Swap a Skill (`/swap`), Volunteer Your Skills (`/volunteer`), Find Help (`/find-help`). *On mobile these come first after the hero.*
3. **Two examples** (labelled "Example"): three social media designs for one short reel edit; two 20-minute portfolio reviews. *On desktop this comes before the cards.*
4. **How matching works**: three pilot steps
5. **Who can join**: students, new freelancers, professionals; starting with design, short video editing, CV or portfolio reviews
6. **Final call to action**: Join the Pilot

## 2. Swap a Skill `/swap`  (`app/swap/page.js`)

1. **Hero**: "Offer a skill. Get help with a task." with Submit a Swap Offer (`/join?intent=swap`) and the You offer / You receive exchange card
2. **Exchange example and three offer prompts**: what you will deliver, what you want in return, when you can deliver
3. **What happens next**: four steps from proposal to completion
4. **Final actions**: Submit a Swap Offer and a link to `/find-help`

## 3. Volunteer Your Skills `/volunteer`  (`app/volunteer/page.js`)

1. **Hero**: "Give someone a hand with a skill you already have." with Offer Volunteer Help (`/join?intent=volunteer`)
2. **Ways to help**: CV review, portfolio feedback, design or video review
3. **Availability example**: task, slots, duration and format
4. **What happens next**: four steps from offer to session
5. **Final action**: Offer Volunteer Help, with a note that volunteers choose which requests to accept

## 4. Find Help `/find-help`  (`app/find-help/page.js`)

1. **Hero**: "What do you need help with?" with Tell Us What You Need (`/join?intent=help`)
2. **Two paths**: Offer a skill in return (`/join?intent=help&preference=swap`), Request volunteer help (`/join?intent=help&preference=volunteer`)
3. **Example request**: the 20-minute portfolio review request
4. **Four preparation prompts**, plus the match availability note
5. **Final action**: Tell Us What You Need

## 5. How It Works `/how-it-works`  (`app/how-it-works/page.js`)

1. **Introduction**: how a coordinator reviews submissions and proposes matches
2. **Four steps**: submit, review a match, agree on scope, confirm
3. **Comparison**: swap (two deliverables) vs volunteer (one task or session)
4. **FAQ accordion**: eligibility, cost, match availability, cancellations, contact details, portfolio permission
5. **Participation links**: `/swap`, `/volunteer`, `/find-help`
6. **Final action**: Join the Pilot

## 6. Join the Pilot `/join`  (`app/join/page.js`, `components/JoinClient.js`)

1. **Introduction**: "Join the SkillsGather Faisalabad Pilot" with why responses are collected
2. **Participation selector**: Swap, Volunteer, Find Help. Starts from the `intent` URL value, allows several, direct visits start with none
3. **Help preference** (only when Find Help is selected): swap help or volunteer help, editable, cleared when Find Help is deselected
4. **What the form asks**: role, offered skill, needed help, availability, main concern; contact optional
5. **Privacy and follow-up**
6. **Open Pilot Form**: opens the Google Form with selections prefilled. Shows "Pilot registration opens soon" if no form URL is set
7. **After you submit**: the confirmation message Google Forms shows

---

## Other screens

- `app/not-found.js`: 404 page
- `app/error.js` and `app/global-error.js`: error screens
- `app/loading.js`: loading skeleton

---

## 7. About Us `/about`  (`app/about/page.jsx`)

Hero, what the pilot is testing (three principles), who it is for, how the pilot runs, closing call to action.

## 8. Contact `/contact`  (`app/contact/page.jsx`, `components/ContactForm.jsx`)

Email, location and FAQ cards plus a contact form that opens the visitor's email app. Set `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` to turn the form on.

## 9. Legal pages `/terms`, `/privacy`, `/cookies`

Text lives in `lib/legal.jsx` and is rendered by `components/LegalPage.jsx`. Please review the wording before launch.

## 10. 404 page  (`app/not-found.jsx`)

Custom page with links back to Home, Join the Pilot and Contact.

## Spacing rule

Every section has at most 80px above and 90px below (`--sec-top` and `--sec-bottom` in `app/globals.css`). These shrink on phones.
