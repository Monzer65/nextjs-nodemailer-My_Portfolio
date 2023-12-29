/** @format */
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
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0, x: 200 }}
        className='flex space-x-4 ml-4 mb-2'
      >
        <a
          href='https://twitter.com/Monzer86'
          className=' w-8 h-8 transition-transform hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Twitter className='fill-gray-900 dark:fill-gray-100' />
          <span className='sr-only'>Twitter</span>
        </a>
        <a
          href='https://www.facebook.com/Mondan1986?mibextid=ZbWKwL'
          className='w-8 h-8 transition-transform hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Facebook className='fill-gray-900 dark:fill-gray-100' />
          <span className='sr-only'>Facebook</span>
        </a>
        <a
          href='https://github.com/Monzer65'
          className=' w-8 h-8 transition-transform hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github className='fill-gray-900 dark:fill-gray-100' />
          <span className='sr-only'>Github</span>
        </a>
        <a
          className='w-8 h-8 transition-transform hover:scale-110'
          href='https://www.linkedin.com/in/monzer-danesh-602b6557'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Linkedin className='fill-gray-900 dark:fill-gray-100' />
          <span className='sr-only'>Linkedin</span>
        </a>
      </motion.div>
    );
  }
}
