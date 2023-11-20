/** @format */
import Link from "next/link";
import NavLinks from "./navLinks";
import Image from "next/image";
import avatar from "@/public/avatar.jpeg";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:p-0 ">
      <Link
        href="/"
        className="mb-2 md:mb-0 flex items-end justify-start rounded-md md:h-40 text-gray-800 border-solid border-2 border-blue-950 md:border-none dark:border-white dark:text-white"
      >
        <div className="w-54 md:w-auto">
          <div className={`flex flex-row items-center gap-6 leading-none`}>
            <Image
              width={100}
              height={100}
              alt="avatar"
              src={avatar}
              className="h-[full] md:w-full "
            />
            <h2 className="text-[40px] font-bold md:hidden">Monzer Danesh</h2>
          </div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0  ">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block bg-gray-300/70 dark:bg-gray-700/30"></div>
      </div>
    </div>
  );
}
