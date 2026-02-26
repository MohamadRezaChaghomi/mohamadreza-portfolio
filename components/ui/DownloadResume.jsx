import React from "react";
import { Download } from "lucide-react";

const DownloadResume = ({ href }) => (
  <a
    href={href}
    download
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-white font-bold shadow hover:bg-[var(--accent-secondary)] transition-colors"
  >
    <Download size={20} />
    دانلود رزومه
  </a>
);

export default DownloadResume;