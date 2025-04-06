import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const JunoSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/juno.webp"
            alt="Juno the Nova Scotia Duck Tolling Retriever"
            width={400}
            height={400}
            className="rounded-lg shadow-md w-full h-auto grayscale"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Meet Juno</h2>
          <p className="text-lg mb-6">My Nova Scotia Duck Tolling Retriever.</p>
          <Link href="mailto:juno@billebjer.se" legacyBehavior>
            <Button variant="outline" size="lg" asChild>
              <a>
                <Mail className="h-5 w-5 mr-2" />
                CONTACT JUNO
              </a>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JunoSection;
