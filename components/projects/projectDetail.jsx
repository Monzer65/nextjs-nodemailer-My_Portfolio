/** @format */

import { projects } from "@/lib/data";
import Image from "next/image";

export default function ProjectDetail({ title }) {
  const project = projects.find((p) => p.title === decodeURIComponent(title));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="mb-4">{project.shortDescription}</p>
      <Image
        width={300}
        height={300}
        src={project.imageUrl}
        alt={project.title}
        priority={true}
        className="w-auto"
      />
      <div className="flex justify-between items-center">
        <a
          href={project.link}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Visit Site
        </a>
        <a
          href={project.repository}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
