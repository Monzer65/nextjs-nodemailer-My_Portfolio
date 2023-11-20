/** @format */
import Image from "next/image";
import avatar from "@/public/avatar.jpeg";
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
          <section
            id="skills"
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mx-auto"
          >
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">
              My Portfolio
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className=" p-4 rounded-md shadow-md ">
                <Image
                  width={100}
                  height={100}
                  src={avatar}
                  alt="Project 1"
                  className="w-full"
                />
                <h3>Project 1</h3>
                <p>A brief description of Project 1.</p>
                <a
                  href="https://project1.com"
                  className=" text-white py-2 px-4 rounded-md hover:"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/project1"
                  className=" text-white py-2 px-4 rounded-md hover:"
                >
                  GitHub Repository
                </a>
              </div>

              <div className=" p-4 rounded-md shadow-md ">
                <Image
                  width={100}
                  height={100}
                  src={avatar}
                  alt="Project 2"
                  className="w-full"
                />
                <h3>Project 2</h3>
                <p>A brief description of Project 2.</p>
                <a
                  href="https://project2.com"
                  className=" text-white py-2 px-4 rounded-md hover:"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/project2"
                  className=" text-white py-2 px-4 rounded-md hover:"
                >
                  GitHub Repository
                </a>
              </div>

              <div className=" p-4 rounded-md shadow-md ">
                <Image
                  width={100}
                  height={100}
                  src={avatar}
                  alt="Project 3"
                  className="w-full"
                />
                <h3>Project 3</h3>
                <p>A brief description of Project 3.</p>
                <a
                  href="https://project3.com"
                  className=" text-white py-2 px-4 rounded-md hover:"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/project3"
                  className=" text-white py-2 px-4 rounded-md hover:"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
