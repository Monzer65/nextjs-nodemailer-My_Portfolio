/** @format */

import Image from "next/image";
import projectPicture from "@/public/project.jpg";
import { LinkIcon } from "@heroicons/react/24/outline";

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
        <div className=" p-4 rounded-md shadow-md ">
          <Image
            width={300}
            height={300}
            src={projectPicture}
            alt="Project 1"
            className="w-full"
          />
          <h3>Project 1</h3>
          <p>A brief description of Project 1.</p>
          <div className="flex flex-col gap-2 mt-6">
            <a
              href="https://project1.com"
              className="flex gap-1 items-center justify-center py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              View Project <LinkIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/project1"
              className="flex gap-1 items-center justify-center py-2 px-4 rounded-md bg-blue-300 hover:bg-blue-400 dark:bg-blue-900 dark:hover:bg-blue-800"
            >
              GitHub Repository <LinkIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className=" p-4 rounded-md shadow-md ">
          <Image
            width={300}
            height={300}
            src={projectPicture}
            alt="Project 2"
            className="w-full"
          />
          <h3>Project 2</h3>
          <p>A brief description of Project 2.</p>
          <div className="flex flex-col gap-2 mt-6">
            <a
              href="https://project2.com"
              className="flex gap-1 items-center justify-center py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              View Project <LinkIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/project2"
              className="flex gap-1 items-center justify-center py-2 px-4 rounded-md bg-blue-300 hover:bg-blue-400 dark:bg-blue-900 dark:hover:bg-blue-800"
            >
              GitHub Repository <LinkIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className=" p-4 rounded-md shadow-md ">
          <Image
            width={300}
            height={300}
            src={projectPicture}
            alt="Project 3"
            className="w-full"
          />
          <h3>Project 3</h3>
          <p>A brief description of Project 3.</p>
          <div className="flex flex-col gap-2 mt-6">
            <a
              href="https://project3.com"
              className="flex gap-1 items-center justify-center py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              View Project <LinkIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/project3"
              className="flex gap-1 items-center justify-center py-2 px-4 rounded-md bg-blue-300 hover:bg-blue-400 dark:bg-blue-900 dark:hover:bg-blue-800"
            >
              GitHub Repository <LinkIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
