'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import '@/styles/error.css';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <section className="error-section">
          <div className="error-container">
            <div className="error-code">404</div>
            <h1 className="error-title">Page Not Found</h1>
            <p className="error-description">The page you're looking for doesn't exist or has been removed.</p>

            <div className="error-decoration">
              <Home size={24} />
              <ArrowLeft size={24} />
              <Home size={24} />
            </div>

            <div className="error-actions">
              <Link href="/en" className="error-button">
                <Home size={18} />
                Back to Home
              </Link>
              <Link href="/fa" className="error-button-secondary">
                <Home size={18} />
                صفحه اصلی
              </Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
