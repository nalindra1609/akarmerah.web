'use client';

import React from 'react';
import data from '../data/mockData.json';

export default function Profile() {
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

      {/* STRUKTUR ORGANISASI (MENURUN, MINIMALIS, BEBAS EROR FOTO) */}
      <div className="max-w-3xl mx-auto mt-24">
        <h2 className="text-3xl font-black text-center uppercase tracking-wider mb-12 border-b-2 border-[#8B0000] pb-4">
          Struktur Kepengurusan
        </h2>

        {/* List Pengurus Menurun Ke Bawah */}
        <div className="flex flex-col gap-4">
          {data.structure.map((member, i) => (
            <div 
              key={i}
              className="bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 ease-out border-l-4 hover:border-l-[#8B0000]"
            >
              {/* Nama & Jabatan */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B0000] bg-[#8B0000]/10 px-2 py-0.5 rounded">
                  {member.position}
                </span>
                <h3 className="text-lg font-black text-neutral-900 mt-1 tracking-wide">
                  {member.name}
                </h3>
              </div>

              {/* Pesan / Quotes Pendek */}
              <div className="md:max-w-md text-left border-t md:border-t-0 md:border-l border-neutral-200 pt-3 md:pt-0 md:pl-4">
                <p className="text-xs italic text-neutral-500 font-medium">
                  "{member.message}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}