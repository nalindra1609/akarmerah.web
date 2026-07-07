import data from '@/data/mockData.json';

export default function Profile() {
  return (
    <main className="bg-white text-black py-16 px-6 max-w-7xl mx-auto">
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

      {/* STRUKTUR ORGANISASI */}
      <div className="mb-20">
        <h2 className="text-2xl font-black uppercase text-center mb-12">Struktur Kepengurusan</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.structure.map((member, i) => (
            <div key={i} className="border border-neutral-300 p-6 bg-white shadow-sm hover:border-black transition-colors">
              <div className="w-16 h-16 bg-neutral-200 text-neutral-500 font-bold text-xl flex items-center justify-center mb-4 rounded-none font-mono">
                👤
              </div>
              <h3 className="font-black text-base text-black">{member.name}</h3>
              <p className="text-xs font-bold text-[#8B0000] uppercase mb-3">{member.position}</p>
              <p className="text-xs text-gray-500 italic border-l-2 pl-2 border-neutral-300">"{member.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}