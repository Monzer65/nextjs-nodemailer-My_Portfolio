import image1_1 from "@/public/portfolio.webp";
import image1_2 from "@/public/portfolio2.png";
import image1_3 from "@/public/portfolio3.png";

export const projects = [
  {
    title: "Personal Portfolio",
    shortDescription:
      "A personal portfolio website showcasing my skills, experience, and projects.",
    longDescription:
      "My personal portfolio is a dynamic website that serves as a comprehensive showcase of my professional skills, projects, and experiences. With an intuitive design and user-friendly interface, it highlights my expertise in web development through a blend of interactive elements and informative content. Visitors can explore my work history, technical abilities, and featured projects, providing a glimpse into my capabilities and accomplishments within the realm of web development.",
    mainImage: image1_1,
    images: [
      { imageUrl: image1_2, imageTitle: "Dsktop View" },
      { imageUrl: image1_3, imageTitle: "Mobile View" },
    ],
    technologies: ["Next.js", "framer-motion", "nodemailer", "tailwindcss"],
    link: "https://monzer-danesh-portfolio.vercel.app/",
    repository: "https://github.com/Monzer65/next02/tree/main",
  },
  {
    title: "E-commerce Store",
    shortDescription:
      "An e-commerce site with modern tech, offering product listings, a shopping cart, and secure checkout.",
    longDescription:
      "The E-commerce Store represents a cutting-edge online platform leveraging modern technology to deliver a seamless shopping experience. This robust website incorporates advanced features such as comprehensive product listings, a user-friendly shopping cart, and a secure user account management system. Through the integration of React, Redux, Node.js, Express, and MongoDB, it ensures reliability, scalability, and security, catering to the needs of both customers and administrators while maintaining a high standard of performance.",
    mainImage: image1_1,
    technologies: [
      "React",
      "Redux toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Module css",
      "JWT",
      "nodemailer",
    ],
    link: "https://mern-same-server-production.up.railway.app/",
    repository: "https://github.com/Monzer65/mern-same-server",
  },
  {
    title: "Blog Platform",
    shortDescription:
      "A blogging platform enabling users to create, read, update, and delete their posts.",
    longDescription:
      "The Blog Platform is a feature-rich platform empowering users to create, manage, and share their blogs effortlessly. Built with Python, Django, and PostgreSQL, it offers a user-friendly interface for composing, editing, and deleting blog posts. This versatile platform facilitates seamless interaction, providing users with a personalized space to express their thoughts, share experiences, and engage with a community of like-minded individuals.",
    mainImage: image1_1,
    technologies: ["Python", "Django", "PostgreSQL"],
    link: "www.myblog.com",
    repository: "www.github.com/myblog",
  },
  {
    title: "Admin Panel",
    shortDescription:
      "A robust admin panel for managing user roles, content moderation, and site analytics.",
    longDescription:
      "The Admin Panel is a comprehensive solution designed to streamline the management of user roles, content moderation, and site analytics. Developed using PHP, Laravel, and MySQL, this robust panel offers a user-friendly interface for administrators to efficiently manage user permissions, monitor content quality, and analyze site performance through detailed analytics. It serves as a centralized hub for overseeing diverse aspects of the platform, ensuring smooth operations and effective governance.",
    mainImage: image1_1,
    technologies: ["PHP", "Laravel", "MySQL"],
    link: "www.myadminpanel.com",
    repository: "www.github.com/myadminpanel",
  },
];
