"use client";

import "./globals.css";
import Navbar from "../components/ui/navbar";
import ParticlesBackground from "@/components/ui/Background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-cover bg-center bg-fixed">
        <ParticlesBackground />
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-transparent backdrop-blur-xs border-t border-gray-600 text-gray-300 mt-10">
          <div className="container mx-auto px-6 py-6 flex flex-col items-center space-y-4">
            <div className="relative flex items-center text-sm text-gray-400">
              Designed and developed by <b> Kirtan Suthar</b>
              <img
                src="/Peoples/Kirtan.png"
                className="absolute left-[280px] -top-[10px] w-10 h-10 border-2 border-white rounded-full"
              />
            </div>

            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-gray-400">
                Follow symposium page on Instagram
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Instagram SVG */}
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 border-t border-gray-700 py-3">
            © {new Date().getFullYear()} Symposium 2K25. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
