import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
          <Image
            src="/castel.png"
            alt="Castelul Dracula în noapte"
            fill
            style={{objectFit: "cover"}}
            priority
            quality={90}
            className="z-0"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gothic-heading hero-text">
            Dracula&apos;s <span className="dracula-accent">Bite</span> and <span className="dracula-secondary">Bits</span>
          </h1>
          <p className="text-xl md:text-3xl mb-8 font-serif italic hero-text max-w-4xl mx-auto">
            Unde gusturile mușcă și muzica bântuie
          </p>
          <Link
            href="/menu"
            className="inline-block bg-[rgb(var(--accent-rgb))] hover:bg-[rgb(var(--accent-rgb))/90] text-white font-bold py-3 px-8 rounded-sm transition-all duration-300 gothic-heading tracking-wider"
          >
            Vezi Meniul
          </Link>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl mb-12 text-center gothic-heading">Meniu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/menu" className="block">
            <div className="bg-[rgba(20,20,30,0.7)] p-8 rounded-sm border border-gray-800 hover:border-[rgb(var(--accent-rgb))] transition-all duration-300 text-center">
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/cutitsifurculita.png" 
                  alt="Mâncare la Dracula&apos;s Bite and Bits" 
                  width={80} 
                  height={80} 
                />
              </div>
              <h3 className="text-2xl mb-4 gothic-heading dracula-accent">BITES</h3>
              <p className="mb-4 opacity-80">Preparate tradiționale cu o notă de mister</p>
            </div>
          </Link>
          
          <Link href="/menu" className="block">
            <div className="bg-[rgba(20,20,30,0.7)] p-8 rounded-sm border border-gray-800 hover:border-[rgb(var(--accent-rgb))] transition-all duration-300 text-center">
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/pahar_vin.png" 
                  alt="Băuturi la Dracula&apos;s Bite and Bits" 
                  width={80} 
                  height={80} 
                />
              </div>
              <h3 className="text-2xl mb-4 gothic-heading dracula-accent">DRINKS</h3>
              <p className="mb-4 opacity-80">Băuturi care îți vor trezi simțurile</p>
            </div>
          </Link>
          
          <Link href="/menu" className="block">
            <div className="bg-[rgba(20,20,30,0.7)] p-8 rounded-sm border border-gray-800 hover:border-[rgb(var(--accent-rgb))] transition-all duration-300 text-center">
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/prajitura.png" 
                  alt="Deserturi la Dracula&apos;s Bite and Bits" 
                  width={80} 
                  height={80} 
                />
              </div>
              <h3 className="text-2xl mb-4 gothic-heading dracula-accent">SWEETS</h3>
              <p className="mb-4 opacity-80">Deserturi cu gust întunecat</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-[rgba(12,12,20,0.7)] border-y border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl mb-12 text-center gothic-heading">Evenimente & Beats</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <Image 
                  src="/luna&cruce.png" 
                  alt="Luna plină" 
                  width={60} 
                  height={60} 
                />
              </div>
              <div>
                <h3 className="text-xl gothic-heading mb-2 dracula-secondary">30 Apr</h3>
                <p className="opacity-80">Noaptea Jazz-ului Transilvan</p>
              </div>
            </div>
            
            <div className="h-px w-full md:h-16 md:w-px bg-gray-800 md:mx-8"></div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <Image 
                  src="/vampir.png" 
                  alt="Vampir" 
                  width={60} 
                  height={60} 
                />
              </div>
              <div>
                <h3 className="text-xl gothic-heading mb-2 dracula-secondary">6 Mai</h3>
                <p className="opacity-80">Vampire Party</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
