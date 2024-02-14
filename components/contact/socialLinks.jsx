"use client";
import Image from "next/image";
import Facebook from "@/public/facebook.svg";
import Twitter from "@/public/x-twitter.svg";
import Github from "@/public/github.svg";
import Linkedin from "@/public/linkedin.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SocialLinks() {
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  } else {
    return (
      <div className='flex gap-4 mx-auto md:mx-0'>
        <a
          href='https://twitter.com/Monzer86'
          className=' w-5 sm:w-6 md:w-8 transition-transform hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Twitter className='fill-gray-900 dark:fill-gray-100' />
          <span className='sr-only'>Twitter</span>
        </a>
        <a
          href='https://www.facebook.com/Mondan1986?mibextid=ZbWKwL'
          className='w-5 sm:w-6 md:w-8 transition-transform hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Facebook className='fill-gray-900 dark:fill-gray-100' />
          <span className='sr-only'>Facebook</span>
        </a>
        <a
          href='https://github.com/Monzer65'
          className=' w-5 sm:w-6 md:w-8 transition-transform hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github className='fill-gray-900 dark:fill-gray-100' />
          <span className='sr-only'>Github</span>
        </a>
        <a
          className='w-5 sm:w-6 md:w-8 transition-transform hover:scale-110'
          href='https://www.linkedin.com/in/monzer-danesh-602b6557'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Linkedin className='fill-gray-900 dark:fill-gray-100' />
          <span className='sr-only'>Linkedin</span>
        </a>
      </div>
    );
  }
}
