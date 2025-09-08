import { Button } from "@/components/ui/button";
import Image from "next/image";
import "@/app/globals.css";

const eventData = [
  {
    img: "/Posters/Symposium_2k25.jpg",
    formLink: "#",
    tagline: "Beyond Languages, Towards Logic",
  },
  {
    img: "/Posters/Symposium_2k25.jpg",
    formLink: "#",
    tagline: "The Future of Electronics",
  },
  {
    img: "/Posters/Symposium_2k25.jpg",
    formLink: "#",
    tagline: "Beyond Languages, Towards Logic",
  },
  {
    img: "/Posters/Symposium_2k25.jpg",
    formLink: "#",
    tagline: "The Future of Electronics",
  },
  {
    img: "/Posters/Symposium_2k25.jpg",
    formLink: "#",
    tagline: "Beyond Languages, Towards Logic",
  },
  {
    img: "/Posters/Symposium_2k25.jpg",
    formLink: "#",
    tagline: "The Future of Electronics",
  },
  {
    img: "/Posters/Symposium_2k25.jpg",
    formLink: "#",
    tagline: "Beyond Languages, Towards Logic",
  },
  {
    img: "/Posters/Symposium_2k25.jpg",
    formLink: "#",
    tagline: "The Future of Electronics",
  },
];

type PosterProp = {
  img: string;
  formLink?: string;
  tagline?: string;
};

const EventCard = ({ img, formLink, tagline }: PosterProp) => {
  return (
    <section className="relative p-[1px] rounded-xl bg-[conic-gradient(from_var(--angle),#000e00,#000001,#000000,gray,#000000)] hover:bg-[conic-gradient(from_var(--angle),orange,#000001,orange,orange)] animate-gradient-rotate ">
      {/* Inner Card */}
      <div className=" relative flex flex-col  rounded-xl bg-black  shadow-md overflow-hidden transition-all duration-300  group">
        {/* Image */}
        <div className="relative flex justify-center h-100">
          <Image
            src={img}
            alt="Event Poster"
            fill
            className="object-contain saturate-30 hover:scale-105 hover:translate-y-[10px] top-1 rounded-t-2xl transition-all duration-300 group-hover:saturate-100"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 justify-between p-5 text-center">
          {tagline && (
            <p className="text-gray-300 text-base md:text-lg font-medium mb-4 line-clamp-2">
              {tagline}
            </p>
          )}
          <a href={formLink} target="_blank">
            <div className="relative rounded-lg  p-[1px] bg-[conic-gradient(from_var(--angle),#000e00,powderblue,#000000,#000000)] hover:bg-[conic-gradient(from_var(--angle),gray,white,#000000,#000000)] hover:scale-105 transition-all transform  animate-gradient-rotate ">
              <Button className="w-full rounded-lg cursor-pointer font-bold bg-black  hover:bg-black text-white shadow-md">
                Register Now
              </Button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { EventCard, eventData };
