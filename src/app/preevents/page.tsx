import { EventCard, preEventData } from "@/components/EventCards/EventCard";

const EventPage = () => {
  return (
    <main className="pt-24 px-6 animate-fadeInSlideUp">
      <section>
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12">
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-green-100 bg-clip-text text-transparent">
            Pre-Symposium
          </span>{" "}
          Events 🚀
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {preEventData?.map((data, id) => (
            <EventCard key={id} {...data} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default EventPage;
