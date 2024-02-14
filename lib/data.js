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
import image3_1 from "@/public/doctor_desktop_main.png";
import image3_2 from "@/public/doctor_tablet_main.png";
import image3_3 from "@/public/doctor_mobile_main.png";
import image3_4 from "@/public/doctor_mobile_book_1.png";
import image3_5 from "@/public/doctor_mobile_book_2.png";
import image3_6 from "@/public/doctor_dash_desktop.png";
// import image3_7 from "@/public/";
// import image3_8 from "@/public/";

export const projects = [
  {
    id: "1",
    title: "ProFolio with Next.js",
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
    repository: "disabled",
  },
  {
    id: "2",
    title: "ShopRocket with MERN",
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

  {
    id: "3",
    title: "MediConnect",
    shortDescription:
      "A comprehensive doctor booking system designed for international patients, offering multilingual support and a robust admin panel.",
    longDescription: [
      {
        title: "Project Description:",
        desc: [
          "At the heart of MediConnect is its powerful admin panel, providing healthcare providers with the tools they need to efficiently manage patients and appointments. From overseeing scheduling logistics to monitoring patient interactions, the admin interface offers unparalleled control and insight into the booking process. Ensuring the security and privacy of both administrators and patients, MediConnect features robust login systems.",
          "Admins can securely access the platform to manage operations, while patients can easily register and navigate through the appointment scheduling process with peace of mind. One of the standout features of MediConnect is its intuitive date and time picker, simplifying the process of selecting appointment slots.",
          "Patients can effortlessly browse through available time slots, making it convenient to find the perfect appointment time that fits their schedule. With its seamless integration of functionalities and user-friendly design, MediConnect sets a new standard for online doctor booking systems, streamlining the healthcare experience for both patients and providers alike.",
        ],
      },
      {
        title: "Authentication Management:",
        desc: [
          "MediConnect employs a robust Authentication Management system to safeguard user access and data integrity, utilizing JSON Web Tokens (JWT) in tandem with server components and middleware function to fortify route protection and authentication protocols. Leveraging the secure JSON Object Signing and Encryption (JOSE) framework for JWT provisioning, MediConnect ensures the confidentiality and integrity of user credentials and session tokens.",

          "Administrators access the system through a secure email and password login mechanism, providing a fortified layer of authentication. By adhering to industry best practices, sensitive administrative functionalities and data remain shielded from unauthorized access.",

          "For patient registration, MediConnect employs a unique identification system, such as a national code, to ensure the integrity of patient accounts. This personalized approach enhances security and accountability, mitigating the risk of fraudulent registrations and unauthorized access to medical services.",

          "Through the meticulous integration of JWT, server-side components, and JOSE, MediConnect establishes a fortified Authentication Management system. This ensures stringent access controls, bolstering the platform's resilience against potential security threats and safeguarding the confidentiality of patient data.",

          "To maintain persistence, the token is stored as an HTTP-only cookie, heightening security measures.",
        ],
      },
      {
        title: "Admins & users experience:",
        desc: [
          "The MediConnect website offers a seamless experience for both patients and administrators, streamlining the appointment booking process and enhancing management efficiency. Patients benefit from an intuitive interface that simplifies appointment scheduling, while admins enjoy robust tools to efficiently oversee and manage appointments. With its user-friendly design and comprehensive features, MediConnect ensures a convenient and hassle-free experience for all users.",
        ],
      },
      {
        title: "Multilingual Support:",
        desc: [
          "Seamlessly switch between English, Arabic, Persian, and Kurdish languages to accommodate diverse patient needs and preferences. The multilingual feature enhances accessibility and ensures clear communication for users across various linguistic backgrounds.",
        ],
      },
      {
        title: "Comprehensive Header Navigation:",
        desc: [
          "A robust and intuitive header, integrated into the layout of every page, facilitates effortless navigation between routes. This centralized navigation system enhances user experience by providing easy access to key functionalities and pages throughout the website.",
        ],
      },
      {
        title: "Security Measures and Session Management:",
        desc: [
          "Logouts trigger the removal of the JWT token from cookies, ensuring restricted access to protected routes upon logout.",
        ],
      },
      {
        title: "Conclusion:",
        desc: [
          "MediConnect stands as a pinnacle of innovation in the realm of healthcare appointment booking systems, offering a holistic solution that caters to the needs of both patients and administrators alike. With its user-friendly interface, secure authentication protocols, and multilingual support, the platform redefines convenience and accessibility in medical scheduling.",
          "As healthcare continues to evolve, MediConnect remains at the forefront, providing a reliable and efficient platform that prioritizes the needs of patients and administrators. With its commitment to excellence and user-centric design, MediConnect is poised to revolutionize the healthcare appointment booking landscape, fostering greater efficiency, accessibility, and satisfaction for all stakeholders involved.",
        ],
      },
    ],
    mainImage: image3_1,
    images: [
      { imageUrl: image3_1, imageTitle: "Main-page - Dsktop View" },
      { imageUrl: image3_2, imageTitle: "Main-page - Tablet View" },
      { imageUrl: image3_3, imageTitle: "Main-page - Mobile View" },
      { imageUrl: image3_4, imageTitle: "Booking Page 1 - Mobile View" },
      { imageUrl: image3_5, imageTitle: "Booking Page 2 - Mobile View" },
      { imageUrl: image3_6, imageTitle: "Dashboard Page - Desktop View" },
    ],
    technologies: [
      {
        title: "Backend technologies",
        techs: ["Next.js", "PostgreSQL"],
        desc: "MediConnect's backend harnesses the power of modern technologies, including Next.js, to deliver a dynamic and responsive platform. Server actions in Next.js facilitate interactions between the client and server, ensuring efficient data retrieval and management. Additionally, Next.js's server-side rendering (SSR) capabilities optimize performance by fetching data server-side, enhancing the user experience with faster page loads and improved SEO. MediConnect's backend harnesses the power of modern technologies, including PostgreSQL, to manage data efficiently and securely. By leveraging PostgreSQL as the database backbone, the platform ensures robust data storage and retrieval, essential for managing appointments and patient information effectively.",
      },
      {
        title: "Frontend technologies",
        techs: ["Next.js", "Tailwind css"],
        desc: "MediConnect's frontend is powered by Next.js and styled with Tailwind CSS, providing a dynamic and visually appealing user experience. Tailwind CSS streamlines the styling process with its utility-first approach, enabling rapid development and customization of user interfaces. Combined with Next.js's server actions and server-side rendering (SSR) capabilities, the frontend delivers optimal performance and responsiveness, ensuring a seamless experience for users interacting with the platform.",
      },
      {
        title: "Authentication technologies",
        techs: ["JWT"],
        desc: " JWT (JSON Web Tokens) were implemented for user authentication. This authentication system comprised registration, security verification, and login (using email and password)",
      },
    ],
    website: "https://doctor-appointment-app-multi-lingual.vercel.app",
    repository: "disabled",
  },
];
