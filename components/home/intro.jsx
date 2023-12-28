/** @format */

"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRightIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import Linkedin from "@/public/linkedin.svg";
import Github from "@/public/github.svg";
import avatar from "@/public/avatar.png";

export default function Intro() {
  return (
    <section
      id='home'
      className='mb-28 max-w-[50rem] text-center mx-auto sm:mb-0 md:mt-6 scroll-mt-[100rem] '
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <Image
              src={avatar}
              alt='Ricardo portrait'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-gray-900 dark:border-white shadow-xl'
            />
          </motion.div>

          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 425,
              delay: 0.75,
              duration: 0.75,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0, delay: 0.75 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className='font-bold'>Hey there, I&apos;m Monzer.</span> I&apos;m
        a dedicated full-stack web developer fueled by a passion for crafting
        intuitive and captivating websites. With a robust skill set in multiple{" "}
        <span className='italic'>Javascript frameworks</span>, focusing on{" "}
        <span className='underline'>React (Next.js)</span>, I thrive on
        embracing and mastering new technologies.
      </motion.h1>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.75,
        }}
      >
        <Link
          href='/contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me here
          <ArrowRightIcon className='opacity-70 group-hover:translate-x-1 transition w-[30px]' />
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/CV.pdf'
          download
        >
          Download CV{" "}
          <DocumentArrowDownIcon className='opacity-80 text-black dark:text-white group-hover:translate-y-1 transition w-[30px]' />
        </a>

        <a
          className='w-8 h-8 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition '
          href='https://www.linkedin.com/in/monzer-danesh-602b6557'
          target='_blank'
        >
          <Linkedin className='fill-gray-900 dark:fill-gray-100' />
        </a>

        <a
          className='w-8 h-8 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition '
          href='https://github.com/Monzer65'
          target='_blank'
        >
          <Github className='fill-gray-900 dark:fill-gray-100' />
        </a>
      </motion.div>
    </section>
  );
}
