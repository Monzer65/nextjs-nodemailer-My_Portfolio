"use client";

import { motion } from "framer-motion";
import HTMLIcon from "@/public/html.svg";
import CSSIcon from "@/public/css.svg";
import JavaScriptIcon from "@/public/javascript.svg";
import TypeScriptIcon from "@/public/typescript.svg";
import ReactIcon from "@/public/react.svg";
import NodeIcon from "@/public/nodejs.svg";
import GitIcon from "@/public/git.svg";
import PrismaIcon from "@/public/prisma.svg";
import MongoDBIcon from "@/public/mongodb.svg";
import ReduxIcon from "@/public/redux.svg";
import PostgreSQLIcon from "@/public/postgresql.svg";
import TailwindIcon from "@/public/tailwind.svg";
import NextjsLIcon from "@/public/next-js.svg";
import GraphQlIcon from "@/public/graphql.svg";
import ExpressIcon from "@/public/express.svg";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const iconMapping = {
  HTML: HTMLIcon,
  CSS: CSSIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  React: ReactIcon,
  Nodejs: NodeIcon,
  Git: GitIcon,
  Prisma: PrismaIcon,
  MongoDB: MongoDBIcon,
  Redux: ReduxIcon,
  PostgreSQL: PostgreSQLIcon,
};

const skillsData = [
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Express", icon: ExpressIcon },
  { name: "GraphQL", icon: GraphQlIcon },
  { name: "Prisma", icon: PrismaIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsLIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "Git", icon: GitIcon },
];

export default function Skills() {
  return (
    <section
      id='skills'
      className='my-28 max-w-[53rem] sm:mt-36 text-center sm:mb-40 mx-auto'
    >
      <h2 className='text-3xl font-medium capitalize mb-8 text-center'>
        My skills
      </h2>
      <ul className='flex flex-wrap justify-center items-start gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => {
          const SkillIcon = skill.icon;

          return (
            <motion.li
              className='flex flex-col justify-center items-center bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
              key={index}
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <SkillIcon className='w-10 h-10' />
              {skill.name}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
