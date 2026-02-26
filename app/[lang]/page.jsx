import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default async function HomePage({ params }) {
  const { lang } = await params;
  const language = lang === 'fa' ? 'fa' : 'en';

  return (
    <>
      <Header />
      <main>
        <Hero language={language} />
        <ProjectsGrid language={language} />
        <Skills language={language} />
        <About language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}