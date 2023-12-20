/** @format */

import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "@/components/themeSwicher";
import ThemeContextProvider from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Monzer Danesh",
    default: "Monzer Danesh",
  },
  description:
    "Welcome to the portfolio of Monzer Danesh, showcasing a collection of projects in web development technologies. Explore a diverse range of creative works and expertise.",
  keywords:
    "portfolio, Monzer Danesh, منذر دانش, projects, web development, nextjs, next js, next.js, vue, نکست جی اس, MongoDb, typescript",
  author: "Monzer Danesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          {children}
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
