'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/', label: { fa: 'خانه', en: 'Home' } },
  { href: '/projects', label: { fa: 'پروژه‌ها', en: 'Projects' } },
  { href: '/about', label: { fa: 'درباره من', en: 'About' } },
  { href: '/contact', label: { fa: 'تماس', en: 'Contact' } },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState<'fa' | 'en'>('fa');

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fa' ? 'en' : 'fa');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* لوگو */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[rgb(var(--accent-primary))]">MR</span>
            <span className="text-[rgb(var(--text-primary))]">Ch</span>
          </Link>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors ${
                  pathname === item.href ? 'text-[rgb(var(--accent-primary))] font-medium' : ''
                }`}
              >
                {item.label[language]}
              </Link>
            ))}
          </div>

          {/* دکمه‌های کنترلی */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* تغییر تم */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-[rgb(var(--glass-bg))] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* تغییر زبان */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-[rgb(var(--accent-primary))] text-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-primary))] hover:text-white transition-colors"
            >
              {language === 'fa' ? 'EN' : 'FA'}
            </button>

            {/* دکمه منوی موبایل */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-[rgb(var(--glass-bg))] transition-colors"
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
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors ${
                      pathname === item.href ? 'text-[rgb(var(--accent-primary))] font-medium' : ''
                    }`}
                  >
                    {item.label[language]}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}