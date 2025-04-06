import React from "react";
import { FaGithub } from "react-icons/fa";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="text-center py-32">
      <h1 className="text-7xl font-bold">Erik Billebjer Ulrikson</h1>
      <h2 className="text-4xl mt-8 font-bold">Billebjer Konsult AB</h2>
      <p className="text-xl mt-8">Full Stack Developer and Product Manager</p>
      <Button
        href="https://github.com/ulrikson"
        variant="light"
        icon={<FaGithub className="h-5 w-5" />}
        className="mt-16"
      >
        GITHUB
      </Button>
    </section>
  );
};

export default Hero;
