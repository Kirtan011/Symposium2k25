"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/abouts", label: "About" },
  ];

  return (
    <nav
      className="w-full fixed top-1 z-50 rounded-[250px] sm:mx-1em 
      bg-white/70 backdrop-blur-md border border-gray-200 shadow-gray shadow-lg 
      text-gray-800 px-6 py-3 flex justify-between items-center 
      transition-all duration-300 hover:bg-white/90"
    >
      {/* Logo */}
      <Link href="/">
        <h1
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white 
          rounded-b-lg px-4 py-2 text-2xl font-extrabold tracking-wide 
          shadow-md hover:scale-110 transition-transform"
        >
          Symposium 2K25
        </h1>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li
            key={link.href}
            className="rounded-b-lg px-2 transition-transform hover:scale-105"
          >
            <Link
              href={link.href}
              className={`
                relative font-medium text-gray-700 transition-colors 
                hover:text-orange-500
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-0 after:bg-orange-400 
                after:transition-all after:duration-300
                hover:after:w-full
                ${pathname === link.href ? "text-orange-600 after:w-full" : ""}
              `}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-800"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-white text-gray-800 border-r border-gray-200"
        >
          <ul className="flex flex-col space-y-4 mt-12">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-2 py-1 rounded hover:bg-orange-100 ${
                    pathname === link.href ? "bg-orange-200 font-semibold" : ""
                  }`}
                >
                  <span className="flex justify-center">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
