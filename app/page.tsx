import data from '@/data/mockData.json';
import Link from 'next/link';

export default function Home() {
  const { hero, divisions, publications } = data;

  return (
    <main className="bg-white text-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-black text-white py-28 px-6 text-center overflow-hidden border-b-8 border-[#8B0000]">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[#B22222] font-black tracking-widest text-xs uppercase block mb-3">// Semarang Political Movement</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">{hero.title}</h1>
          <p className="text-lg md:text-xl font-bold text-neutral-300 italic max-w-2xl mx-auto mb-6 border-l-4 border-[#B22222] pl-4">
            "{hero.subtitle}"
          </p>
          <p className="text-sm md:text-base text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed">{hero.description}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/profile" className="bg-[#8B0000] hover:bg-[#B22222] text-white font-bold px-8 py-3 rounded-none uppercase tracking-wider text-xs transition-transform transform hover:-translate-y-0.5">
              Tentang Kami
            </Link>
            <Link href="/publications" className="border-2 border-white hover:bg-white hover:text-black text-white font-bold px-8 py-3 rounded-none uppercase tracking-wider text-xs transition-transform transform hover:-translate-y-0.5">
              Baca Publikasi
            </Link>
          </div>
        </div>
      </section>

      {/* CORE DIVISIONS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">3 Divisi Inti Gerakan</h2>
          <div className="h-1.5 w-16 bg-[#8B0000] mx-auto mt-3"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((div) => (
            <div key={div.id} className="border-2 border-black p-8 bg-white hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 bg-[#8B0000] text-white group-hover:bg-white group-hover:text-black flex items-center justify-center font-black text-lg mb-6">★</div>
                <h3 className="text-lg font-black uppercase mb-3 tracking-wide">{div.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed mb-6">{div.description}</p>
              </div>
              <ul className="border-t border-neutral-200 group-hover:border-neutral-800 pt-4 space-y-1.5 text-xs font-mono text-neutral-500 group-hover:text-neutral-400">
                {div.programs.map((prog, i) => <li key={i}>// {prog}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST PUBLICATIONS COMPACT */}
      <section className="bg-neutral-50 py-20 px-6 border-t border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase">Rilisan Terbaru</h2>
              <p className="text-xs font-mono text-gray-500 mt-1">Produksi Pengetahuan Terkini</p>
            </div>
            <Link href="/publications" className="text-sm font-bold text-[#8B0000] hover:underline uppercase">Semua Tulisan &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <div key={pub.id} className="bg-white p-6 border border-neutral-200 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[10px] font-mono uppercase bg-neutral-100 px-2 py-1 text-neutral-600 font-bold mb-3 inline-block">{pub.category}</span>
                  <h3 className="font-bold text-base mb-2 hover:text-[#8B0000] cursor-pointer">{pub.title}</h3>
                  <p className="text-gray-600 text-xs line-clamp-3 mb-4 leading-relaxed">{pub.excerpt}</p>
                </div>
                <div className="text-[11px] font-mono text-gray-400 border-t pt-3 flex justify-between">
                  <span>Oleh: {pub.author}</span>
                  <span>{pub.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAL TO ACTION */}
      <section className="bg-neutral-900 text-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black uppercase mb-3 tracking-wide">Mari Berorganisasi & Mengorganisir</h2>
          <p className="text-neutral-400 text-sm mb-8">Bergabunglah dalam barisan kesadaran kritis Akar Merah untuk mewujudkan emansipasi sosial.</p>
          <Link href="/agenda" className="bg-[#8B0000] hover:bg-[#B22222] text-white font-bold px-10 py-4 uppercase text-xs tracking-widest transition-colors">
            Gabung Gerakan (Open Recruitment)
          </Link>
        </div>
      </section>
    </main>
  );
}