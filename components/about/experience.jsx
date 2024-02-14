"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BookOpenIcon,
  CodeBracketSquareIcon,
  ServerStackIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import TimelineElement from "./timeLine";

const experiencesData = [
  {
    title: "Web Development Self-Study",
    location: "Sanandaj",
    description:
      "Engaged in intensive self-study of web development technologies including HTML, CSS, JavaScript, Node.js, React, Next.js, Vue.js, and Express over a period of 2 years.",
    icon: React.createElement(BookOpenIcon),
    date: "2021 - present",
  },
  {
    title: "Freelance Web Developer",
    location: "Sanandaj",
    description:
      "Applied acquired skills in web development as a freelance developer, creating dynamic and responsive web applications utilizing JavaScript, React, and Node.js.",
    icon: React.createElement(CodeBracketSquareIcon),
    date: "2022 - present",
  },
  {
    title: "Personal Projects",
    location: "Sanandaj",
    description:
      "Independently worked on various personal projects to deepen understanding and expertise in web development technologies. Projects included implementing modern frameworks like Next.js and exploring backend technologies.",
    icon: React.createElement(ServerStackIcon),
    date: "Ongoing",
  },
];

export default function Experience() {
  return (
    <section id='experience' className='mb-28 sm:mb-40'>
      <h2 className='text-3xl font-medium capitalize mb-8 text-center'>
        My experience
      </h2>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => {
          return <TimelineElement key={index} item={item} />;
        })}
        <VerticalTimelineElement
          visible={true}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
}
