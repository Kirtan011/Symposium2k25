import { EventCard, eventData } from "@/components/EventCards/EventCard";

const EventPage = () => {
  return (
    <main className="pt-24 px-6 animate-fadeInSlideUp">
      <section>
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12">
          Upcoming Events 🚀
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {eventData?.map((data, id) => (
            <EventCard key={id} {...data} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default EventPage;
