"use client";

import { projects } from "@/lib/data";
import Image from "next/image";
import ModalCarousel from "./imageCarousel";
import { useState } from "react";
import clsx from "clsx";
export default function ProjectDetail({ title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const project = projects?.find((p) => p.title === decodeURIComponent(title));

  if (!project) {
    return <div className='p-4'>Project not found</div>;
  }

  return (
    <div className='mb-16 md:mb-20 lg:mb-24 mt-8 max-w-xl mx-auto'>
      <h1 className='text-3xl lg:text-4xl font-bold mb-4 text-center'>
        {project?.title}
      </h1>
      <div className='mb-6'>
        {project?.technologies.map((data, index) => (
          <div key={index} className='text-lg mb-6'>
            <h2 className='text-xl font-bold mb-2'>{data.title}</h2>
            <div>
              {data.techs.map((t, index) => (
                <p
                  key={index}
                  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                >
                  {t}
                </p>
              ))}
            </div>
            <p className='text-lg'>{data.desc}</p>
          </div>
        ))}
      </div>
      <div>
        {project?.longDescription.map((data, index) => (
          <div key={index} className='text-lg mb-6'>
            <h2 className='text-xl font-bold mb-2'>{data?.title}</h2>
            <ul className=' list-inside'>
              {data?.desc.map((d, index) => (
                <li
                  key={index}
                  className={clsx({
                    "list-item list-disc ml-6": data.desc.length > 1,
                  })}
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='relative w-full h-80 lg:h-96' onClick={openModal}>
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
        isOpen={isModalOpen}
        onClose={closeModal}
        project={project}
      />
      <div className='flex justify-center mt-6 space-x-4'>
        <a
          href={project?.website}
          target='_blank'
          className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded transition duration-300'
        >
          Visit Site
        </a>
        <a
          href={project?.repository === "disabled" ? "#" : project?.repository}
          target={project?.repository === "disabled" ? "" : "_blank"}
          className={
            project?.repository === "disabled"
              ? "hidden"
              : "bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded transition duration-300"
          }
        >
          View Code
        </a>
      </div>
    </div>
  );
}
