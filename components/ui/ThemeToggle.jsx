import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
    aria-label="تغییر تم"
  >
    {theme === "dark" ? (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M21.64 13.64A9 9 0 0 1 12 3a1 1 0 0 0 0 2 7 7 0 0 0 0 14 1 1 0 0 0 0 2 9 9 0 0 1 9-7.36z"/></svg>
    ) : (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
    )}
  </button>
);

export default ThemeToggle;