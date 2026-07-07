import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-8 border-[#8B0000] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-black text-[#B22222] mb-4 uppercase tracking-widest">Akar Merah Semarang</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Wadah pembelajaran politik, diskusi kritis, dan aksi kolektif berbasis pengorganisasian pengetahuan di Semarang.
          </p>
        </div>
        <div>
          <h4 className="text-md font-bold uppercase tracking-wider mb-4 text-white">Akses Cepat</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 font-medium">
            <Link href="/publications" className="hover:text-white">Publications</Link>
            <Link href="/agenda" className="hover:text-white">Agenda & Oprec</Link>
            <Link href="/documents" className="hover:text-white">Documents</Link>
            <Link href="/profile" className="hover:text-white">Tentang Kami</Link>
          </div>
        </div>
        <div>
          <h4 className="text-md font-bold uppercase tracking-wider mb-4 text-white">Kontak Resmi</h4>
          <p className="text-sm text-gray-400 leading-relaxed mb-2">Jl. Kebangkitan Rakyat No. 45, Semarang, Jawa Tengah</p>
          <p className="text-sm text-gray-400">Email: kontak@akarmerahsemarang.org</p>
          <p className="text-sm text-gray-400">Telepon: +62 812-3456-7890</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-800 text-center text-xs text-gray-500 font-mono">
        &copy; {new Date().getFullYear()} AKAR MERAH SEMARANG. ALL RIGHTS RESERVED. SOLIDARITAS KEPADA RAKYAT.
      </div>
    </footer>
  );
}