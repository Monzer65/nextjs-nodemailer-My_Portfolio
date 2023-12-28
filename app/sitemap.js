export default function sitemap() {
  return [
    {
      url: "https://www.monzerdanesh.ir",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.monzerdanesh.ir/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.monzerdanesh.ir/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.monzerdanesh.ir/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.monzerdanesh.ir/projects/Elevating%20User%20Experience%20with%20Next.js",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://www.monzerdanesh.ir/projects/Enhancing%20Shopping%20Experience%20with%20MERN%20Stack",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
