import React from "react";
import { Button } from "@/components/ui/button";

const getNameFromSlug = (slug: string) => {
  return slug.replace(/-/g, " ").toUpperCase();
};

const projects = [
  { slug: "leadpilot", url: "https://leadpilot.com" },
  {
    slug: "ai-cross-validation",
    url: "https://github.com/ulrikson/ai-n-cross-validation",
  },
  {
    slug: "home-dashboard",
    url: "https://github.com/ulrikson/home-dashboard",
  },
  {
    slug: "statistics-thesis",
    url: "https://github.com/ulrikson/statistics-thesis",
  },
  {
    slug: "economics-thesis",
    url: "https://handelsradet.se/forskning-och-utveckling/studentuppsatser/?s%C3%B6kord=should",
  },
  {
    slug: "site-activity-index",
    url: "https://www.dagensanalys.se/det-betyder-alltsa-att-hemsidor-i-snitt-andrar-20-procent-av-innehallet-varje-dag/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {projects.map((project) => (
          <Button
            key={project.slug}
            variant="outline"
            size="lg"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {getNameFromSlug(project.slug)}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
