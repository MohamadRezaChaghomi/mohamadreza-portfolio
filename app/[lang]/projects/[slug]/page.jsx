import { projects } from '@/lib/constants/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Github } from 'lucide-react';

export default function ProjectDetailPage({ params }) {
  const project = projects.find(p => p.id === params.slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* تصویر اصلی */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={project.imageUrl}
            alt={project.title[params.lang]}
            fill
            className="object-cover"
          />
        </div>

        {/* عنوان و توضیحات */}
        <h1 className="text-4xl font-bold mb-4">
          {project.title[params.lang]}
        </h1>
        <p className="text-xl text-[rgb(var(--text-secondary))] mb-8">
          {project.description[params.lang]}
        </p>

        {/* تکنولوژی‌ها */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">تکنولوژی‌ها</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <span key={tech} className="px-4 py-2 glass rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ویژگی‌ها */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">ویژگی‌ها</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.features[params.lang].map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* لینک گیت‌هاب */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(var(--accent-primary))] text-white rounded-xl hover:bg-opacity-90 transition-colors"
        >
          <Github size={20} />
          GitHub
        </a>
      </div>
    </div>
  );
}