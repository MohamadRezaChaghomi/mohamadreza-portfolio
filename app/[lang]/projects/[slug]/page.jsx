import { projects } from '@/lib/constants/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

export default async function ProjectDetailPage({ params }) {
  const { lang, slug } = await params;
  const project = projects.find(p => p.id === slug);
  
  if (!project) notFound();

  return (
    <section className="project-detail-section">
      <div className="project-detail-container">
        {/* Breadcrumb */}
        <div className="breadcrumb-nav mb-8">
          <Link href={`/${lang}`} className="breadcrumb-item hover:text-[rgb(var(--accent-primary))]">
            {lang === 'fa' ? 'خانه' : 'Home'}
          </Link>
          <span className="breadcrumb-separator">/</span>
          <Link href={`/${lang}#projects`} className="breadcrumb-item hover:text-[rgb(var(--accent-primary))]">
            {lang === 'fa' ? 'پروژه‌ها' : 'Projects'}
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span>{project.title[lang]}</span>
        </div>

        {/* Hero Image */}
        <div className="project-detail-image mb-12">
          <img
            src={project.imageUrl}
            alt={project.title[lang]}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header with Title and Meta */}
        <div className="mb-12">
          <h1 className="project-detail-title">
            {project.title[lang]}
          </h1>
          <p className="project-detail-description">
            {project.longDescription?.[lang] || project.description[lang]}
          </p>

          {/* Meta Information */}
          <div className="project-detail-meta">
            <div className="project-meta-card">
              <div className="project-meta-label">
                {lang === 'fa' ? 'دسته‌بندی' : 'Category'}
              </div>
              <div className="project-meta-value text-base">
                {project.category || (lang === 'fa' ? 'پروژه' : 'Project')}
              </div>
            </div>
            <div className="project-meta-card">
              <div className="project-meta-label">
                {lang === 'fa' ? 'نقش' : 'Role'}
              </div>
              <div className="project-meta-value text-base">
                {project.role?.[lang] || (lang === 'fa' ? 'توسعه‌دهنده' : 'Developer')}
              </div>
            </div>
            <div className="project-meta-card">
              <div className="project-meta-label">
                {lang === 'fa' ? 'دستاورد' : 'Achievement'}
              </div>
              <div className="project-meta-value text-base">
                {project.achievement?.[lang] || (lang === 'fa' ? 'موفق' : 'Successful')}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="tech-stack-section">
          <h2 className="project-detail-section-title">
            {lang === 'fa' ? 'تکنولوژی‌ها' : 'Technologies'}
          </h2>
          <div className="tech-stack">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-item-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Section */}
        {project.features?.[lang] && (
          <div className="features-section">
            <h2 className="project-detail-section-title">
              {lang === 'fa' ? 'ویژگی‌ها' : 'Features'}
            </h2>
            <div className="features-list">
              {project.features[lang].map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <CheckCircle2 className="feature-icon" size={20} />
                  <p className="feature-text">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call-to-Action Links */}
        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button project-link-github"
            >
              <Github size={20} />
              {lang === 'fa' ? 'مشاهده روی GitHub' : 'View on GitHub'}
            </a>
          )}
          <Link
            href={`/${lang}#projects`}
            className="project-link-button project-link-live"
          >
            <ArrowLeft size={20} />
            {lang === 'fa' ? 'بازگشت به پروژه‌ها' : 'Back to Projects'}
          </Link>
        </div>
      </div>
    </section>
  );
}