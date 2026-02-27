'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, School, Briefcase } from 'lucide-react';

export default function About({ language }) {
  const timelineData = [
    {
      icon: School,
      title: { fa: 'ورود به دانشگاه', en: 'University Start' },
      description: {
        fa: 'مهندسی کامپیوتر - دانشگاه بین‌المللی قزوین',
        en: 'Computer Engineering - QIAU'
      },
      date: { fa: 'مهر ۱۴۰۲', en: 'Sep 2023' }
    },
    {
      icon: Briefcase,
      title: { fa: 'کارآموزی فرانت‌اند', en: 'Front-end Internship' },
      description: {
        fa: 'شرکت سرزمین هوشمند - تهران',
        en: 'Sarzamin Hooshmand - Tehran'
      },
      date: { fa: 'اردیبهشت - آبان ۱۴۰۲', en: 'May - Nov 2023' }
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-heading section-heading"
        >
          {language === 'fa' ? 'درباره من' : 'About Me'}
        </motion.h2>

        <div className="about-content">
          {/* عکس پروفایل */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="profile-image-container">
              <Image
                src="/images/profile/mohamadreza.jpg"
                alt={language === 'fa' ? 'پروفایل محمدرضا' : 'Mohammad Reza Profile'}
                fill
                className="profile-image"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.div>

          {/* متن و تایملاین */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <p className="about-description">
              {language === 'fa'
                ? 'محمدرضا چاقمی هستم، دانشجوی مهندسی کامپیوتر و توسعه‌دهنده فرانت‌اند با علاقه به طراحی تجربه‌های کاربری زیبا و حرفه‌ای. از سال ۱۴۰۲ وارد دانشگاه بین‌المللی قزوین شدم و هم‌زمان با تحصیل، دوره کارآموزی خود را در شرکت سرزمین هوشمند گذراندم. تخصصم در React، Next.js و طراحی رابط کاربری مدرن است.'
                : "I'm Mohammad Reza Chaghomi, a Computer Engineering student and front-end developer passionate about creating beautiful and professional user experiences. I started at QIAU in 2023 and simultaneously completed my internship at Sarzamin Hooshmand. My expertise is in React, Next.js and modern UI design."}
            </p>

            {/* تایملاین */}
            <div className="timeline">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <div className="timeline-icon-container">
                    <item.icon className="timeline-icon" />
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      {item.title[language]}
                    </h3>
                    <p className="timeline-description">
                      {item.description[language]}
                    </p>
                    <p className="timeline-date">
                      {item.date[language]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}