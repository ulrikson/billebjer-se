import React from "react";
import ProjectLink from "@/components/ProjectLink"; // Use path alias

// TODO: Replace with actual project data
const projects = [
  { slug: "leadpilot", name: "LEADPILOT" },
  { slug: "ai-cross-validation", name: "AI CROSS VALIDATION" },
  { slug: "home-dashboard", name: "HOME DASHBOARD" },
  { slug: "statistics-thesis", name: "STATISTICS THESIS" },
  { slug: "economics-thesis", name: "ECONOMICS THESIS" },
  { slug: "site-activity-index", name: "SITE ACTIVITY INDEX" },
];

const ProjectsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {projects.map((project) => (
          <ProjectLink
            key={project.slug}
            slug={project.slug}
            name={project.name}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
