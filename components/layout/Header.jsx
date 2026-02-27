'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import enMessages from '@/messages/en.json';
import faMessages from '@/messages/fa.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const lang = params.lang || 'fa';
  const { theme, setTheme } = useTheme();
  const messages = lang === 'fa' ? faMessages : enMessages;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  let navItems = [
    { href: `/${lang}`, key: 'Home' },
    { href: `/${lang}/projects`, key: 'Projects' },
    { href: `/${lang}/about`, key: 'About' },
    { href: `/${lang}/contact`, key: 'Contact' },
  ];

  // reverse order for right-to-left layout
  if (lang === 'fa') {
    navItems = [...navItems].reverse();
  }

  const toggleLanguage = () => {
    const newLang = lang === 'fa' ? 'en' : 'fa';
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    window.location.href = newPath;
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* لوگو */}
        <Link href={`/${lang}`} className="header-logo">
          {lang === 'fa' ? (
            <><span>Ch</span><span>MR</span></>
          ) : (
            <><span>MR</span><span>Ch</span></>
          )}
        </Link>

        {/* منوی دسکتاپ */}
        <nav className="header-nav">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {messages[item.key]}
            </Link>
          ))}
        </nav>

        {/* دکمه‌های کنترلی */}
        <div className="header-controls">
          {/* تغییر تم */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* تغییر زبان */}
          <button
            onClick={toggleLanguage}
            className="button button-outline button-small"
          >
            {lang === 'fa' ? 'EN' : 'FA'}
          </button>

          {/* دکمه منوی موبایل */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-items">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                >
                  {messages[item.key]}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}