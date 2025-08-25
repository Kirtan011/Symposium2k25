"use client";

import React, { useState } from "react";
import "../globals.css";

// Fake data
const contacts = [
  {
    name: "Vani Shekhadia",
    role: "Symposium Head",
    email: "muditsaboo100@gmail.com",
    phone: "01992929",
    img: "https://via.placeholder.com/150", // sample image
  },
  {
    name: "Dushyant Prajapati",
    role: "Symposium Head",
    email: "aarav.sharma@example.com",
    phone: "01992930",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Mudit Saboo",
    role: "Symposium Head",
    email: "priya.gupta@example.com",
    phone: "01992931",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Manasvi Mehta",
    role: "Symposium Head",
    email: "priya.gupta@example.com",
    phone: "01992931",
    img: "https://via.placeholder.com/150",
  },
];

type TeamCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
  img?: string;
};

function TeamCard({ name, role, email, phone, img }: TeamCardProps) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        className="w-24 h-24 rounded-full border-4 border-orange-400 object-cover"
        src={img || "https://via.placeholder.com/150"}
        alt={name}
      />
      <h2 className="mt-4 text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm">{role}</p>

      <div className="mt-3 text-center">
        <p className="text-gray-600 text-sm">{email}</p>
        <p className="text-gray-600 text-sm">{phone}</p>
      </div>

      <button className="mt-4 px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500">
        Contact
      </button>
    </div>
  );
}

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      <section className="grid sm:grid-cols-2 gap-4">
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8 flex items-center justify-center">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="bg-blue-800 rounded-lg text-5xl font-semibold tracking-tight text-white sm:text-7xl p-4">
              Meet The Team Behind Symposium 2025
            </h1>
          </div>
        </div>

        {/* Team Section */}
        <div className="pt-24 h-[90vh] overflow-y-auto pr-4 scrollbar-hide">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {contacts.map((contact, id) => (
              <TeamCard
                key={id}
                email={contact.email}
                role={contact.role}
                name={contact.name}
                phone={contact.phone}
                img={contact.img}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 gap-4">
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8 flex items-center justify-center">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="bg-blue-800 rounded-lg text-5xl font-semibold tracking-tight text-white sm:text-7xl p-4">
              Meet The Team Behind Symposium 2025
            </h1>
          </div>
        </div>

        {/* Team Section */}
        <div className="pt-24 h-[90vh] overflow-y-auto pr-4 scrollbar-hide">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {contacts.map((contact, id) => (
              <TeamCard
                key={id}
                email={contact.email}
                role={contact.role}
                name={contact.name}
                phone={contact.phone}
                img={contact.img}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
