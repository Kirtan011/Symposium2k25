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
            {/* Designer credit */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-3 text-sm text-gray-400 text-center sm:text-left">
              <span>
                Designed and developed by <b className="ml-1">Kirtan Suthar</b>
              </span>
              <img
                src="/Peoples/Kirtan.png"
                alt="Kirtan"
                className="mt-2 sm:mt-0 w-10 h-10 border-2 border-white rounded-full"
              />
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-gray-400">
                Follow symposium page on Instagram
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-400 hover:text-pink-500 transition-colors duration-300"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 1.687c-3.16 0-3.507.012-4.737.07-1.064.049-1.64.218-2.022.367-.51.198-.875.436-1.259.82-.384.384-.622.749-.82 1.259-.149.382-.318.958-.367 2.022-.058 1.23-.07 1.577-.07 4.737s.012 3.507.07 4.737c.049 1.064.218 1.64.367 2.022.198.51.436.875.82 1.259.384.384.749.622 1.259.82.382.149.958.318 2.022.367 1.23.058 1.577.07 4.737.07s3.507-.012 4.737-.07c1.064-.049 1.64-.218 2.022-.367.51-.198.875-.436 1.259-.82.384-.384.622-.749.82-1.259.149-.382.318-.958.367-2.022.058-1.23.07-1.577.07-4.737s-.012-3.507-.07-4.737c-.049-1.064-.218-1.64-.367-2.022-.198-.51-.436-.875-.82-1.259-.384-.384-.749-.622-1.259-.82-.382-.149-.958-.318-2.022-.367-1.23-.058-1.577-.07-4.737-.07zm0 3.905a5.932 5.932 0 1 1 0 11.865 5.932 5.932 0 0 1 0-11.865zm0 1.687a4.245 4.245 0 1 0 0 8.49 4.245 4.245 0 0 0 0-8.49zm5.406-2.846a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="text-center text-sm text-gray-500 border-t border-gray-700 py-3">
            © {new Date().getFullYear()} Symposium 2K25. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
