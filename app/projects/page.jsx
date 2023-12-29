/** @format */
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Portfolio from "@/components/projects/portfolio";

export const metadata = {
  title: "Projects",
  description:
    "Explore Monzer Danesh's portfolio of diverse projects, including web development innovations using next.js, vue.js etc.. Dive into a showcase of creative and impactful works.",
  keywords: "projects, Monzer Danesh, منذر دانش, creative works",
  author: "Monzer Danesh",
};

export default function page() {
  return (
    <main className='p-2'>
      <Link
        href={"/"}
        className='flex gap-2 w-fit h-10 py-2 px-4 bg-gray-300 shadow-lg rounded-md dark:bg-gray-700  hover:scale-105 sticky top-0 z-20'
      >
        <ArrowLeftIcon />
        Back to home
      </Link>
      <Portfolio />
    </main>
  );
}
