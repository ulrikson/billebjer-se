import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import JunoSection from '@/components/JunoSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <JunoSection />
      {/* Footer is included via layout.tsx */}
    </main>
  );
}
