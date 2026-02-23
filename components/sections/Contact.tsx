'use client';

import { useState } from 'react';

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
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

  // در JSX فرم:
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      value={formData.name}
      onChange={(e) => setFormData({...formData, name: e.target.value})}
      placeholder={language === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
      required
      className="w-full p-4 glass bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-primary))]"
    />
    {/* مشابه برای email و message */}
    <button
      type="submit"
      disabled={status === 'loading'}
      className="w-full p-4 bg-[rgb(var(--accent-primary))] text-white rounded-xl hover:bg-opacity-90 transition-colors disabled:opacity-50"
    >
      {status === 'loading' ? (language === 'fa' ? 'در حال ارسال...' : 'Sending...') : 
        (language === 'fa' ? 'ارسال پیام' : 'Send Message')}
    </button>
    {status === 'success' && (
      <p className="text-green-500 text-center">
        {language === 'fa' ? 'پیام شما با موفقیت ارسال شد' : 'Message sent successfully'}
      </p>
    )}
    {status === 'error' && (
      <p className="text-red-500 text-center">
        {language === 'fa' ? 'خطا در ارسال پیام' : 'Error sending message'}
      </p>
    )}
  </form>