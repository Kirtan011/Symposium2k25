import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-12 py-16">
      {/* Logo Section */}
      <div className="w-full flex justify-between px-0 items-center  sm:p-0">
        <Image
          src="/Logos/SU.png"
          alt="SU Logo"
          width={80}
          height={80}
          className="w-11 sm:w-30 h-auto animate-fadeIn"
        />
        <Image
          src="/Logos/ses_Logo.png"
          alt="SES Logo"
          width={80}
          height={80}
          className="w-11 sm:w-30 h-auto animate-fadeIn"
        />
        <Image
          src="/Logos/kshitij_logo.png"
          alt="Kshitij Logo"
          width={120}
          height={120}
          className="w-45 sm:w-70  h-auto animate-fadeIn ml-5"
        />
        <Image
          src="/Logos/Symposium_original.png"
          alt="Symposium Logo"
          width={150}
          height={80}
          className="w-11 sm:w-28 h-auto animate-fadeIn"
        />
        <Image
          src="/Logos/Scet_Logo.png"
          alt="SCET Logo"
          width={80}
          height={80}
          className="w-11 sm:w-30 h-auto animate-fadeIn"
        />
      </div>
      <hr className=" border-t-2 border-gray-600  sm:w-1/5 opacity-50" />

      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-gray-200 leading-tight">
          Presents <br />
          <Image
            src="/Logos/Symposium_Logo.png"
            alt="TechFest Logo"
            width={800}
            height={140}
            className="mx-auto mt-5 w-100 sm:w-96 md:w-[37rem] h-auto animate-fadeInSlideUp"
          />
        </h1>

        {/* Animated Accent Line */}
        <div className="w-32 h-1 bg-gradient-to-r from-amber-700 via-yellow-500 to-orange-400 rounded-full animate-pulse my-4"></div>

        <p className="text-gray-300 border-1 text-lg sm:text-xl md:text-3xl">
          <span>
            <i>
              &quot;Beyond Scripts, From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-blue-400">
                Sanskrit to Silicon
              </span>
              &quot;
            </i>
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          <Link href="/events">
            <div className="relative w-50 rounded-lg p-[1px] bg-[conic-gradient(from_var(--angle),#000e00,orange,#000000,#000000)] hover:bg-[conic-gradient(from_var(--angle),gray,white,#000000,#000000)] hover:scale-105 transition-all transform animate-gradient-rotate">
              <Button className="w-full rounded-lg cursor-pointer font-bold bg-black hover:bg-black text-white shadow-md">
                See All Events
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full flex justify-center mt-12">
        <Image
          src="/Posters/Symposium_2K25.png"
          alt="TechFest Poster"
          width={900}
          height={450}
          className="rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-gray-200 
           transition-shadow duration-500 ease-in-out object-cover"
        />
      </section>

      <hr className="my-16 border-t-2 border-gray-600 w-full opacity-50" />

      {/* Sponsors Section */}
      <section className="text-center">
        <h1 className="sm:mb-12 text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-gray-200 leading-tight">
          Our Worthy Sponsors
        </h1>
        <div className="w-full flex justify-center items-center gap-12 mt-8">
          <Image
            src="/Logos/IETE.png"
            alt="Sponsor Logo"
            width={100}
            height={100}
            className="w-28 sm:w-40 h-auto animate-fadeIn"
          />
          <Image
            src="/Logos/IEEE.png"
            alt="Sponsor Logo"
            width={100}
            height={100}
            className="w-28 sm:w-40 h-auto animate-fadeIn"
          />
        </div>
      </section>
    </main>
  );
}
