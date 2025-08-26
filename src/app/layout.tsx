import "./globals.css";
import Navbar from "../components/ui/navbar";
import ParticlesBackground from "@/components/ui/Background";

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
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
