"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import "@/app/globals.css";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/abouts", label: "About" },
  ];

  return (
    <nav
      className="w-full fixed top-1 z-50 sm:mx-1em 
      bg-tranparent backdrop-blur-3xl border border-gray-800 shadow-gray shadow-lg 
      text-gray-100 px-6 py-3 flex justify-between items-center 
      transition-all duration-300 hover:bg-black"
    >
      {/* Logo */}
      <Link href="/" className="block">
        <h1
          className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight 
          bg-clip-text text-transparent drop-shadow-2xl
          bg-[conic-gradient(from_var(--angle),#d1d5db,#b45309,#d1d5db)]
          animate-gradient-rotate
          hover:scale-105 transition-transform duration-300 text-center sm:text-left"
        >
          Symposium 2k25
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
                relative font-medium text-gray-100 transition-colors 
                hover:text-orange-400
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-0 after:bg-orange-400 
                after:transition-all after:duration-300
                hover:after:w-full
                ${pathname === link.href ? "text-orange-400 after:w-full" : ""}
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
            className="md:hidden text-gray-100"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-gray-950 text-gray-100 border-l border-gray-800"
        >
          <ul className="flex flex-col space-y-4 mt-12">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                  relative block top-8 font-medium text-gray-100 transition-colors 
                  hover:text-orange-400
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                  after:h-[2px] after:w-0 after:bg-orange-400 
                  after:transition-all after:duration-300
                  hover:after:w-full  
                  ${
                    pathname === link.href ? "text-orange-400 after:w-full" : ""
                  }
                `}
                >
                  <span className="bg-transparent text-center h-8 flex justify-center">
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
