'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import Link from 'next/link';

interface ContactProps {
  language: 'fa' | 'en';
}

export default function Contact({ language }: ContactProps) {
  return (
    <section className="py-20 px-4 bg-[rgb(var(--bg-secondary))]" id="contact">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {language === 'fa' ? 'تماس با من' : 'Contact Me'}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* اطلاعات تماس */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">
              {language === 'fa' ? 'اطلاعات تماس' : 'Contact Information'}
            </h3>

            <div className="flex items-center gap-4 p-4 glass">
              <Mail className="w-6 h-6 text-[rgb(var(--accent-primary))]" />
              <span>mohamad.chaghomi@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 p-4 glass">
              <Phone className="w-6 h-6 text-[rgb(var(--accent-primary))]" />
              <span dir="ltr">۰۹۱۰۷۴۹۲۲۰۲</span>
            </div>

            <div className="flex items-center gap-4 p-4 glass">
              <MapPin className="w-6 h-6 text-[rgb(var(--accent-primary))]" />
              <span>{language === 'fa' ? 'قزوین، ایران' : 'Qazvin, Iran'}</span>
            </div>

            <div className="flex items-center gap-4 p-4 glass">
              <Github className="w-6 h-6 text-[rgb(var(--accent-primary))]" />
              <a 
                href="https://github.com/MohamadRezaChaghomi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/MohamadRezaChaghomi
              </a>
            </div>

            <div className="flex items-center gap-4 p-4 glass">
              <Linkedin className="w-6 h-6 text-[rgb(var(--accent-primary))]" />
              <span className="text-[rgb(var(--text-secondary))]">
                {language === 'fa' ? 'به زودی' : 'Coming Soon'}
              </span>
            </div>

            {/* دکمه دانلود رزومه */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full p-4 mt-6 bg-[rgb(var(--accent-primary))] text-white rounded-xl hover:bg-[rgb(var(--accent-primary))]/90 transition-colors"
            >
              <Download size={20} />
              {language === 'fa' ? 'دانلود رزومه' : 'Download Resume'}
            </a>
          </motion.div>

          {/* فرم تماس */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              {language === 'fa' ? 'ارسال پیام' : 'Send Message'}
            </h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={language === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
                  className="w-full p-4 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-primary))]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-primary))]"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder={language === 'fa' ? 'پیام شما' : 'Your Message'}
                  className="w-full p-4 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-primary))]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-4 bg-[rgb(var(--accent-primary))] text-white rounded-xl hover:bg-[rgb(var(--accent-primary))]/90 transition-colors"
              >
                {language === 'fa' ? 'ارسال پیام' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}