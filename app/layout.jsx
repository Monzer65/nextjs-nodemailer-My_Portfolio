/** @format */

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Monzer Danesh",
    default: "Monzer Danesh",
  },
  description: "Generated for Monzer Danesh Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
