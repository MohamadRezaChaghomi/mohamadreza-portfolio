'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import Background3D from '../three/Background3D';

export default function Hero({ language }) {

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* پس‌زمینه سه‌بعدی */}
      {/* <Background3D /> */}

      {/* محتوای اصلی */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-[rgb(var(--accent-primary))]">محمدرضا</span>
            <span className="text-[rgb(var(--text-primary))]"> چاقمی</span>
          </h1>

          <div className="text-2xl md:text-3xl text-[rgb(var(--text-secondary))] mb-8">
            {language === 'fa' ? (
              <TypeAnimation
                sequence={[
                  'توسعه‌دهنده فرانت‌اند',
                  2000,
                  'طراح رابط کاربری',
                  2000,
                  'علاقه‌مند به تجربه کاربری',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            ) : (
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'UI Designer',
                  2000,
                  'UX Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            )}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-[rgb(var(--text-secondary))] mb-12"
          >
            {language === 'fa'
              ? 'دانشجوی مهندسی کامپیوتر با علاقه به ساخت تجربه‌های کاربری زیبا و حرفه‌ای'
              : 'Computer Engineering student passionate about creating beautiful and professional user experiences'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center space-x-4 rtl:space-x-reverse"
          >
            <a
              href="/projects"
              className="px-8 py-3 bg-[rgb(var(--accent-primary))] text-white rounded-full hover:bg-[rgb(var(--accent-primary))]/90 transition-colors"
            >
              {language === 'fa' ? 'مشاهده پروژه‌ها' : 'View Projects'}
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-[rgb(var(--accent-primary))] text-[rgb(var(--accent-primary))] rounded-full hover:bg-[rgb(var(--accent-primary))] hover:text-white transition-colors"
            >
              {language === 'fa' ? 'تماس با من' : 'Contact Me'}
            </a>
          </motion.div>
        </motion.div>

        {/* دکمه اسکرول به پایین */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} className="text-[rgb(var(--accent-primary))]" />
        </motion.button>
      </div>
    </section>
  );
}