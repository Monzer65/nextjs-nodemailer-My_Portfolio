import { Fira_Code, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const fira_code = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
