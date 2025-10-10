"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, inView, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRightIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import Linkedin from "@/public/linkedin.svg";
import Github from "@/public/github.svg";
import avatar from "@/public/avatar.jpg";
import { fira_code } from "../fonts";

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id='home'
      className=' bg-gray-400 dark:bg-gray-800 rounded-md w-[90%] min-[400px]:w-max sm:w-max m-auto shadow-xl'
    >
      <div className='relative top-4 -right-4 bg-white dark:bg-gray-600 rounded-md text-center pb-4'>
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
            background: "radial-gradient(#fff, #CCCCCC)",
            backgroundRepeat: "no-repeat",
            borderRadius: "0.375rem",
          }}
          className='min-[400px]:min-w-[330px] '
        >
          <Image
            src={avatar}
            alt='Portrait'
            width={200}
            height={300}
            quality={100}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              borderRadius: "50%",
              background: "radial-gradient(circle)",
            }}
          ></div>
        </div>
        <h1 className='my-4 text-xl sm:text-2xl lg:text-3xl'>Monzer Danesh</h1>
        <p
          className={`${fira_code.className} px-2 text-sm w-max m-auto animate-typing overflow-hidden whitespace-nowrap text-sky-500`}
        >
          Full-stack Web Developer
        </p>
        <motion.div
          className='flex flex-col items-center justify-center gap-4 my-4'
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{
            duration: 2,
          }}
          ref={ref}
        >
          <Link
            href='/contact'
            className='group bg-gray-900 dark:bg-gray-100 py-2 px-4 text-white dark:text-gray-800 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition text-xs'
          >
            Send me a message
            <ArrowRightIcon className='opacity-70 group-hover:translate-x-1 transition w-4' />
          </Link>

          <a
            className='group bg-gray-100 py-2 px-4 text-gray-800 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-200 active:scale-105 transition cursor-pointer text-xs'
            href='/CV1.pdf'
            download
          >
            DOWNLOAD CV{" "}
            <DocumentArrowDownIcon className='opacity-70 group-hover:translate-x-1 transition w-5' />
          </a>
          <div className='flex gap-4'>
            <a
              className='w-6 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition '
              href='https://www.linkedin.com/in/monzer-danesh-602b6557'
              target='_blank'
            >
              <Linkedin className='fill-gray-900 dark:fill-gray-100' />
              <span className='sr-only'>Linkedin</span>
            </a>

            <a
              className='w-6 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition '
              href='https://github.com/Monzer65'
              target='_blank'
            >
              <Github className='fill-gray-900 dark:fill-gray-100' />{" "}
              <span className='sr-only'>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
