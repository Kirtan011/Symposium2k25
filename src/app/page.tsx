import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-12 py-16">
      {/* Logo Section */}
      <div className="w-full flex flex-wrap justify-center items-center gap-6 mb-2">
        <Image
          src="/Logos/SU.png"
          alt="SU Logo"
          width={80}
          height={80}
          className="w-16 sm:w-28 h-auto animate-fadeIn"
        />
        <Image
          src="/Logos/ses_Logo.png"
          alt="SES Logo"
          width={80}
          height={80}
          className="w-16 sm:w-28 h-auto animate-fadeIn"
        />
        <Image
          src="/Logos/kshitij_logo.png"
          alt="Kshitij Logo"
          width={120}
          height={120}
          className="w-24 sm:w-70 h-auto animate-fadeIn"
        />
        <Image
          src="/Logos/Symposium_original.png"
          alt="Symposium Logo"
          width={150}
          height={80}
          className="w-20 sm:w-32 h-auto animate-fadeIn"
        />
        <Image
          src="/Logos/Scet_Logo.png"
          alt="SCET Logo"
          width={80}
          height={80}
          className="w-16 sm:w-28 h-auto animate-fadeIn"
        />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-gray-200 leading-tight">
          Presents <br />
          <Image
            src="/Logos/Symposium_Logo.png"
            alt="TechFest Logo"
            width={800}
            height={140}
            className="mx-auto w-72 sm:w-96 md:w-[32rem] h-auto animate-fadeInSlideUp"
          />
        </h1>

        {/* Animated Accent Line */}
        <div className="w-32 h-1 bg-gradient-to-r from-amber-700 via-yellow-500 to-orange-400 rounded-full animate-pulse my-4"></div>

        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl">
          ⚙️{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-200 to-blue-200">
            &quot;Beyond Scripts, From Sanskrit to Silicon&quot;
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          <Link href="/events">
            <button className="px-6 py-2 cursor-pointer bg-amber-900 text-white font-semibold rounded-xl shadow-xl hover:bg-amber-700 transition-all transform hover:-translate-y-1 hover:scale-105">
              See All Events
            </button>
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

      <hr className="my-12 border-t-2 border-gray-600 opacity-50" />

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
