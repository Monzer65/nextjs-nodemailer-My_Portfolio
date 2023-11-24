/** @format */

import ProjectDetail from "@/components/projects/projectDetail";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function page({ params }) {
  return (
    <main className="p-2">
      <Link
        href={"/projects"}
        className="flex gap-2 w-fit h-10 py-2 px-4 bg-gray-300 shadow-lg rounded-md dark:bg-gray-700  hover:scale-105"
      >
        <ArrowLeftIcon />
        Back to projects
      </Link>
      <ProjectDetail title={params.title} />
    </main>
  );
}
