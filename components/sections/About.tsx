'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, School, Briefcase } from 'lucide-react';

interface AboutProps {
  language: 'fa' | 'en';
}

export default function About({ language }: AboutProps) {
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
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {language === 'fa' ? 'درباره من' : 'About Me'}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* عکس پروفایل (بعداً اضافه می‌شود) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="aspect-square rounded-2xl glass overflow-hidden">
              {/* <Image src="/images/profile/mohamadreza.jpg" alt="محمدرضا چاقمی" fill className="object-cover" /> */}
              <div className="w-full h-full flex items-center justify-center text-[rgb(var(--text-secondary))]">
                {language === 'fa' ? 'عکس پروفایل' : 'Profile Photo'}
              </div>
            </div>
          </motion.div>

          {/* متن و تایملاین */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <p className="text-lg mb-6 text-[rgb(var(--text-secondary))] leading-relaxed">
              {language === 'fa'
                ? 'محمدرضا چاقمی هستم، دانشجوی مهندسی کامپیوتر و توسعه‌دهنده فرانت‌اند با علاقه به طراحی تجربه‌های کاربری زیبا و حرفه‌ای. از ۱۴۰۲ وارد دانشگاه بین‌المللی قزوین شدم و هم‌زمان با تحصیل، دوره کارآموزی خود را در شرکت سرزمین هوشمند گذراندم.'
                : "I'm Mohammad Reza Chaghomi, a Computer Engineering student and front-end developer passionate about creating beautiful and professional user experiences. I started at QIAU in 2023 and simultaneously completed my internship at Sarzamin Hooshmand."}
            </p>

            {/* تایملاین */}
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[rgb(var(--accent-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      {item.title[language]}
                    </h3>
                    <p className="text-[rgb(var(--text-secondary))]">
                      {item.description[language]}
                    </p>
                    <p className="text-sm text-[rgb(var(--accent-primary))] mt-1">
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