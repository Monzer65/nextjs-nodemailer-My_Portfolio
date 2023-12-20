/** @format */

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Portfolio() {
  return (
    <div
      id='projects'
      className='mb-16 md:mb-20 lg:mb-24 mt-8 max-w-screen-xl mx-auto'
    >
      <h2 className='text-4xl lg:text-5xl font-bold capitalize mb-10 text-center'>
        My Portfolio
      </h2>
      <div className='grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex flex-col p-6 rounded-lg shadow-lg bg-white dark:bg-gray-600'
          >
            <div className='w-full h-48 lg:h-64 relative'>
              <Image
                src={project.mainImage}
                alt={project.title}
                layout='fill'
                objectFit='cover'
                className='rounded-t-lg'
              />
            </div>
            <h3 className='text-xl lg:text-2xl font-semibold mt-4 mb-2'>
              {project.title}
            </h3>
            <p className='text-sm lg:text-base mb-4'>
              {project.shortDescription}
            </p>
            <Link
              href={`/projects/${project.title}`}
              className='block w-full text-center py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300'
            >
              Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
