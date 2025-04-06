import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectLinkProps {
  slug: string;
  name: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ slug, name }) => {
  return (
    <Link href={`/projects/${slug}`} legacyBehavior>
      <Button variant="default" size="lg" asChild>
        <a>{name}</a>
      </Button>
    </Link>
  );
};

export default ProjectLink;
