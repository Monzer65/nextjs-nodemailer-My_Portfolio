/** @format */
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
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md md:rounded-none bg-gray-300 p-3 text-sm font-medium hover:bg-gray-400 hover:text-blue-900 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-white text-blue-700 relative": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block relative">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
