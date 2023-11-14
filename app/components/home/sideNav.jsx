/** @format */

import Link from "next/link";
import NavLinks from "./navLinks";
import Image from "next/image";
import avatar from "@/public/avatar.jpg";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex  items-end justify-start rounded-md bg-blue-600  md:h-40"
        href="/"
      >
        <div className="w-54 text-white md:w-64">
          <div className={`flex flex-row items-center leading-none text-white`}>
            <Image
              width={100}
              height={100}
              alt="avatar"
              src={avatar}
              className="h-[full] md:w-full"
            />
            <p className="text-[40px] md:hidden">Monzer Danesh</p>
          </div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-500 md:block"></div>
      </div>
    </div>
  );
}
