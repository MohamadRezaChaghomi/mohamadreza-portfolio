'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import Background3D from '../three/Background3D';

export default function Hero({ language }) {

  const scrollToNext = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* پس‌زمینه سه‌بعدی */}
      <div className="hero-3d-background">
        <Background3D />
      </div>

      {/* محتوای اصلی */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <span className="hero-title-primary">محمدرضا</span>
            <span className="hero-title-secondary"> چاقمی</span>
          </h1>

          <div className="hero-subtitle">
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
            className="hero-description"
          >
            {language === 'fa'
              ? 'دانشجوی مهندسی کامپیوتر با علاقه به ساخت تجربه‌های کاربری زیبا و حرفه‌ای. متخصص در React، Next.js و طراحی رابط کاربری مدرن.'
              : 'Computer Engineering student passionate about creating beautiful and professional user experiences. Specialized in React, Next.js and modern UI design.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-buttons"
          >
            <a
              href="#projects"
              className="hero-button-primary"
            >
              {language === 'fa' ? 'مشاهده پروژه‌ها' : 'View Projects'}
            </a>

            {/* دکمه اسکرول به پایین بین دو دکمه */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              onClick={scrollToNext}
              className="hero-scroll-button"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </motion.button>

            <a
              href="#contact"
              className="hero-button-secondary"
            >
              {language === 'fa' ? 'تماس با من' : 'Contact Me'}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}