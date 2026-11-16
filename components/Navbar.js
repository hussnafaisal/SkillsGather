'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
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
  const dropRef = useRef(null);
  const dropButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  useLockBodyScroll(menuOpen);

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
    const mq = window.matchMedia('(min-width: 961px)');
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

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
      <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
        <div className="nav__bar">
          <Link href="/" className="nav__logo" aria-label="SkillsGather home">
            <Logo size={40} priority className='Logo'/>
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
          </nav>

          <Link href="/join" className="btn btn--primary nav__join">
            <span>Join the Pilot</span>
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="nav__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mnav ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mnav__inner" aria-label="Mobile">
          <ul>
            <li style={{ '--i': 0 }}>
              <Link href="/" aria-current={isActive('/') ? 'page' : undefined}>
                Home
              </Link>
            </li>
            {GET_INVOLVED.map((item, i) => (
              <li key={item.href} style={{ '--i': i + 1 }}>
                <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                  <span className="mnav__icon">
                    <NamedIcon name={item.icon} size={20} />
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li style={{ '--i': 4 }}>
              <Link href="/how-it-works" aria-current={isActive('/how-it-works') ? 'page' : undefined}>
                How It Works
              </Link>
            </li>
          </ul>
          <Link href="/join" className="btn btn--primary mnav__join" style={{ '--i': 5 }}>
            <span>Join the Pilot</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
