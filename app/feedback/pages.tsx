'use client';

import { useState, useEffect } from 'react';
// Mengambil daftar kata kasar dari folder data
import badWordsList from '@/data/badwords.json';

// Struktur data untuk satu kotak surat
interface FeedbackMessage {
  id: string;
  name: string;
  message: string;
  date: string;
}

export default function FeedbackPage() {
  // State untuk menyimpan semua pesan yang masuk
  const [messages, setMessages] = useState<FeedbackMessage[]>([]);
  // State untuk form input
  const [name, setName] = useState('');
  const [messageText, setMessageText] = useState('');
  // State untuk status Admin (untuk simulasi tombol hapus)
  const [isAdmin, setIsAdmin] = useState(false);

  // Load pesan contoh saat halaman pertama kali dibuka
  useEffect(() => {
    setMessages([
      {
        id: '1',
        name: 'Budi Utomo',
        message: 'Websitenya keren banget! Desain merahnya berani dan infonya lengkap.',
        date: '07/07/2026',
      },
      {
        id: '2',
        name: 'Anonim',
        message: 'Kritik dikit, mungkin ukuran font di bagian berita bisa agak dibesarkan ya admin. Sukses terus!',
        date: '07/07/2026',
      },
    ]);
  }, []);

  // Fungsi untuk menyensor kata kasar otomatis
  const filterBadWords = (text: string) => {
    let filteredText = text;
    badWordsList.forEach((word) => {
      // Membuat pencarian kata tanpa peduli huruf besar/kecil
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      // Mengganti kata kasar menjadi sensor ****
      filteredText = filteredText.replace(regex, '****');
    });
    return filteredText;
  };

  // Fungsi saat tombol "Kirim" diklik
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !messageText.trim()) return;

    // Sensor otomatis dijalankan di sini sebelum disimpan
    const cleanMessage = filterBadWords(messageText);

    const newMessage: FeedbackMessage = {
      id: Date.now().toString(),
      name: name,
      message: cleanMessage,
      date: new Date().toLocaleDateString('id-ID'),
    };

    setMessages([newMessage, ...messages]);
    setName('');
    setMessageText('');
  };

  // Fungsi khusus admin untuk menghapus pesan
  const handleDelete = (id: string) => {
    const confirmDelete = confirm('Apakah Anda yakin ingin menghapus pesan ini?');
    if (confirmDelete) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-600 mb-2">KOTAK SURAT</h1>
        <p className="text-neutral-400">Sampaikan kritik, saran, maupun aspirasi Anda secara terbuka di sini.</p>
      </div>

      {/* Kontrol Admin Sederhana (Untuk Simulasi Toko Hapus) */}
      <div className="mb-6 p-3 bg-neutral-800 rounded-lg flex justify-between items-center text-sm">
        <span className="text-neutral-400">Mode Simulasi Admin (untuk tes tombol hapus):</span>
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className={`px-3 py-1 rounded font-semibold transition ${isAdmin ? 'bg-green-600 text-white' : 'bg-neutral-700 text-neutral-300'}`}
        >
          {isAdmin ? 'Mode Admin: AKTIF' : 'Masuk sebagai Admin'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom Kiri: Formulir Input */}
        <div className="md:col-span-1">
          <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 sticky top-6">
            <h2 className="text-xl font-bold mb-4 text-red-500">Tulis Surat</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase mb-1">Nama / Anonim</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Pemuda Akar Merah"
                  className="w-full p-2.5 rounded bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-red-500 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase mb-1">Isi Pesan</label>
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Ketik kritik atau saran Anda di sini..."
                  rows={4}
                  className="w-full p-2.5 rounded bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-red-500 transition resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded transition shadow-lg shadow-red-900/20"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Kolom Kanan: Daftar Surat Masuk */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-neutral-200 flex items-center gap-2">
            Surat yang Masuk <span className="text-sm bg-neutral-700 text-neutral-300 px-2 py-0.5 rounded-full">{messages.length}</span>
          </h2>
          
          {messages.length === 0 ? (
            <p className="text-neutral-500 italic py-8 text-center bg-neutral-800/50 rounded-xl border border-dashed border-neutral-700">Belum ada surat yang masuk.</p>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="bg-neutral-800 p-5 rounded-xl border border-neutral-700 shadow-sm relative group transition hover:border-neutral-600">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-red-400">{msg.name}</h3>
                    <span className="text-xs text-neutral-500">{msg.date}</span>
                  </div>
                  
                  {/* Tombol Hapus ini HANYA muncul kalau status isAdmin = true */}
                  {isAdmin && (
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="text-xs bg-red-900/50 text-red-400 hover:bg-red-600 hover:text-white px-2 py-1 rounded transition border border-red-700"
                    >
                      Hapus
                    </button>
                  )}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}