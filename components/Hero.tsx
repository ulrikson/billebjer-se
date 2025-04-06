import React from "react";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="text-center py-16">
      <h1 className="text-5xl font-bold">Erik Billebjer Ulrikson</h1>
      <h2 className="text-2xl mt-2">Billebjer Konsult AB</h2>
      <p className="mt-4 text-gray-600">
        Full Stack Developer and Product Manager
      </p>
      <a
        href="https://github.com/ebillebjer"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center bg-white text-black border border-black rounded-full px-6 py-2 hover:bg-gray-100 transition-colors"
      >
        <FaGithub className="h-5 w-5 mr-2" />
        GITHUB
      </a>
    </section>
  );
};

export default Hero;
