import type { Metadata } from "next";
import { Libre_Baskerville, EB_Garamond } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const garamond = EB_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-garamond",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dracula's Bite and Bits - Restaurant în București",
  description: "Descoperă Dracula's Bite and Bits, un restaurant unic în centrul vechi al Bucureștiului, inspirat de legenda lui Dracula.",
  keywords: "Dracula, restaurant, București, mâncare românească, centrul vechi, vampir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${garamond.variable} ${baskerville.variable}`}>
      <body className={garamond.className}>
        <header className="py-4 px-6 border-b border-gray-800">
          <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold gothic-heading dracula-accent flex items-center">
                <Image 
                  src="/lilieci.png" 
                  alt="Dracula's Bite and Bits logo" 
                  width={40} 
                  height={40} 
                  className="mr-2"
                />
                Dracula's Bite and Bits
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="nav-link">Acasă</Link>
              <Link href="/menu" className="nav-link">Meniu</Link>
              <Link href="/about" className="nav-link">Despre Noi</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="py-6 px-6 border-t border-gray-800 mt-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm opacity-75">© {new Date().getFullYear()} Dracula's Bite and Bits. Toate drepturile rezervate.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-sm opacity-75">București, Lipscani, nr 28</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
