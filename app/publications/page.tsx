import data from '@/data/mockData.json';

export default function Publications() {
  return (
    <main className="bg-white text-black py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b-4 border-black pb-4 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tight">Kanal Publikasi</h1>
          <p className="text-xs font-mono text-neutral-500 mt-1">// Artikel, Berita Gerakan, & Karya Anggota</p>
        </div>
        {/* Fitur Search & Filter Simulasi */}
        <div className="flex gap-2">
          <input type="text" placeholder="Cari tulisan..." className="border border-black px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-[#8B0000]" />
          <button className="bg-black text-white px-4 py-1.5 text-xs font-bold uppercase">Cari</button>
        </div>
      </div>

      {/* TAB SIMULASI */}
      <div className="flex flex-wrap gap-2 mb-8 border-b pb-4 border-neutral-200 text-xs font-bold uppercase tracking-wider">
        <span className="bg-[#8B0000] text-white px-3 py-1.5 cursor-pointer">Semua</span>
        <span className="bg-neutral-100 text-neutral-700 px-3 py-1.5 hover:bg-neutral-200 cursor-pointer">News</span>
        <span className="bg-neutral-100 text-neutral-700 px-3 py-1.5 hover:bg-neutral-200 cursor-pointer">Articles</span>
        <span className="bg-neutral-100 text-neutral-700 px-3 py-1.5 hover:bg-neutral-200 cursor-pointer">Sastra & Esai</span>
      </div>

      {/* DAFTAR ARTIKEL GRID */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {data.publications.map((pub) => (
          <div key={pub.id} className="border border-neutral-300 p-6 flex flex-col justify-between shadow-sm bg-white hover:border-black transition-colors">
            <div>
              <span className="text-[10px] font-mono uppercase bg-neutral-100 px-2 py-0.5 text-neutral-600 font-bold mb-3 inline-block">{pub.category}</span>
              <h2 className="font-black text-lg mb-2 hover:text-[#8B0000] cursor-pointer leading-tight">{pub.title}</h2>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">{pub.excerpt}</p>
            </div>
            <div className="text-[10px] font-mono text-gray-400 border-t pt-3 flex justify-between">
              <span>Penulis: {pub.author}</span>
              <span>{pub.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FORM KIRIM TULISAN */}
      <div className="border-2 border-black p-8 max-w-2xl mx-auto bg-neutral-50">
        <h2 className="text-xl font-black uppercase mb-2">Formulir Kirim Tulisan</h2>
        <p className="text-xs text-gray-500 mb-6 font-mono">// Salurkan naskah esai, opini, puisi, atau cerpen kritis milikmu.</p>
        <form className="space-y-4 text-xs font-bold uppercase tracking-wide">
          <div>
            <label className="block mb-1">Nama Lengkap / Anonim</label>
            <input type="text" className="w-full border border-neutral-300 p-2 outline-none font-normal" required />
          </div>
          <div>
            <label className="block mb-1">Kategori Tulisan</label>
            <select className="w-full border border-neutral-300 p-2 outline-none font-normal">
              <option>Esai Politik</option>
              <option>Puisi / Sastra</option>
              <option>Kritik Opini</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Tautan Naskah (Google Docs / Drive)</label>
            <input type="url" placeholder="https://docs.google.com/..." className="w-full border border-neutral-300 p-2 outline-none font-normal" required />
          </div>
          <button type="submit" onClick={(e)=>e.preventDefault()} className="bg-[#8B0000] text-white font-black px-6 py-2.5 uppercase tracking-widest hover:bg-[#B22222] transition-colors">
            Kirim Naskah
          </button>
        </form>
      </div>
    </main>
  );
}