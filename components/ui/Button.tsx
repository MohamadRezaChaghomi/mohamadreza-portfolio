import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary shadow-md
        ${variant === "primary"
          ? "bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-secondary)]"
          : "bg-[var(--glass-bg)] text-[var(--accent-primary)] border border-[var(--glass-border)] hover:bg-[var(--accent-secondary)] hover:text-white"}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
