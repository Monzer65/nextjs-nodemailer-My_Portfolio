"use client";
import Image from "next/image";
import { projects } from "@/lib/data";
import { useState } from "react";
import ModalCarousel from "./imageCarousel";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      id='projects'
      className='mb-16 md:mb-20 lg:mb-24 mt-8 max-w-screen-xl mx-auto'
    >
      <h2 className='text-3xl font-medium capitalize mb-8 text-center px-4'>
        My Portfolio
      </h2>
      <div className='grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2'>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className='flex flex-col max-w-[450px] mx-auto p-6 rounded-lg shadow-lg bg-white dark:bg-gray-600'
            >
              <div
                className='relative w-full h-80 lg:h-96'
                onClick={() => openModal(project.id)}
              >
                <Image
                  src={project?.mainImage}
                  alt={project?.title}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='top'
                  className='rounded-lg cursor-pointer'
                />
              </div>
              <ModalCarousel
                isOpen={selectedProject === project.id}
                onClose={closeModal}
                project={project}
              />

              <h3 className='text-xl lg:text-2xl font-semibold mt-4 mb-2'>
                {project.title}
              </h3>
              <p className='text-sm lg:text-base mb-4'>
                {project.shortDescription}
              </p>
              <a
                href={project?.website}
                target='_blank'
                className='bg-blue-800 text-center hover:bg-blue-900 text-white dark:bg-stone-200  dark:hover:bg-stone-100 dark:text-blue-900 font-bold py-2 px-6 rounded transition duration-300'
              >
                Demo
              </a>
              {/* <Link
              href={`/projects/${project.title}`}
              className='block w-full text-center py-2 px-4 bg-green-800 hover:bg-green-900 text-white dark:bg-stone-200 dark:hover:bg-green-200 dark:text-green-900  rounded-lg transition duration-300'
            >
              Demo
            </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
