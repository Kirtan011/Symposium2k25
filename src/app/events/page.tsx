import {
  EventCard,
  nonTechEventData,
  techEventData,
} from "@/components/EventCards/EventCard";

const EventPage = () => {
  return (
    <main className="pt-24 px-6 animate-fadeInSlideUp">
      <section>
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12">
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-green-100 bg-clip-text text-transparent">
            Technical
          </span>{" "}
          Events 🚀
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {techEventData?.map((data, id) => (
            <EventCard key={id} {...data} />
          ))}
        </div>
      </section>

      <hr className="my-12 border-t-2 border-gray-600 opacity-50" />

      <section>
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12">
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-green-100 bg-clip-text text-transparent">
            Non-Technical
          </span>{" "}
          Events 🚀
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {nonTechEventData?.map((data, id) => (
            <EventCard key={id} {...data} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default EventPage;
