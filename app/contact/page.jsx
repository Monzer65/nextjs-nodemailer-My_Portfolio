/** @format */

import { Lusitana } from "next/font/google";
import Image from "next/image";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import SideNav from "../components/home/sideNav";
import Form from "../components/contact/contactForm";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/x-twitter.svg";
import github from "../../public/github.svg";

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function page() {
  return (
    <div className="md:flex">
      <div className="w-full flex-1">
        <SideNav />
      </div>
      <div className="flex-6 w-full px-4 pt-8 pb-4">
        <h1
          className={`${lusitana.className} font-bold text-2xl md:text-4xl text-red-500`}
        >
          Contact Me
        </h1>
        <div className="md:flex gap-4">
          <Form />
          <div className="flex flex-col justify-between ">
            <div className="w-full flex-1 p-4 md:mt-10 flex flex-col gap-4">
              <p className="flex items-center gap-4">
                <MapPinIcon className="w-[20px]" /> Sanandaj, Kurdistan
              </p>
              <p className="flex items-center gap-4">
                <PhoneIcon className="w-[20px]" /> +98 (992) 237-7340
              </p>
              <p className="flex items-center gap-4">
                <EnvelopeIcon className="w-[20px]" /> danesh.monzer@gmail.com
              </p>
            </div>
            <div className="flex space-x-4 ml-4">
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
                <Image
                  width={50}
                  height={50}
                  alt="facebooc icon"
                  src={facebook}
                />
              </a>
              <a
                href="https://github.com/Monzer65"
                className="w-10 h-10 p-1 bg-white rounded-full transition-transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image width={50} height={50} alt="github icon" src={github} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
