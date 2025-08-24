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
    <nav className="w-full fixed top-2 z-50 rounded-[250px] sm:mx-1em bg-slate-900/60 backdrop-blur-lg border border-white/20 shadow-lg  text-white px-6 py-3 flex justify-between items-center transition-all duration-300 hover:bg-slate-900/80">
      {/* Logo */}
      <Link href="/">
        <h1 className="bg-orange-800 rounded-b-lg shadow-white-100 hover:text-white text-gray-200 text-center px-4 py-2 text-2xl font-extrabold tracking-wide hover:scale-110 transition-transform">
          Symposium 2K25
        </h1>
      </Link>
      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li
            key={link.href}
            className="bg-green-600 rounded-b-lg px-2 hover:scale-105"
          >
            <Link
              href={link.href}
              className={`
                relative font-medium transition-colors 
                hover:text-orange-300 hover:scale-3d
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-0 after:bg-yellow-400 
                after:transition-all after:duration-300
                hover:after:w-full
                ${pathname === link.href ? "text-orange-100 after:w-full" : ""}
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
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-violet-900 text-white">
          <ul className="flex flex-col space-y-4 mt-12">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-2 py-1 rounded hover:bg-violet-700 ${
                    pathname === link.href ? "bg-violet-700" : ""
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
