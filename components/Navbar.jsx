'use client';

import "../app/navbar.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { ChevronDown, CloseIcon, MenuIcon, NamedIcon } from './Icons';
import { GET_INVOLVED } from '@/lib/content';
import { useScrolled } from '@/hooks/useScrolled';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

const INVOLVED_PATHS = GET_INVOLVED.map((item) => item.href);

export default function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(16);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef(null);
  const dropButtonRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useLockBodyScroll(menuOpen);

  const closeAll = () => {
    setMenuOpen(false);
    setDropOpen(false);
  };

  // Close everything after navigating.
  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [pathname]);

  // Escape closes menus, click outside closes the dropdown.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setDropOpen((open) => {
        if (open) dropButtonRef.current?.focus();
        return false;
      });
      setMenuOpen((open) => {
        if (open) menuButtonRef.current?.focus();
        return false;
      });
    };
    const onPointerDown = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  // If the window grows to desktop width, close the mobile menu.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1100px)');
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Move focus into the mobile menu when it opens.
  useEffect(() => {
    if (menuOpen) closeButtonRef.current?.focus();
  }, [menuOpen]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname === href);
  const involvedActive = INVOLVED_PATHS.includes(pathname);

  const onDropKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setDropOpen(true);
      requestAnimationFrame(() => {
        dropRef.current?.querySelector('.nav__menu a')?.focus();
      });
    }
  };

  const onDropBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setDropOpen(false);
  };

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav__bar">
          <Link href="/" className="nav__logo" aria-label="SkillsGather home">
            <Logo size={40} priority />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            <Link href="/" className="nav__link" aria-current={isActive('/') ? 'page' : undefined}>
              Home
            </Link>

            <div
              ref={dropRef}
              className={`nav__drop ${dropOpen ? 'is-open' : ''}`}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setDropOpen(true)}
              onPointerLeave={(e) => e.pointerType === 'mouse' && setDropOpen(false)}
              onBlur={onDropBlur}
              onKeyDown={onDropKeyDown}
            >
              <button
                ref={dropButtonRef}
                type="button"
                className={`nav__link nav__dropbtn ${involvedActive ? 'is-active' : ''}`}
                aria-expanded={dropOpen}
                aria-haspopup="true"
                aria-controls="nav-involved"
                onClick={() => setDropOpen((open) => !open)}
              >
                Get Involved
                <ChevronDown size={18} className="nav__chev" />
              </button>
              <ul id="nav-involved" className="nav__menu">
                {GET_INVOLVED.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="nav__item"
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      onClick={closeAll}
                    >
                      <span className="nav__itemicon">
                        <NamedIcon name={item.icon} size={20} />
                      </span>
                      <span>
                        <strong>{item.label}</strong>
                        <small>{item.text}</small>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/how-it-works"
              className="nav__link"
              aria-current={isActive('/how-it-works') ? 'page' : undefined}
            >
              How It Works
            </Link>
            <Link href="/about" className="nav__link" aria-current={isActive('/about') ? 'page' : undefined}>
              About
            </Link>
            <Link href="/contact" className="nav__link" aria-current={isActive('/contact') ? 'page' : undefined}>
              Contact
            </Link>
          </nav>

          <div className="nav__actions">
            <Link href="/join" className="btn btn--primary nav__join">
              <span>Join the Pilot</span>
            </Link>
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              className="nav__iconbtn nav__toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar: slides in from the right and closes itself when a page is chosen. */}
      <div className={`mnav ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen}>
        <div className="mnav__backdrop" onClick={closeAll} aria-hidden="true" />
        <aside id="mobile-menu" className="mnav__panel" aria-label="Menu">
          <div className="mnav__head">
            <Link href="/" className="nav__logo" aria-label="SkillsGather home" onClick={closeAll}>
              <Logo size={36} />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              className="nav__iconbtn"
              aria-label="Close menu"
              onClick={() => {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
            >
              <CloseIcon size={24} />
            </button>
          </div>

          <nav className="mnav__nav" aria-label="Mobile">
            <ul>
              <li style={{ '--i': 0 }}>
                <Link href="/" aria-current={isActive('/') ? 'page' : undefined} onClick={closeAll}>
                  Home
                </Link>
              </li>

              <li style={{ '--i': 1 }} className={`mnav__group ${mobileDropOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className={`mnav__dropbtn ${involvedActive ? 'is-active' : ''}`}
                  aria-expanded={mobileDropOpen}
                  aria-controls="mnav-involved"
                  onClick={() => setMobileDropOpen((open) => !open)}
                >
                  <span>Get Involved</span>
                  <ChevronDown size={20} className="mnav__chev" />
                </button>
                <div id="mnav-involved" className="mnav__sub" inert={!mobileDropOpen}>
                  <ul>
                    {GET_INVOLVED.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={isActive(item.href) ? 'page' : undefined}
                          onClick={closeAll}
                        >
                          <span className="mnav__icon">
                            <NamedIcon name={item.icon} size={18} />
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li style={{ '--i': 2 }}>
                <Link
                  href="/how-it-works"
                  aria-current={isActive('/how-it-works') ? 'page' : undefined}
                  onClick={closeAll}
                >
                  How It Works
                </Link>
              </li>
              <li style={{ '--i': 3 }}>
                <Link href="/about" aria-current={isActive('/about') ? 'page' : undefined} onClick={closeAll}>
                  About
                </Link>
              </li>
              <li style={{ '--i': 4 }}>
                <Link href="/contact" aria-current={isActive('/contact') ? 'page' : undefined} onClick={closeAll}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mnav__foot" style={{ '--i': 5 }}>
            <ThemeToggle showLabel />
            <Link href="/join" className="btn btn--primary mnav__join" onClick={closeAll}>
              <span>Join the Pilot</span>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}