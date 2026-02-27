'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '@/lib/constants/projects';

export default function ProjectsGrid({ language }) {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-heading section-heading"
        >
          {language === 'fa' ? 'پروژه‌ها' : 'Projects'}
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}