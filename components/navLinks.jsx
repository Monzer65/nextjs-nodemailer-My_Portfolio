"use client";
import {
  HomeIcon,
  UserIcon,
  InboxStackIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTheme } from "@/context/themeContext";
const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "About",
    href: "/about",
    icon: UserIcon,
  },
  { name: "Projects", href: "/projects", icon: InboxStackIcon },
  { name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

export default function NavLinks() {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      {links.map((link, i) => {
        const LinkIcon = link.icon;
        return (
          <div
            key={i}
            className={clsx(
              "p-3 text-center grow text-sm font-medium sm:last:rounded-b-lg sm:first:rounded-t-lg",
              {
                "bg-white text-cyan-500":
                  theme === "light" && pathname === link.href,
                "bg-white text-gray-800  hover:text-cyan-500":
                  theme === "light" && pathname != link.href,

                "bg-gray-800 text-sky-300":
                  theme === "dark" && pathname === link.href,
                "bg-gray-800 text-white hover:text-cyan-300 transition-colors duration-300":
                  theme === "dark" && pathname != link.href,
              }
            )}
          >
            <Link href={link.href}>
              <LinkIcon className='w-6 m-auto' />
              <p className='m-auto'>{link.name}</p>
              <span className='sr-only'>{link.name}</span>
            </Link>
            {link.name !== "Contact" && (
              <hr
                className={clsx(
                  "hidden sm:block h-[2px] border-none bg-gradient-to-r mt-2 from-transparent via-gray-100 to-transparent",
                  {
                    "dark:via-sky-300 ":
                      theme === "dark" && pathname === link.href,
                  }
                )}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
