import React from "react";

const LanguageSwitcher = ({ current, onSwitch }) => (
  <div className="flex gap-2">
    <button
      className={`px-3 py-1 rounded-lg text-sm font-bold transition-colors duration-200 ${current === "fa" ? "bg-[var(--accent-primary)] text-white" : "bg-[var(--glass-bg)] text-[var(--accent-primary)]"}`}
      onClick={() => onSwitch("fa")}
      aria-label="فارسی"
    >
      فارسی
    </button>
    <button
      className={`px-3 py-1 rounded-lg text-sm font-bold transition-colors duration-200 ${current === "en" ? "bg-[var(--accent-primary)] text-white" : "bg-[var(--glass-bg)] text-[var(--accent-primary)]"}`}
      onClick={() => onSwitch("en")}
      aria-label="English"
    >
      EN
    </button>
  </div>
);

export default LanguageSwitcher;