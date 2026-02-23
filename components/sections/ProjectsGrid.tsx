'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '@/lib/constants/projects';

interface ProjectsGridProps {
  language: 'fa' | 'en';
}

export default function ProjectsGrid({ language }: ProjectsGridProps) {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {language === 'fa' ? 'پروژه‌ها' : 'Projects'}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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