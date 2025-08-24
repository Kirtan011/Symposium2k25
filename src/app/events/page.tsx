import { Button } from "@/components/ui/button";

const EventPage = () => {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-pink-500">
        <h1 className="text-white text-6xl font-bold">Welcome to Symposium</h1>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-300">
            This section has a solid dark background.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="min-h-screen flex items-center justify-center bg-[url('/events-bg.jpg')] bg-cover bg-center text-white">
        <div className="bg-black/50 p-10 rounded-xl">
          <h2 className="text-4xl font-bold">Upcoming Events</h2>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center bg-blue-100 text-black">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </section>
    </main>
  );
};

export default EventPage;
