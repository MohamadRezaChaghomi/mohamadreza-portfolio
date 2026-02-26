import React from "react";

const ProjectCard = ({ project, language }) => {
  return (
    <div
      className="relative glass rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:rotate-1 hover:scale-105 cursor-pointer group hover:shadow-2xl"
    >
      {project.videoUrl ? (
        <video
          src={project.videoUrl}
          controls
          poster={project.imageUrl}
          className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300 rounded-t-2xl"
        />
      ) : (
        <img
          src={project.imageUrl}
          alt={project.title[t('lang')]}
          className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          {project.title[language]}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-accent-primary hover:text-accent-secondary">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            </a>
          )}
        </h3>
        <p className="text-[var(--text-secondary)] mb-4 min-h-[48px]">{project.description[language]}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded text-xs text-[var(--accent-primary)]">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={`/projects/${project.id}`}
          className="inline-block px-4 py-2 bg-[rgb(var(--accent-primary))] text-white rounded-lg hover:bg-[rgb(var(--accent-primary))]/90 transition-colors text-sm font-medium"
        >
          {language === 'fa' ? 'مشاهده جزئیات' : 'View Details'}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;