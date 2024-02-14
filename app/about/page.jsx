import AboutText from "@/components/about/aboutText";
import Experience from "@/components/about/experience";
import Skills from "@/components/about/skills";

export const metadata = {
  title: "About",
  description:
    "Learn more about Monzer Danesh, a passionate individual dedicated to web development technology, and photography. Discover his journey, interests, and contributions.",
  keywords:
    "about me, Monzer Danesh, منذر دانش, biography, technology, web development, photography",
  author: "Monzer Danesh",
};

export default function page() {
  return (
    <main className='flex-6 px-4 pt-8 pb-4'>
      <AboutText />
      <Skills />
      <Experience />
    </main>
  );
}
