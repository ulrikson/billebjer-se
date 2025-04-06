import React from "react";
import Image from "next/image";

const JunoSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          {/* Make sure juno.jpg is in the public folder */}
          <Image
            src="/juno.webp" // Ensure this path is correct
            alt="Juno the Nova Scotia Duck Tolling Retriever"
            width={400} // Adjusted width
            height={400} // Adjusted height
            className="rounded-lg shadow-md w-full h-auto grayscale"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Meet Juno</h2>
          <p className="text-lg text-gray-600 mb-6">
            My Nova Scotia Duck Tolling Retriever.
          </p>
          {/* Replace with actual contact link or functionality */}
          <a
            href="mailto:erik@billebjer.com" // Example mailto link
            className="inline-block bg-white text-black text-sm border border-black rounded-full px-6 py-2 hover:bg-gray-100 transition-colors"
          >
            CONTACT JUNO
          </a>
        </div>
      </div>
    </section>
  );
};

export default JunoSection;
