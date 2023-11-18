/** @format */

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Monzer Danesh",
    default: "Monzer Danesh",
  },
  description:
    "Welcome to the portfolio of Monzer Danesh, showcasing a collection of projects in web development technologies, and photography. Explore a diverse range of creative works and expertise.",
  keywords:
    "portfolio, Monzer Danesh, منذر دانش, projects, web development, nextjs, next js, next.js, vue, نکست جی اس",
  author: "Monzer Danesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
