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
    <main className='flex-6 w-full px-4'>
      <Portfolio />
    </main>
  );
}
