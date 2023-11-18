/** @format */

import AboutText from "../components/about/aboutText";
import SideNav from "../components/home/sideNav";

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
    <div className="md:flex">
      <div className="w-full flex-1">
        <SideNav />
      </div>
      <div className="flex-6 w-full px-4 pt-8 pb-4 overflow-hidden">
        <AboutText />
      </div>
    </div>
  );
}
