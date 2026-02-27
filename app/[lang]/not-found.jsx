'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  const params = useParams();
  const lang = params.lang || 'fa';

  const messages = {
    fa: {
      title: 'صفحه یافت نشد',
      code: '404',
      description: 'متاسفانه صفحه‌ای که دنبال‌اش می‌گردید وجود ندارد یا حذف شده است.',
      home: 'بازگشت به صفحه اصلی',
      projects: 'مشاهده پروژه‌ها',
      suggestions: 'نکات مفید',
      suggestion1: 'آدرس صفحه را دوباره بررسی کنید',
      suggestion2: 'از فهرست پروژه‌ها استفاده کنید',
      suggestion3: 'با من تماس بگیرید اگر مشکلی پیدا کردید',
    },
    en: {
      title: 'Page Not Found',
      code: '404',
      description: 'Sorry, the page you\'re looking for doesn\'t exist or has been removed.',
      home: 'Back to Home',
      projects: 'View Projects',
      suggestions: 'Helpful Tips',
      suggestion1: 'Double-check the page address',
      suggestion2: 'Browse the projects list',
      suggestion3: 'Contact me if you found an issue',
    }
  };

  const msg = messages[lang] || messages['en'];

  return (
    <section className="error-section">
      <div className="error-container">
        <div className="error-code">{msg.code}</div>
        <h1 className="error-title">{msg.title}</h1>
        <p className="error-description">{msg.description}</p>

        <div className="error-decoration">
          <Search size={24} />
          <Home size={24} />
          <ArrowLeft size={24} />
        </div>

        <div className="error-actions">
          <Link href={`/${lang}`} className="error-button">
            <Home size={18} />
            {msg.home}
          </Link>
          <Link href={`/${lang}#projects`} className="error-button-secondary">
            <Search size={18} />
            {msg.projects}
          </Link>
        </div>

        <div className="error-suggestions">
          <p className="error-suggestions-title">💡 {msg.suggestions}</p>
          <ul className="error-suggestions-list">
            <li className="error-suggestions-item">{msg.suggestion1}</li>
            <li className="error-suggestions-item">{msg.suggestion2}</li>
            <li className="error-suggestions-item">{msg.suggestion3}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
