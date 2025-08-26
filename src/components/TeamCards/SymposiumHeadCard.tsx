// Fake data
const symposiumHeads = [
  {
    name: "Vani Shekhadia",
    role: "Symposium Head",
    email: "vanishekadia@gmail.com",
    phone: "01992929",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg", // sample image
  },
  {
    name: "Dushyant Prajapati",
    role: "Symposium Head",
    email: "dushyantprajapati@example.com",
    phone: "01992930",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg",
  },
  {
    name: "Mudit Saboo",
    role: "Symposium Head",
    email: "muditsaboo@example.com",
    phone: "01992931",
    img: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg",
  },
  {
    name: "Manasvi Mehta",
    role: "Symposium Head",
    email: "manasvimehta@example.com",
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

function SymposiumHeadCard({ name, role, email, phone, img }: TeamCardProps) {
  return (
    <div className="relative w-[380px] pl-2  bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-row items-center border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Profile Image */}
      <div className="flex-shrink-0 mr-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 p-1">
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
                d="M16 12H8m8-4H8m8 8H8m-2 4h12a2 2 0 002-2V6a2 2 0 
           00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {email}
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
