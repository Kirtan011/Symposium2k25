const facultyHeads = [
  {
    name: "Prof. Prtiesh Saxena",
    role: " Faculty Coordinator",
    email: "priteshsaxena@example.com",
    phone: "01992931",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg",
  },
  {
    name: "Prof. Vandana Shah",
    role: " Faculty Co-coordinator",
    email: "priteshsaxena@example.com",
    phone: "01992931",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg",
  },
  {
    name: "Prof Prtiesh Saxena",
    role: " Faculty Coordinator",
    email: "priteshsaxena@example.com",
    phone: "01992931",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg",
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
  bg-gradient-to-b from-white/70 to-white/40 backdrop-blur-xl rounded-3xl shadow-lg 
  border border-white/20 overflow-hidden hover:shadow-2xl hover:-translate-y-2 
  transition-all duration-300 group"
    >
      {/* Profile Image */}
      <div className="relative flex justify-center mt-6">
        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 p-[3px] shadow-lg group-hover:scale-105 transition-all">
          <img
            className="w-full h-full rounded-full object-cover border-4 border-white"
            src={img || "./Background.jpg"}
            alt={name}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center space-y-3">
        {/* Name + Role */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <p className="text-sm font-semibold text-orange-600 tracking-wide uppercase">
            {role}
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-gray-700">
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
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500"></div>
    </div>
  );
}

export { FacultyHeadCard, facultyHeads };
