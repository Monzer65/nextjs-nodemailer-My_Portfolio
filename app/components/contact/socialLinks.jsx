/** @format */
"use client";
import Image from "next/image";
import facebook from "@/public/facebook.svg";
import twitter from "@/public/x-twitter.svg";
import github from "@/public/github.svg";
import { motion } from "framer-motion";

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0, x: 200 }}
      className="flex space-x-4 ml-4"
    >
      <a
        href="https://twitter.com/Monzer86"
        className="w-10 h-10 p-1 bg-white rounded-full transition-transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image width={50} height={50} alt="x icon" src={twitter} />
      </a>
      <a
        href="https://www.facebook.com/Mondan1986?mibextid=ZbWKwL"
        className="w-10 h-10 p-1 bg-white rounded-full transition-transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image width={50} height={50} alt="facebooc icon" src={facebook} />
      </a>
      <a
        href="https://github.com/Monzer65"
        className="w-10 h-10 p-1 bg-white rounded-full transition-transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image width={50} height={50} alt="github icon" src={github} />
      </a>
    </motion.div>
  );
}
