import React from "react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  // TODO: Fetch project details based on params.slug
  // For now, just display the slug.

  return (
    <main className="min-h-screen p-16">
      <h1 className="text-4xl font-bold mb-8">Project Details</h1>
      <p>Project Slug: {params.slug}</p>
      {/* Add project-specific content here */}
    </main>
  );
};

export default ProjectPage;
