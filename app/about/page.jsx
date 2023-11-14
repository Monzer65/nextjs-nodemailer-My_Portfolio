/** @format */

import SideNav from "../components/home/sideNav";
import { Lusitana } from "next/font/google";

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function page() {
  return (
    <div className="md:flex">
      <div className="w-full flex-1">
        <SideNav />
      </div>
      <div className="flex-6 w-full px-4 pt-8 pb-4">
        <h1
          className={`${lusitana.className} font-bold text-2xl md:text-4xl text-red-500`}
        >
          About me <br />
          <br />
        </h1>
        <p className={`  text-xl md:text-2xl`}>
          Welcome to my corner of the digital world! I’m Monzer Danesh, a web
          developer with a multifaceted background. Born in 1986, I took a
          unique journey from the realm of food science to the vibrant
          landscapes of web development. <br />
          <br />
          My academic pursuit led me to a Master&apos;s degree in Food Science,
          and for a while, I delved into the intricacies of food factories. Yet,
          my passion for technology and the ever-evolving web led me to a
          pivotal decision: I made the leap from the world of food to the world
          of web development. <br /> <br />
          Self-taught and driven by an insatiable curiosity, I dedicated myself
          to mastering the nuances of web development. I immersed myself in
          learning, acquainting myself with the intricacies of various
          technologies. My expertise spans the frontend, where I navigate the
          dynamic landscape of <strong>Next.js</strong> and{" "}
          <strong>Vue.js</strong>, and extends into the backend territories.
          Proficient in <strong>Node.js</strong> with the{" "}
          <strong>Express</strong> framework, I craft robust backend solutions,
          leveraging the power of serverless architecture in Next.js to
          seamlessly integrate databases —such as <strong>MongoDB</strong>— into
          the fabric of web applications. But my journey doesn’t end there.{" "}
          <br /> <br />
          I’m continually expanding my horizons, delving into new programming
          languages and technologies, eager to absorb the latest trends and
          skills that shape the digital sphere. This space is a testament to my
          passion for crafting digital experiences, weaving together my diverse
          expertise and unwavering enthusiasm for the ever-evolving web. Join me
          in exploring the endless possibilities that the digital realm offers.
          Thank you for visiting, and I’m thrilled to share this journey with
          you.
          <br /> <br />
          Warm regards,
          <br />
          Monzer Danesh
        </p>
      </div>
    </div>
  );
}
