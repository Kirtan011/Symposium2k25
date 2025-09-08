import "./globals.css";
import Navbar from "../components/ui/navbar";
import ParticlesBackground from "@/components/ui/Background";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Baloo+2&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Russo+One&display=swap')');`}
        </style>
      </head>
      <body className="min-h-screen bg-cover bg-center bg-fixed">
        <ParticlesBackground />
        <header>
          {" "}
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-transparent backdrop-blur-xs border-t border-gray-600 text-gray-300 mt-10">
          <div className="container mx-auto px-6 py-6 flex flex-col items-center space-y-4">
            {/* Center - Branding */}
            <div className="text-xs text-gray-300 text-right  tracking-wide">
              <p className=" flex relative  text-sm text-gray-400">
                Designed and developed by&nbsp;<b>Kirtan Suthar</b>
                <img
                  src="/Peoples/Kirtan.png"
                  className="absolute left-[280px] -top-[10px] w-10 border-2 border-white  h-10 rounded-[100%]"
                />
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-gray-400">
                Follow symposium page on Instagram
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-300 hover:text-pink-500 transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.9.3 4.2.6 3.4.9 2.8 1.3 2.2 1.9c-.6.6-1 1.2-1.3 2C.6 4.6.4 5.4.4 6.7.3 8 .3 8.4.3 12c0 3.6 0 4 .1 5.3.1 1.3.3 2.1.6 2.8.3.8.7 1.4 1.3 2 .6.6 1.2 1 2 1.3.7.3 1.5.5 2.8.6 1.3.1 1.7.1 5.3.1s4 0 5.3-.1c1.3-.1 2.1-.3 2.8-.6.8-.3 1.4-.7 2-1.3.6-.6 1-1.2 1.3-2 .3-.7.5-1.5.6-2.8.1-1.3.1-1.7.1-5.3s0-4-.1-5.3c-.1-1.3-.3-2.1-.6-2.8-.3-.8-.7-1.4-1.3-2-.6-.6-1.2-1-2-1.3-.7-.3-1.5-.5-2.8-.6C16 0 15.6 0 12 0z" />
                  <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zM18.4 4.6a1.44 1.44 0 1 0 1.44 1.44A1.44 1.44 0 0 0 18.4 4.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom small line */}
          <div className="text-center text-sm text-gray-500 border-t border-gray-700 py-3">
            © {new Date().getFullYear()} Symposium 2K25. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
