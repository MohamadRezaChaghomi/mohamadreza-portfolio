import React from "react";
import { Github } from 'lucide-react';

const ProjectCard = ({ project, language }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            controls
            poster={project.imageUrl}
            className="project-video"
          />
        ) : (
          <img
            src={project.imageUrl}
            alt={project.title[language]}
            className="project-image"
          />
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">
          {project.title[language]}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-title-link"
              aria-label="GitHub Link"
            >
              <Github size={20} />
            </a>
          )}
        </h3>
        <p className="project-description">
          {project.description[language]}
        </p>
        <div className="project-tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={`/${language}/projects/${project.id}`}
          className="project-button"
        >
          {language === 'fa' ? 'مشاهده جزئیات' : 'View Details'}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;