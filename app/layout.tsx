import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Akar Merah Semarang - Studi Politik & Aksi Kolektif',
  description: 'Organisasi studi politik, pemikiran kritis, dan gerakan advokasi sosial di Semarang.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-white text-black min-h-screen flex flex-col justify-between font-sans">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
