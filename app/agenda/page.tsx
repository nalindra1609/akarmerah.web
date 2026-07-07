'use client';
import data from '../data/mockData.json';

export default function Agenda() {
  return (
    <main className="bg-white text-black py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-16 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-black uppercase tracking-tight">Agenda & Aktivitas</h1>
        <p className="text-xs font-mono text-neutral-500 mt-1">// Kalender Aksi, Diskusi, dan Perekrutan Anggota</p>
      </div>

      {/* DAFTAR KALENDER */}
      <div className="mb-20">
        <h2 className="text-xl font-black uppercase mb-6 border-l-4 border-[#8B0000] pl-3">Jadwal Terdekat</h2>
        <div className="space-y-4">
          {data.agenda.map((ag, i) => (
            <div key={i} className="border border-neutral-300 p-4 flex justify-between items-center bg-white shadow-sm">
              <div>
                <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 inline-block mb-1.5 ${ag.status === 'Upcoming' ? 'bg-red-100 text-red-700' : ag.status === 'Ongoing' ? 'bg-amber-100 text-amber-700' : 'bg-neutral-100 text-neutral-500'}`}>{ag.status}</span>
                <h3 className="font-bold text-sm sm:text-base text-black">{ag.title}</h3>
                <p className="text-xs text-gray-500 font-mono mt-0.5">{ag.date} | Waktu: {ag.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OPEN RECRUITMENT SECTION */}
      <div className="border-4 border-black p-8 bg-[#8B0000] text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide mb-2">Pendaftaran Anggota Baru (Open Recruitment)</h2>
          <p className="text-xs font-mono text-neutral-200 mb-6">// Bergabung Menjadi Bagian Dari Intelektual Organik Semarang</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8 text-sm">
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-2 text-black bg-white px-2 py-0.5 inline-block text-xs">Syarat Pendaftaran</h3>
              <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-100">
                <li>Berdomisili atau berkuliah/bekerja di area Semarang.</li>
                <li>Memiliki ketertarikan kuat pada isu sosial-politik dan literasi.</li>
                <li>Sanggup berkomitmen mengikuti forum diskusi berkala.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-2 text-black bg-white px-2 py-0.5 inline-block text-xs">Timeline Oprec</h3>
              <p className="text-xs text-neutral-100 font-mono leading-relaxed">
                - Pendaftaran: 10 - 25 Juli 2026<br />
                - Wawancara Kolektif: 28 - 30 Juli 2026<br />
                - Pengumuman & Welcoming: 03 Agustus 2026
              </p>
            </div>
          </div>

          {/* FORM PENDAFTARAN OPREC */}
          <div className="bg-white text-black p-6 rounded-none">
            <h4 className="font-black uppercase text-base mb-4 text-center border-b pb-2 border-neutral-300">Formulir Pendaftaran Fast-Track</h4>
            <form className="space-y-4 text-xs font-bold uppercase">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Nama Lengkap</label>
                  <input type="text" className="w-full border p-2 font-normal" required />
                </div>
                <div>
                  <label className="block mb-1">Nomor WhatsApp</label>
                  <input type="tel" className="w-full border p-2 font-normal" required />
                </div>
              </div>
              <div>
                <label className="block mb-1">Alasan Ingin Bergabung</label>
                <textarea rows={3} className="w-full border p-2 font-normal" placeholder="Tulis esai singkat alasanmu..."></textarea>
              </div>
              <button type="submit" onClick={(e)=>e.preventDefault()} className="w-full bg-black text-white font-black py-3 uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                Kirim Formulir Pendaftaran
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}