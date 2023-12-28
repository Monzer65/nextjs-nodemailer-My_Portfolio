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
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md md:rounded-none p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-gray-800 text-white relative":
                  theme === "light" && pathname === link.href,
                "bg-gray-300/70 text-black relative hover:bg-gray-800 hover:text-white":
                  theme === "light" && pathname != link.href,

                "bg-gray-100 text-black":
                  theme === "dark" && pathname === link.href,
                "bg-gray-700/30 hover:bg-gray-100 hover:text-black":
                  theme === "dark" && pathname != link.href,
              }
            )}
          >
            <LinkIcon className='w-6' />
            <p className='hidden md:block relative'>{link.name}</p>
            <span className='sr-only'>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
