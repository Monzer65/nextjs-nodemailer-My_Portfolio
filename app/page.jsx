/** @format */

import SideNav from "@/components/sideNav";
import Footer from "@/components/footer";
import SectionDivider from "@/components/home/sectionDevider";
import Skills from "@/components/home/skills";
import Experience from "@/components/home/experience";
import Intro from "@/components/home/intro";

export default function Home() {
  return (
    <>
      <div className="md:flex">
        <div className="w-full flex-1">
          <SideNav />
        </div>
        <main className="flex-6 w-full">
          <Intro />
          <SectionDivider />
          <Skills />
          <Experience />
        </main>
      </div>
      <Footer />
    </>
  );
}
