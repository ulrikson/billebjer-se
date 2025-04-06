import React from "react";
import { Github, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-10 text-gray-500 text-sm">
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://billebjer.se"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <Globe className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/ebillebjer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/erikbillebjer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
      <p>&copy; {currentYear} Billebjer Konsult AB</p>
    </footer>
  );
};

export default Footer;
