import data from '../data/mockData.json';

export default function Divisions() {
  return (
    <main className="bg-white text-black py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-16 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-black uppercase tracking-tight">Divisi Kerja</h1>
        <p className="text-xs font-mono text-neutral-500 mt-1">// Fokus Operasional dan Program Kerja Organisasi</p>
      </div>

      <div className="space-y-12">
        {data.divisions.map((div, index) => (
          <div key={div.id} className="border-2 border-black p-8 md:p-12 bg-white flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <span className="text-xs font-mono text-gray-400 block mb-2">0{index + 1} // DIVISI</span>
              <h2 className="text-2xl font-black uppercase text-[#8B0000]">{div.title}</h2>
            </div>
            <div className="md:w-2/3 border-l-0 md:border-l border-neutral-200 md:pl-8">
              <p className="text-sm text-gray-700 leading-relaxed mb-6">{div.description}</p>
              <h3 className="text-xs font-mono uppercase font-bold text-black mb-3">Program Kerja Utama:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {div.programs.map((prog, i) => (
                  <div key={i} className="bg-neutral-50 p-3 border border-neutral-200 text-xs font-bold font-mono text-neutral-700">
                    🔴 {prog}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}