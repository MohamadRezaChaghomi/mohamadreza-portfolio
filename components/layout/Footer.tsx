'use client';

interface FooterProps {
  language: 'fa' | 'en';
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 border-t border-[rgb(var(--glass-border))]">
      <div className="container mx-auto text-center text-[rgb(var(--text-secondary))]">
        <p>
          © {currentYear}{' '}
          {language === 'fa'
            ? 'محمدرضا چاقمی - تمامی حقوق محفوظ است'
            : 'Mohammad Reza Chaghomi - All rights reserved'}
        </p>
      </div>
    </footer>
  );
}