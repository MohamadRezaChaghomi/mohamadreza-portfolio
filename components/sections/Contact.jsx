'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

export default function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-heading section-heading"
        >
          {language === 'fa' ? 'تماس با من' : 'Contact Me'}
        </motion.h2>

        <div className="contact-content">
          {/* اطلاعات تماس */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3 className="contact-info-title">
              {language === 'fa' ? 'اطلاعات تماس' : 'Contact Information'}
            </h3>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={20} />
              </div>
              <span className="contact-info-text">
                mohamad.chaghomi@gmail.com
              </span>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone size={20} />
              </div>
              <span className="contact-info-text" dir="ltr">
                +98 910 749 2202
              </span>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={20} />
              </div>
              <span className="contact-info-text">
                {language === 'fa' ? 'کرج، ایران' : 'Karaj, Iran'}
              </span>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Github size={20} />
              </div>
              <a
                href="https://github.com/MohamadRezaChaghomi"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-link"
              >
                github.com/MohamadRezaChaghomi
              </a>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Linkedin size={20} />
              </div>
              <span className="contact-info-text">
                {language === 'fa' ? 'به زودی' : 'Coming Soon'}
              </span>
            </div>

            {/* دکمه دانلود رزومه */}
            <a
              href="/resume.pdf"
              download
              className="download-resume-button"
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
            className="contact-form"
          >
            <h3 className="contact-form-title">
              {language === 'fa' ? 'ارسال پیام' : 'Send Message'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {language === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder={language === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder={language === 'fa' ? 'آدرس ایمیل' : 'Email Address'}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {language === 'fa' ? 'پیام' : 'Message'}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder={language === 'fa' ? 'پیام شما' : 'Your Message'}
                  required
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="form-submit-button"
              >
                {status === 'loading'
                  ? (language === 'fa' ? 'در حال ارسال...' : 'Sending...')
                  : (language === 'fa' ? 'ارسال پیام' : 'Send Message')}
              </button>

              {status === 'success' && (
                <div className="form-status-message form-status-success">
                  {language === 'fa' ? 'پیام شما با موفقیت ارسال شد' : 'Message sent successfully'}
                </div>
              )}
              {status === 'error' && (
                <div className="form-status-message form-status-error">
                  {language === 'fa' ? 'خطا در ارسال پیام' : 'Error sending message'}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}