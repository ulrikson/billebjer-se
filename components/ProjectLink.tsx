import React from 'react';
import Link from 'next/link';

interface ProjectLinkProps {
  slug: string;
  name: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ slug, name }) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block text-center text-sm border border-white rounded-full px-5 py-2 hover:bg-white hover:text-black transition-colors duration-300"
    >
      {name}
    </Link>
  );
};

export default ProjectLink; 