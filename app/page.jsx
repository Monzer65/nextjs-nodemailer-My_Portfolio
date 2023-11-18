/** @format */
import Image from "next/image";
import SideNav from "./components/home/sideNav";
import avatar from "../public/avatar.jpeg";

export default function Home() {
  return (
    <>
      <div className="md:flex">
        <div className="w-full flex-1">
          <SideNav />
        </div>
        <div className="flex-6 w-full">
          <header className="  py-8">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold hidden md:block">
                Monzer Danesh
              </h1>
              <p className="text-lg max-w-md mx-auto mt-10 text-justify">
                Hey there, I am <strong>Monzer</strong>, a dedicated full-stack
                web developer fueled by a passion for crafting intuitive and
                captivating websites. With a robust skill set in multiple
                programming languages and frameworks, I thrive on embracing and
                mastering new technologies.
              </p>

              <a
                href="#projects"
                className="p-2  rounded-md mt-4 inline-block dark:border-solid dark:border-2 dark:border-red-500"
              >
                View Projects
              </a>
            </div>
          </header>

          <div className="  py-8 px-4 my-4">
            <div className="hero-content">
              <p>
                I am a skilled web developer with a passion for creating
                user-friendly and visually appealing websites. I have experience
                in a variety of programming languages and frameworks, and I am
                always eager to learn new technologies.
              </p>
              <a
                href="/contact"
                className=" text-white py-2 px-4 rounded-md hover:"
              >
                Contact Me
              </a>
            </div>
          </div>

          <section id="skills" className="  py-8 px-4 my-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold mb-6">Skills</h2>
              <ul className="grid grid-cols-2 gap-4 ">
                <li className=" rounded p-2 shadow-md">HTML5</li>
                <li className=" rounded p-2 shadow-md">CSS3</li>
                <li className=" rounded p-2 shadow-md">JavaScript</li>
                <li className=" rounded p-2 shadow-md">React</li>
                <li className=" rounded p-2 shadow-md">Node.js</li>
              </ul>
            </div>
          </section>

          <section id="projects" className="  py-8 px-4 my-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className=" rounded shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                  <p className="mb-4">Description of Project 1</p>
                  <a href="#" className="btn inline-block">
                    View Project
                  </a>
                </div>
                <div className=" rounded shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                  <p className="mb-4">Description of Project 2</p>
                  <a href="#" className="btn inline-block">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="portfolio">
            <section id="portfolio" className=" mx-auto   py-8 px-4 my-4">
              <h2 className="text-3xl font-bold text-center">My Portfolio</h2>
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
          </div>
        </div>
      </div>

      <footer className="py-8  text-white text-center">
        <div className="container mx-auto">
          <p>&copy; 2023 Monzer Danesh| Web Developer</p>
          <ul className="flex justify-center mt-4">
            <li className="mr-4">
              <a
                href="https://github.com/Monzer65"
                target="_blank"
                className="text-white hover:text-gray-400"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/monzer-danesh-602b6557"
                target="_blank"
                className="text-white hover:text-gray-400"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
