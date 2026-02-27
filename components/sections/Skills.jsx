'use client';

import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiBootstrap, SiSass, SiMongodb,
  SiGit, SiGithub, SiGitlab, SiNpm, SiFigma
} from 'react-icons/si';
import { FaJava, FaCuttlefish } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Sass', icon: SiSass, color: '#CC6699' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'GitLab', icon: SiGitlab, color: '#FCA121' },
  { name: 'npm', icon: SiNpm, color: '#CB3837' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'C', icon: FaCuttlefish, color: '#A8B9CC' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

export default function Skills({ language }) {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-heading section-heading"
        >
          {language === 'fa' ? 'مهارت‌ها' : 'Skills'}
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="skill-card"
            >
              <skill.icon
                className="skill-icon"
                style={{ color: skill.color }}
              />
              <span className="skill-name">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}