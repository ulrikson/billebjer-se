import React from "react";
import Button from "./Button";

interface ProjectLinkProps {
  slug: string;
  name: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ slug, name }) => {
  return (
    <Button
      href={`/projects/${slug}`}
      variant="dark"
      className="block text-center px-5"
    >
      {name}
    </Button>
  );
};

export default ProjectLink;
