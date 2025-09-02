const facultyHeads = [
  {
    name: "Dr. Vandana Shah",
    role: " Faculty Coordinator",
    email: "vandana.shah@scet.ac.in",
    phone: "7874359882",
    img: "/Peoples/VandanaMam.png",
  },
  {
    name: "Prof. Pritesh Saxena",
    role: " Faculty Coordinator",
    email: "pritesh.saxena@scet.ac.in",
    phone: "9979573245",
    img: "/Peoples/PriteshSir.png",
  },
  {
    name: "Prof Chintan Panchal",
    role: " Faculty Co-Coordinator",
    email: "chintan.panchal@scet.ac.in",
    phone: "9909152281",
    img: "/Peoples/ChintanSir.png",
  },
];

type TeamCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
  img?: string;
};

function FacultyHeadCard({ name, role, email, phone, img }: TeamCardProps) {
  return (
    <div
      className="relative w-full max-w-[360px] sm:w-[280px] md:w-[320px] lg:w-[340px] 
  bg-transparent backdrop-blur-none rounded-3xl hover:border-gray-500 shadow-lg 
  border border-gray-800 overflow-hidden hover:shadow-2xl hover:-translate-y-2 
  transition-all duration-300 group "
    >
      {/* Profile Image */}
      <div className="relative flex justify-center mt-6">
        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-white to-black p-[2px] hover:to-black shadow-lg group-hover:scale-105 transition-all">
          <img
            className="w-full h-full rounded-full object-cover border-4 border-gray-900"
            src={img || "./Background.jpg"}
            alt={name}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center space-y-3">
        {/* Name + Role */}
        <div>
          <h2 className="text-2xl font-bold text-white">{name}</h2>
          <p className="text-sm font-semibold text-orange-400 tracking-wide uppercase">
            {role}
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-gray-300">
          <p className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8-4H8m8 8H8m-2 4h12a2 2 0 002-2V6a2 2 0 
                00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{email}</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h2l3.6 7.59a1 1 0 00.9.41h7a1 1 0 
                00.9-.41L19 5H21M16 13v6H8v-6"
              />
            </svg>
            <span>{phone}</span>
          </p>
        </div>
      </div>

      {/* Glow Line at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 via-black to-gray-500"></div>
    </div>
  );
}

export { FacultyHeadCard, facultyHeads };
