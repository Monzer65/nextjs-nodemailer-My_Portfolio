/** @format */

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/themeContext";

export default function TimelineElement({ item }) {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  return (
    <div ref={ref} className='vertical-timeline-element'>
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: theme === "light" ? "7px solid #bbb" : "7px solid #fgh",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem",
        }}
      >
        <h3 className='font-semibold capitalize'>{item.title}</h3>
        <p className='font-normal mt-0'>{item.location}</p>
        <p className='mt-1 font-normal text-gray-700 dark:text-white/75'>
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
