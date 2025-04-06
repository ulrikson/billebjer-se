import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ModeToggle";

const Hero = () => {
  return (
    <section className="relative text-center py-32">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <h1 className="text-7xl font-bold">Erik Billebjer Ulrikson</h1>
      <h2 className="text-4xl mt-8 font-bold">Billebjer Konsult AB</h2>
      <p className="text-xl mt-8">Full Stack Developer and Product Manager</p>
      <Link
        href="https://github.com/ulrikson"
        legacyBehavior
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="lg" className={cn("mt-16")} asChild>
          <a>
            <FaGithub className="h-5 w-5 mr-2" />
            GITHUB
          </a>
        </Button>
      </Link>
    </section>
  );
};

export default Hero;
