import React from "react";

interface TimelineItem {
  title: string;
  subtitle?: string;
  date: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => (
  <div className="relative border-s-2 border-[var(--accent-primary)] pl-8">
    {items.map((item, idx) => (
      <div key={idx} className="mb-10 relative">
        <div className="absolute -left-5 top-0 w-4 h-4 rounded-full bg-[var(--accent-primary)] border-2 border-white shadow"></div>
        <div className="mb-1 text-lg font-bold text-[var(--accent-primary)]">{item.title}</div>
        {item.subtitle && <div className="text-sm text-[var(--text-secondary)] mb-1">{item.subtitle}</div>}
        <div className="text-xs text-[var(--text-secondary)] mb-2">{item.date}</div>
        {item.description && <div className="text-sm text-[var(--text-primary)]">{item.description}</div>}
      </div>
    ))}
  </div>
);

export default Timeline;
