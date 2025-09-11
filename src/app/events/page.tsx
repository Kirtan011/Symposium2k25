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
          Events 🤖
        </h1>

        {/* First row → exactly 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-1">
          {techEventData.slice(0, 3).map((data, id) => (
            <EventCard key={id} {...data} />
          ))}
        </div>

        {/* Second row → 2 cards centered */}
        <div className="sm:flex sm:justify-center gap-8">
          {techEventData.slice(3).map((data, id) => (
            <div
              key={id + 3}
              className="w-full sm:w-1/2 lg:w-1/3 max-w-sm mt-12 "
            >
              <EventCard {...data} />
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 border-t-2 border-gray-600 opacity-50" />

      <section>
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12">
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-green-100 bg-clip-text text-transparent">
            Non-Technical
          </span>{" "}
          Events 🧩
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
