"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { poppins } from "../fonts";
import Skills from "./skills";
import Experience from "./experience";

export default function AboutText() {
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  } else {
    return (
      <>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 0, x: 200 }}
          className='text-3xl font-medium capitalize mb-8 text-center px-4'
        >
          About me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 0, x: 200 }}
          className={`${poppins.className} text-base md:text-lg px-4`}
        >
          <p className='my-2'>
            {" "}
            Glad you're here! I&apos;m Monzer Danesh—a web developer and a
            digital artisan weaving vibrant online experiences.
          </p>
          <p className='my-2'>
            Originating from Sanandaj, Kurdistan, I embarked on my journey in
            2021. As a self-taught enthusiast, I passionately delved into
            mastering the intricacies of web development. I immersed myself in
            learning various technologies, wielding a spectrum of programming
            languages and frameworks, with a particular focus on JavaScript.
          </p>
          <p className='my-2'>
            {" "}
            Eagerly embracing emerging technologies, I keep my creations
            innovative. I&apos;m continually expanding my horizon, diving into
            new programming languages and technologies, ensuring my digital
            creations stay at the cutting edge.
          </p>
          <p>
            This space encapsulates my passion for crafting digital marvels—a
            fusion of diverse expertise and unwavering enthusiasm for the
            evolving web. Together, let's explore the boundless possibilities
            that the digital realm offers. Thank you for joining me on this
            journey!
          </p>
        </motion.p>
      </>
    );
  }
}
