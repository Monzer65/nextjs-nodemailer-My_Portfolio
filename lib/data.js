/** @format */
import image1 from "@/public/project.jpg";
import image2 from "@/public/avatar.png";
import image3 from "@/public/logo.png";

export const projects = [
  {
    title: "Personal Portfolio", //must be unique
    shortDescription:
      "A personal portfolio website to showcase my skills, experience, and projects.",
    longDescription: "",
    imageUrl: image1,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "www.myportfolio.com",
    repository: "www.github.com/myportfolio",
  },
  {
    title: "E-commerce Store", //must be unique
    shortDescription:
      "An e-commerce website built with a modern tech stack. It includes features like product listing, shopping cart, and secure checkout.",
    longDescription: "",
    imageUrl: image2,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    link: "www.mystore.com",
    repository: "www.github.com/mystore",
  },
  {
    title: "Blog Platform", //must be unique
    shortDescription:
      "A blogging platform where users can create, read, update, and delete their blog posts.",
    longDescription: "",
    imageUrl: image3,
    technologies: ["Python", "Django", "PostgreSQL"],
    link: "www.myblog.com",
    repository: "www.github.com/myblog",
  },
  {
    title: "Admin Panel", //must be unique
    shortDescription:
      "A robust admin panel built for managing user roles, content moderation, and viewing site analytics.",
    longDescription: "",
    imageUrl: image1,
    technologies: ["PHP", "Laravel", "MySQL"],
    link: "www.myadminpanel.com",
    repository: "www.github.com/myadminpanel",
  },
];
