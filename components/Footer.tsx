import React from "react";
import { Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-10 text-sm">
      <div className="flex justify-center space-x-4 mb-4">
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://billebjer.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://github.com/ulrikson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://se.linkedin.com/in/erik-billebjer-ulrikson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
      </div>
      <p>&copy; {currentYear} Billebjer Konsult AB</p>
    </footer>
  );
};

export default Footer;
