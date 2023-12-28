import image1_1 from "@/public/portfolio.webp";
import image1_2 from "@/public/portfolio2.png";
import image1_3 from "@/public/portfolio3.png";
import image2_1 from "@/public/mern-shop.webp";
import image2_2 from "@/public/mern-shop-1.webp";
import image2_3 from "@/public/mern-shop-2.webp";
import image2_4 from "@/public/mern-shop-3.webp";
import image2_5 from "@/public/mern-shop-4.webp";
import image2_6 from "@/public/mern-shop-5.webp";
import image2_7 from "@/public/mern-shop-6.webp";
import image2_8 from "@/public/mern-shop-7.webp";

export const projects = [
  {
    title: "Elevating User Experience with Next.js",
    shortDescription:
      "A personal portfolio website showcasing my skills, experience, and projects.",
    longDescription: [
      {
        title: "Project Description:",
        desc: [
          "Leveraging the capabilities of Next.js, I've built a dynamic and responsive portfolio platform. This framework has empowered the website with server-side rendering, enabling faster page loads and improved SEO.",
        ],
      },
      {
        title: "Features and Functionality:",
        desc: [
          "The website is a testament to a comprehensive set of functionalities. Every aspect, from navigation to interactive elements, is designed to engage and inform visitors effectively.",
          "The website is optimized for various devices, ensuring a consistent and visually appealing experience across desktops, tablets, and mobile devices.",
        ],
      },
      {
        title: "conclusion",
        desc: [
          "In essence, my portfolio website developed with Next.js is a testament to my skills and dedication as a developer. With its sleek design, seamless functionality, and integration of Next.js features, it showcases my expertise while providing visitors with an engaging and immersive experience.",
        ],
      },
    ],
    mainImage: image1_1,
    images: [
      { imageUrl: image1_2, imageTitle: "Dsktop View" },
      { imageUrl: image1_3, imageTitle: "Mobile View" },
    ],
    technologies: [
      {
        title: "Backend technologies",
        techs: ["Next.js form-actions", "nodemailer"],
        desc: "Next.js was employed to build a robust server-side foundation. These technologies facilitated the creation of a scalable, efficient, and secure server-side infrastructure.",
      },
      {
        title: "Frontend technologies",
        techs: ["Next.js", "Tailwind", "Framer Motion"],
        desc: "Next.js and Tailwind were employed to build a modern and responsive user interface. Framer Motion was employed to create a smooth and fluid transition between pages.",
      },
    ],
    website: "https://monzer-danesh-portfolio.vercel.app/",
    repository: "https://github.com/Monzer65/next02/tree/main",
  },
  {
    title: "Enhancing Shopping Experience with MERN Stack",
    shortDescription:
      "A fully functional e-commerce site with modern tech, offering product listings, a shopping cart and user authentication and authorization.",
    longDescription: [
      {
        title: "Project Description:",
        desc: [
          "The project I've developed is an immersive shopping platform leveraging the MERN (MongoDB, Express.js, React, Node.js) stack. It encapsulates a comprehensive array of features and functionalities to provide users with a seamless and enjoyable shopping experience.",
        ],
      },
      {
        title: "Authentication Management:",
        desc: [
          "JWT tokens are stored in the Redux Toolkit state, ensuring seamless access to authenticated routes.",
          "To maintain persistence, the refresh token is stored as an HTTP-only cookie, heightening security measures.",
        ],
      },
      {
        title: "Shopping Experience:",
        desc: [
          "The shopping experience is meticulously designed, with all data dynamically fetched and presented on the pages, eliminating any reliance on hard-coded information.",
          "Local storage is utilized to create a personalized cart for each device. When users log out, the cart is emptied, providing a personalized experience for logged-in users.",
          "The cart functionality is robust, enabling users to manage items by updating quantities, deleting products, or clearing the entire cart. All calculations involving discounts, prices, and quantities are dynamically computed for an accurate shopping experience.",
        ],
      },
      {
        title: "Product Listing:",
        desc: [
          "The product listing section provides a seamless browsing experience, displaying all available products and filtering options.",
          "The filtering functionality allows users to search for specific products based on their category, brand, or price range.",
        ],
      },
      {
        title: "Additional Features:",
        desc: [
          "Users can provide product reviews and ratings, enhancing engagement and facilitating informed purchasing decisions.",
          "Profile management capabilities empower users to update their profile data (excluding email, currently) according to their preferences.",
        ],
      },
      {
        title: "Security Measures and Session Management:",
        desc: [
          "Logouts trigger the removal of the refresh token from cookies, and access tokens are revoked from the database, ensuring restricted access to private routes upon logout.",
        ],
      },

      {
        title: "Product Details and Interactions:",
        desc: [
          "Each product detail page comprehensively presents calculated reviews, average ratings, and user-generated reviews, fostering transparency and assisting users in making informed choices.",
          "Products feature various colors and sizes, each treated as a separate item in the cart, allowing users to customize their selections.",
        ],
      },
      {
        title: "Conclusion:",
        desc: [
          "In essence, this MERN stack project delivers a holistic and user-centric shopping experience. It seamlessly integrates a robust backend with a responsive frontend, prioritizing security, functionality, and user engagement. With features ranging from dynamic cart management to interactive product reviews, it's designed to elevate and personalize the online shopping journey.",
        ],
      },
    ],
    mainImage: image2_1,
    images: [
      { imageUrl: image2_1, imageTitle: "Main-page -Dsktop View" },
      { imageUrl: image2_2, imageTitle: "Products Page - Desktop View" },
      { imageUrl: image2_3, imageTitle: "Product Details Page - Desktop View" },
      { imageUrl: image2_4, imageTitle: "Cart Page - Desktop View" },
      { imageUrl: image2_5, imageTitle: "Product Details Page - Mobile View" },
      { imageUrl: image2_6, imageTitle: "Main Page - Mobile View" },
      { imageUrl: image2_7, imageTitle: "Products Page - Mobile View" },
      { imageUrl: image2_8, imageTitle: "Profile Page - Mobile View" },
    ],
    technologies: [
      {
        title: "Backend technologies",
        techs: ["Node.js", "Express", "MongoDB", "JWT", "nodemailer"],
        desc: "Node.js, Express.js, and Mongoose were instrumental in constructing a robust backend infrastructure. These technologies facilitated the creation of a scalable, efficient, and secure server-side foundation.",
      },
      {
        title: "Frontend technologies",
        techs: ["React", "Redux toolkit", "Module css"],
        desc: "React was employed to build an intuitive user interface, ensuring a dynamic and responsive experience for users navigating the platform.",
      },
      {
        title: "Authentication technologies",
        techs: ["JWT", "nodemailer"],
        desc: " JWT (JSON Web Tokens) were implemented for user authentication, employing both access and refresh tokens. This authentication system comprised registration, email verification (powered by Nodemailer), login (using email and password), and a forget-password route that sends a verification code to the user's email for password reset.",
      },
    ],
    website: "https://mern-shop-project-production.up.railway.app/",
    repository: "disabled",
  },
];
