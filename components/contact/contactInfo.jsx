"use client";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SocialLinks from "./socialLinks";
import dynamic from "next/dynamic";

const OpenStreetMap = dynamic(() => import("@/components/contact/maps"), {
  ssr: false,
});

export default function ContactInfo() {
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0, x: 500 }}
        className='flex flex-col justify-end gap-8 mt-8 md:mt-0'
      >
        <OpenStreetMap />
        <div className='flex flex-col gap-2 mx-auto'>
          <p className='flex items-center gap-4'>
            <MapPinIcon className='w-[20px]' /> Sanandaj, Kurdistan
          </p>
          <p className='flex items-center gap-4'>
            <PhoneIcon className='w-[20px]' /> +98 (992) 237-7340
          </p>
          <p className='flex items-center gap-4'>
            <EnvelopeIcon className='w-[20px]' /> danesh.monzer@gmail.com
          </p>
        </div>
        <SocialLinks />
      </motion.div>
    );
  }
}
