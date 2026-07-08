'use client';

import React from 'react';
import data from '../data/mockData.json';

// Membuat definisi tipe (interface) agar TypeScript tahu struktur data member,
// dan menandai bahwa properti 'image' bersifat opsional (?) agar tidak memicu error di Vercel.
interface StructuralMember {
  name: string;
  position: string;
  message: string;
  image?: string;
}

export default function Profile() {
  // Memastikan data.structure dibaca sesuai dengan tipe data di atas
  const structures: StructuralMember[] = data.structure;

  return (
    <main className="bg-white text-black py-16 px-6 max-w-7xl mx-auto">
      {/* JUDUL HALAMAN */}
      <div className="mb-16 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-black uppercase tracking-tight">Profil Organisasi</h1>
        <p className="text-xs font-mono text-neutral-500 mt-1">// Arah Gerak & Struktur Ideologis</p>
      </div>

      {/* TENTANG & VALUE */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-black uppercase text-[#8B0000] mb-4">Sejarah & Latar Belakang</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Akar Merah Semarang didirikan sebagai respon atas gersangnya ruang diskusi kritis dan perlunya wadah intelektual organik yang independen di kota Semarang. Kami percaya bahwa setiap aksi yang berdampak harus didasari oleh basis teori dan kajian data yang matang.
          </p>
        </div>
        <div className="border-4 border-black p-6 bg-neutral-50">
          <h2 className="text-xl font-black uppercase mb-4">// Nilai Inti Gerakan</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-sm uppercase text-[#8B0000]">1. Kritis</h3>
              <p className="text-xs text-gray-600">Selalu mempertanyakan status quo dan menganalisis kebijakan dari kacamata struktural kelas.</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-[#8B0000]">2. Kolektif</h3>
              <p className="text-xs text-gray-600">Mengutamakan musyawarah, kerja komunal, dan menolak kepemimpinan yang berwatak otoriter.</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-[#8B0000]">3. Emansipatoris</h3>
              <p className="text-xs text-gray-600">Segala bentuk pengetahuan harus ditujukan untuk membebaskan dan membela hak-hak kaum tertindas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* STRUKTUR ORGANISASI (YANG SUDAH DI-ROMBAK MENURUN ELEGAN) */}
      <div className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-black text-center uppercase tracking-wider mb-12 border-b-2 border-[#8B0000] pb-4">
          Struktur Kepengurusan
        </h2>

        {/* List Pengurus Menurun Ke Bawah */}
        <div className="flex flex-col gap-6">
          {structures.map((member, i) => (
            <div 
              key={i}
              className="bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-xl p-6 flex flex-col md:flex-row items-center gap-6 transition-all duration-500 ease-out transform hover:-translate-y-1 hover:border-[#8B0000]/30"
            >
              {/* Bagian Foto Bulat */}
              <div className="w-24 h-24 md:w-28 md:h-28 relative flex-shrink-0">
                <img 
                  src={member.image || "/avatar-placeholder.jpg"} 
                  alt={member.name} 
                  className="w-full h-full rounded-full object-cover border-2 border-[#8B0000] shadow-md"
                />
              </div>

              {/* Bagian Informasi Teks */}
              <div className="text-center md:text-left flex-grow">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8B0000] bg-[#8B0000]/10 px-3 py-1 rounded-full">
                  {member.position}
                </span>
                <h3 className="text-xl font-black text-neutral-900 mt-2 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-sm italic text-neutral-500 mt-2 font-medium border-l-2 border-neutral-300 pl-3 md:block inline-block">
                  {member.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}