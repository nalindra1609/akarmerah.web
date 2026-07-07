import data from '../data/mockData.json';

export default function Documents() {
  return (
    <main className="bg-white text-black py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-16 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-black uppercase tracking-tight">Arsip & Dokumen Resmi</h1>
        <p className="text-xs font-mono text-neutral-500 mt-1">// Bentuk Transparansi Organisasi & Konstitusi Dasar</p>
      </div>

      <div className="border border-black divide-y divide-black">
        {data.documents.map((doc, i) => (
          <div key={i} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white hover:bg-neutral-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-mono text-[#8B0000]">📄</div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-black">{doc.name}</h3>
                <p className="text-[11px] font-mono text-gray-400 uppercase mt-0.5">Format: {doc.type} | Ukuran: {doc.size}</p>
              </div>
            </div>
            <button onClick={() => alert('Fitur simulasi download berhasil!')} className="border border-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors text-center sm:w-auto">
              Unduh File
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}