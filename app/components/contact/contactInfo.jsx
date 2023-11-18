/** @format */
"use client";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0, x: 200 }}
      className="w-full flex-1 p-4 md:mt-16 flex flex-col gap-4"
    >
      <p className="flex items-center gap-4">
        <MapPinIcon className="w-[20px]" /> Sanandaj, Kurdistan
      </p>
      <p className="flex items-center gap-4">
        <PhoneIcon className="w-[20px]" /> +98 (992) 237-7340
      </p>
      <p className="flex items-center gap-4">
        <EnvelopeIcon className="w-[20px]" /> danesh.monzer@gmail.com
      </p>
    </motion.div>
  );
}
