/** @format */

import ProjectDetail from "@/components/projects/projectDetail";

export default function page({ params }) {
  return (
    <div>
      <ProjectDetail title={params.title} />
    </div>
  );
}
