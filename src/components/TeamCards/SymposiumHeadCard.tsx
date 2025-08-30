// Fake data
const symposiumHeads = [
  {
    name: "Vani Shekhadia",
    role: "Symposium Head",
    email: "vanishekadia.ec22@scet.ac.in",
    phone: "7698964335",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg",
  },
  {
    name: "Dushyant Prajapati",
    role: "Symposium Head",
    email: "dushyantprajapati.ec22@scet.ac.in",
    phone: "6359394168",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg",
  },
  {
    name: "Mudit Saboo",
    role: "Symposium Head",
    email: "muditsaboo.ec22@scet.ac.in",
    phone: "9724616989",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg",
  },
  {
    name: "Manasvi Mehta",
    role: "Symposium Head",
    email: "manasvimehta.ec22@scet.ac.in",
    phone: "9313371485",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg",
  },
];

type TeamCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
  img?: string;
  size?: "sm" | "md" | "lg";
};

function SymposiumHeadCard({
  name,
  role,
  email,
  phone,
  img,
  size = "md",
}: TeamCardProps) {
  // Size-based styles
  const sizeClasses = {
    sm: "w-full max-w-[280px] p-4 text-sm",
    md: "w-full max-w-[360px] p-6 text-base",
    lg: "w-full max-w-[420px] p-8 text-lg",
  };

  const imageSize = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-28 h-28",
  };

  return (
    <div
      className={`relative bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl flex flex-row items-center border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all group duration-300 ${sizeClasses[size]}`}
    >
      {/* Profile Image */}
      <div className="flex-shrink-0 group-hover:scale-105 transition-all mr-6">
        <div
          className={`${imageSize[size]} rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 p-1`}
        >
          <img
            className="w-full h-full rounded-full object-cover border-4 border-white"
            src={img || "./Background.jpg"}
            alt={name}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center flex-grow space-y-2">
        {/* Name + Role */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className="text-md text-orange-500 fira-sans-bold font-medium">
            {role}
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-1 text-sm text-gray-600">
          <p className="flex items-center flex-wrap break-words">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0"
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
            <span className="break-words">{email}</span>
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-orange-500"
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
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export { SymposiumHeadCard, symposiumHeads };
