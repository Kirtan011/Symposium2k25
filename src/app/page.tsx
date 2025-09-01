import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-12 py-16">
      {/* Logo Section */}
      <div>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 sm:top-8">
          <Image
            src="/Logos/kshitij_logo.png"
            alt="TechFest Logo"
            width={350}
            height={100}
            className="sm:ml-8 ml-1/2 w-78 h-40 sm:w-80 sm:h-48 animate-fadeIn"
          />
        </div>

        {/* Hero Section */}
        <section className="sm:mt-30 mt-32 flex flex-col items-center gap-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-gray-200 leading-tight">
            Presents <br />
            <Image
              src="/Logos/Symposium_Logo.png"
              alt="TechFest Logo"
              width={800}
              height={140}
              className="sm:ml-1/2 ml-1/2 w-150 h-45 sm:w-180 sm:h-80 animate-fadeInSlideUp"
            />
          </h1>

          {/* Animated Accent Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-amber-700 via-yellow-500 to-orange-400 rounded-full animate-pulse my-4"></div>

          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl">
            ⚙️{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-200 to-blue-200">
              &quot;Beyond Languages, Towards Logic&quot;
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
      </div>

      {/* Hero Image */}
      <section className="w-full flex justify-center mt-12">
        <Image
          src="/Posters/Symposium_2k25.jpg"
          alt="TechFest Poster"
          width={900}
          height={450}
          className="rounded-3xl shadow-2xl object-cover"
        />
      </section>
    </main>
  );
}
