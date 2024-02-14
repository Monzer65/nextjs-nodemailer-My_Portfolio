/** @format */

import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "@/components/themeSwicher";
import ThemeContextProvider from "@/context/themeContext";
import SideNav from "@/components/sideNav";
import Footer from "@/components/footer";
import { poppins } from "@/components/fonts";

export const metadata = {
  title: {
    template: "%s | Monzer Danesh portfolio website",
    default: "Monzer Danesh",
  },
  description:
    "Welcome to the portfolio of Monzer Danesh, showcasing a collection of projects in web development technologies. Explore a diverse range of creative works and...",
  keywords:
    "portfolio, Monzer Danesh, منذر دانش, projects, web development, nextjs, next js, next.js, vue, نکست جی اس, MongoDb, typescript",
  author: "Monzer Danesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='msvalidate.01' content='DB2D892404D7D27E3068DE6B496BE955' />
      </head>
      <body
        className={`${poppins.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='bg-[#b0bcc2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#6b2f34]'></div>
        <div className='bg-[#c7c9ca] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#3a1d45]'></div>

        <ThemeContextProvider>
          <div className='relative max-w-5xl m-auto sm:-top-64'>
            <div className='sticky top-0 start-2 end-0 sm:end-auto sm:w-max sm:top-10 z-20'>
              <SideNav />
            </div>
            <div className='max-w-3xl m-auto shadow-2xl sm:pl-20 min-[1000px]:pl-0'>
              {children}
            </div>
          </div>
          <ThemeSwitch />
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
