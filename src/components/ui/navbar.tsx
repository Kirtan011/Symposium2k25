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
        <div
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white 
          rounded-[30px] px-4 py-2 text-2xl font-extrabold tracking-wide 
          shadow-md hover:scale-110 shadow-yellow-200 transition-transform"
        >
          <h1> Symposium 2K25</h1>
        </div>
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
          <Button variant="ghost" size="icon" className="md:hidden ">
            <Menu className="h-3 w-3" />
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
                  className={`
                relative block top-8 font-medium  text-gray-800 transition-colors 
                hover:text-orange-500
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-0 after:bg-orange-400 
                after:transition-all after:duration-300
                hover:after:w-full  
                ${pathname === link.href ? "text-orange-600 after:w-full" : ""}
              `}
                >
                  <span className="bg-orange-50 text-center h-8 flex justify-center">
                    {link.label}
                    <br />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
