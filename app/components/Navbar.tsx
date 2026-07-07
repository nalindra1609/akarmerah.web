"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Profile', href: '/profile' },
    { name: 'Divisions', href: '/divisions' },
    { name: 'Publications', href: '/publications' },
    { name: 'Official Documents', href: '/documents' },
    { name: 'Agenda', href: '/agenda' },
  ];

  return (
    <nav className="bg-[#8B0000] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-none flex items-center justify-center font-black text-[#8B0000]">AM</div>
            <span className="font-black tracking-widest text-lg">AKAR MERAH</span>
          </div>

          <div className="hidden md:flex space-x-6 font-bold text-sm uppercase tracking-wider">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-black transition-colors duration-200">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <span className="text-xl font-bold">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pt-2 pb-6 space-y-2 border-t-4 border-[#B22222]">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block py-2 font-bold tracking-wide hover:text-[#B22222]">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}