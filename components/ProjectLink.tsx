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
      <Button variant="outline" size="lg" asChild className="dark">
        <a>{name}</a>
      </Button>
    </Link>
  );
};

export default ProjectLink;
