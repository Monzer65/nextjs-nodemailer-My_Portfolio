/** @format */

"use client";

import { Lusitana } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
          className={`${lusitana.className} font-bold text-red-500 text-2xl md:text-4xl mb-10`}
        >
          About me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 0, x: 200 }}
          className="text-xl md:text-2xl text-justify"
        >
          Greetings from the digital realm! I&apos;m Monzer—a web developer and
          a digital artisan weaving vibrant online experiences. I channel my
          fiery passion for technology into crafting websites that not only
          mesmerize but also guide users on seamless digital voyages.
          <br />
          Originating in 1986, my journey began in the world of food science.
          While pursuing a Master&apos;s degree in Food Science, I dabbled in
          unraveling the intricacies of food factories. However, my fascination
          with technology led me to pivot from the culinary arts to the
          ever-evolving landscape of web development.
          <br />
          A self-taught enthusiast, I devoted myself to mastering the nuances of
          web development. I immersed in various technologies, wielding a
          spectrum of programming languages and frameworks. My expertise extends
          from the dynamic terrains of Next.js and Vue.js to backend prowess in
          Node.js with the Express framework. Crafting robust solutions
          utilizing serverless architectures and seamlessly integrating
          databases like MongoDB fuels my passion. But my journey is a perpetual
          exploration.
          <br />
          With an unquenchable thirst for knowledge, I eagerly embrace emerging
          technologies to keep my creations innovative. I&apos;m continually
          expanding my horizon, diving into new programming languages and
          technologies, ensuring my digital creations stay at the cutting edge.
          <br />
          This space epitomizes my fervor for creating digital marvels.
          It&apos;s a fusion of diverse expertise and unwavering enthusiasm for
          the evolving web. Join me in discovering the boundless possibilities
          that the digital realm offers. Thank you for joining me on this
          journey!
          <br />
          <br />
          Warm regards,
          <br />
          Monzer
        </motion.p>
      </>
    );
  }
}
