"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function ModalCarousel({ isOpen, onClose, project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const closeModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className='fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-75 modal-overlay backdrop-blur-sm'
          onClick={closeModal}
        >
          <div className=' max-w-lg overflow-y-auto w-[300px] sm:w-[400px] md:w-[450px] h-[60vh] '>
            <button
              className='absolute top-2 right-2  text-white z-10 focus:outline-none'
              onClick={onClose}
            >
              <XMarkIcon class='h-10 w-10 rounded-full text-gray-800 bg-white p-2' />
            </button>
            <button
              className='absolute bottom-6 lg:top-1/2 transform -translate-y-1/2 -translate-x-12 lg:-translate-x-4  left-1/2 mr-2 lg:mr-0 lg:left-1/4 text-white z-10 focus:outline-none'
              onClick={handlePrev}
            >
              <ChevronLeftIcon class='h-10 w-10 rounded-full text-gray-800 bg-white p-2' />
            </button>
            <button
              className='absolute bottom-6 lg:top-1/2 transform -translate-y-1/2 translate-x-12 lg:translate-x-4 right-1/2 lg:right-1/4 text-white z-10 focus:outline-none'
              onClick={handleNext}
            >
              <ChevronRightIcon class='h-10 w-10 rounded-full text-gray-800 bg-white p-2' />
            </button>
            <Image
              src={project.images[currentImageIndex].imageUrl}
              alt={project.title}
              style={{ width: "100%", objectFit: "contain", height: "auto" }}
              className='rounded-lg'
              layout='responsive'
            />
          </div>
          <p className='text-center text-white mt-2'>
            image {currentImageIndex + 1} of {project.images.length}
          </p>
          <p className='text-center text-white'>
            {project.images[currentImageIndex].imageTitle}
          </p>
        </div>
      )}
    </>
  );
}
