/** @format */

import { projects } from "@/lib/data";
import Image from "next/image";

export default function ProjectDetail({ title }) {
  const project = projects.find((p) => p.title === decodeURIComponent(title));

  if (!project) {
    return <div className="p-4">Project not found</div>;
  }

  return (
    <div className="mb-16 md:mb-20 lg:mb-24 mt-8 max-w-xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
        {project.title}
      </h2>
      <p className="text-lg mb-6">{project.longDescription}</p>
      <div className="relative w-full h-80 lg:h-96">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <a
          href={project.link}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300"
        >
          Visit Site
        </a>
        <a
          href={project.repository}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition duration-300"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
