'use client';

export default function Footer({ language }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
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