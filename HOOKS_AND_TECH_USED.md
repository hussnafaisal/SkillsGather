# Hooks and Technology Used

Everything below is frontend only. There is no backend, no API route and no database.
The only external service is the Google Form, which opens in a new tab.

---

## 1. React hooks

| Hook | Where it is used | What it does there |
|---|---|---|
| `useState` | `Navbar`, `JoinClient`, `Accordion`, `RotatingWord`, `useInView`, `useScrolled` | Holds interface state: mobile menu open, dropdown open, selected participation options, help preference, which FAQ is open, current rotating word, "is this element visible". |
| `useEffect` | `Navbar`, `JoinClient`, `RotatingWord`, `app/error.js` and all custom hooks | Side effects: scroll and resize listeners, Escape key and outside-click handling, closing menus after navigation, the word-rotation timer, resetting the Join selection when the link changes, logging page errors. Every effect cleans up after itself. |
| `useRef` | `Navbar`, `ScrollProgress`, `useInView` | Direct access to DOM nodes: the dropdown (outside-click and focus), the menu button (return focus on Escape), the scroll progress bar, and the element watched by the IntersectionObserver. |
| `useMemo` | `JoinClient` | Recomputes the ordered selection and the Google Form link only when the selection or preference changes. |
| `useId` | `Accordion` | Creates unique IDs that link each FAQ button to its answer (`aria-controls` / `aria-labelledby`). |
| `useSyncExternalStore` | `useOnlineStatus`, `useReducedMotion` | Safely reads browser values that change over time (online/offline, reduced-motion preference) without hydration mismatches. |

Not used on purpose: `useCallback`, `useContext`, `useReducer`. The app is small enough that they would add code without benefit.

## 2. Custom hooks (`/hooks`)

| File | Hook | Purpose |
|---|---|---|
| `useInView.js` | `useInView()` | IntersectionObserver wrapper. Powers the scroll-reveal animation (`Reveal` component). |
| `useScrolled.js` | `useScrolled(threshold)` | `true` after the page scrolls past a number of pixels. Makes the navbar tighten up and shows the Back-to-top button. |
| `useScrollProgress.js` | `useScrollProgress(ref)` | Updates the top progress bar straight on the DOM (no re-renders while scrolling). |
| `useLockBodyScroll.js` | `useLockBodyScroll(locked)` | Freezes page scroll while the mobile menu is open. |
| `useOnlineStatus.js` | `useOnlineStatus()` | Detects offline mode so the form button can show a clear warning. |
| `useReducedMotion.js` | `useReducedMotion()` | Respects the visitor's "reduce motion" setting (stops the rotating word). |

## 3. Next.js features

| Feature | Where | Purpose |
|---|---|---|
| App Router | `/app` | File-based routes: `/`, `/swap`, `/volunteer`, `/find-help`, `/how-it-works`, `/join`. |
| `usePathname` | `Navbar` | Highlights the active link and closes menus after navigation. |
| `useSearchParams` | `JoinClient` | Reads `intent` and `preference` from the URL. |
| `Suspense` | `JoinClient` | Required boundary around `useSearchParams`; shows a skeleton while loading. |
| `next/link` | Navbar, Footer, `Button`, `GlowCard` | Fast client-side navigation with prefetching. |
| `next/image` | `Logo`, `HeroVisual` | Optimised logo with correct sizing. |
| `next/font/google` | `app/layout.js` | Self-hosted Sora (headings) and Inter (body) fonts, no layout shift. |
| `metadata` / `viewport` | `layout.js` and every page | Per-page titles, descriptions and theme colour. |
| `app/layout.js` | root | Navbar, footer, animated background, progress bar, skip link on every page. |
| `app/template.js` | root | Re-mounts on each navigation to play the page entrance animation. |
| `app/loading.js` | root | Skeleton while a route loads. |
| `app/error.js` | root | Friendly error screen with "Try again". |
| `app/global-error.js` | root | Last-resort error screen if the layout itself fails. |
| `app/not-found.js` | root | Custom 404 page. |
| `app/icon.png` | root | Browser tab icon from your logo. |
| Server Components | pages, `Section`, `Steps`, `Footer`, etc. | Static content renders on the server. Only interactive parts use `'use client'`. |

## 4. Error handling

- **Missing or invalid form URL**: the Join page shows "Pilot registration opens soon" with no inactive link. Only `https` Google Forms links are accepted.
- **Invalid URL parameters**: unknown `intent` or `preference` values are ignored (no selection).
- **Prefill not configured or short link (`forms.gle`)**: falls back to the general form.
- **Offline**: the Open Pilot Form button is replaced by a clear warning.
- **Pop-up blocked**: the form opens through a normal link, and a helpful message appears after the click.
- **Render errors in the form area**: `FormErrorBoundary` shows a message and a retry button, and the rest of the page keeps working.
- **Page-level errors**: `error.js`, `global-error.js`, and a 404 page.
- **No JavaScript**: a `<noscript>` rule makes sure content is still visible.

## 5. Styling and animation (plain CSS, no library)

- One stylesheet: `app/globals.css`, with design tokens (colours taken from your logo).
- Glass navbar: 10% white tint, 22px blur and saturation boost (about 90% transparent).
- Animated background: drifting glow orbs, moving grid, floating shapes.
- Scroll reveal, hero entrance, gradient text, rotating word, shine on buttons, pointer-following glow on cards, floating hero art, animated accordion, page transitions, scroll progress bar.
- Responsive from 320px phones to large desktops. Mobile menu below 961px.
- Respects `prefers-reduced-motion` and `prefers-reduced-transparency`.
- Accessibility: skip link, visible focus rings, keyboard-operable dropdown and accordion, ARIA labels and live regions.
