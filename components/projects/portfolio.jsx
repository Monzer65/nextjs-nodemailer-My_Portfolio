/** @format */

import Link from "next/link";
// import image1 from "@/public/project.jpg";
// import image2 from "@/public/avatar.png";
// import image3 from "@/public/logo.png";

import Image from "next/image";

// export const projects = [
//   {
//     id: "1",
//     name: "Project 1",
//     description: "A brief description of Project 1.",
//     imageUrl: image1,
//   },
//   {
//     id: "2",
//     name: "Project 2",
//     description: "A brief description of Project 2.",
//     imageUrl: image2,
//   },
//   {
//     id: "3",
//     name: "Project 3",
//     description: "A brief description of Project 3.",
//     imageUrl: image3,
//   },
//   {
//     name: "Project 4",
//     description: "A brief description of Project 4.",
//     imageUrl: image3,
//   },
// ];
import { projects } from "@/lib/data";
export default function Portfolio() {
  return (
    <section
      id="projects"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mx-auto"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My Portfolio
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col p-4 rounded-md shadow-2xl">
            <div className="w-full h-[200px]">
              <Image
                width={300}
                height={300}
                src={project.imageUrl}
                alt={project.title}
                className="aspect-video"
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
            <Link
              href={`/projects/${project.title}`}
              className="bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2"
            >
              Detail
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
