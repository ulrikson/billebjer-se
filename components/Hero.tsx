import React from "react";
import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

const Hero = () => {
  return (
    <section className="relative text-center py-32">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Erik Billebjer Ulrikson
        </h1>
        <h2 className="text-4xl mt-8 font-bold">Billebjer Konsult AB</h2>
        <p className="text-xl mt-8 mb-16">
          Full Stack Developer and Product Manager
        </p>
        <Link
          href="https://github.com/ulrikson"
          legacyBehavior
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="lg" asChild>
            <a>
              <Github className="h-5 w-5 mr-2" />
              GITHUB
            </a>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
