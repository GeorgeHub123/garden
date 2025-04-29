import Image from "next/image";

export const metadata = {
  title: "Despre Noi | Dracula's Bite and Bits - Restaurant în București",
  description: "Află povestea restaurantului Dracula's Bite and Bits din centrul vechi al Bucureștiului, unde bucătăria tradițională românească se întâlnește cu legenda lui Dracula.",
  keywords: "Dracula, restaurant, București, poveste, mâncare românească, centrul vechi, vampir",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
          <Image
            src="/luna&cruce.png"
            alt="Atmosfera Dracula's Bite and Bits"
            fill
            style={{objectFit: "cover"}}
            priority
            quality={90}
            className="z-0"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gothic-heading hero-text">
            Despre <span className="dracula-accent">Noi</span>
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl mb-6 gothic-heading dracula-secondary">Bine ați venit în tărâmul lui Dracula</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Bine ați venit la Dracula Bite and Bits, unde bucătăria tradițională românească întâlnește legenda lui Dracula. Situat în centrul vechi vibrant al Bucureștiului, restaurantul nostru oferă o experiență culinară unică. Bucurați-vă de preparate autentice pregătite cu ingrediente proaspete, locale, înconjurați de o atmosferă care aduce omagiu celebrului Conte. Indiferent dacă sunteți localnic sau vizitator, alăturați-vă nouă pentru o masă care promite să fie atât delicioasă, cât și de neuitat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Image 
                src="/vampir.png"
                alt="Umbra lui Dracula"
                width={400}
                height={300}
                className="rounded-sm mb-4 object-cover w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl mb-4 gothic-heading dracula-accent">Povestea noastră</h3>
              <p className="leading-relaxed">
                Povestea noastră începe în umbrele istoriei, unde spiritul lui Dracula prinde viață prin fiecare mușcătură. Aici, sarmalele tradiționale și mămăliga capătă un gust misterios, iar fripturile suculente te invită să descoperi secretele Transilvaniei. Vino să trăiești o experiență care îți va trezi simțurile și curiozitatea!
              </p>
            </div>
          </div>

          <div className="bg-[rgba(20,20,30,0.7)] p-8 rounded-sm border border-gray-800">
            <h3 className="text-2xl mb-6 gothic-heading text-center dracula-accent">Specialitățile Noastre</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl mb-2 gothic-heading dracula-secondary">Bucătărie Tradițională</h4>
                <p className="opacity-80 mb-4">
                  Preparatele noastre îmbină rețete străvechi românești cu tușe moderne, rezultând gusturi unice care vă vor încânta.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2 gothic-heading dracula-secondary">Atmosferă Gotică</h4>
                <p className="opacity-80 mb-4">
                  Designul restaurantului nostru, inspirat din castelele Transilvaniei, creează cadrul perfect pentru o experiență memorabilă.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2 gothic-heading dracula-secondary">Evenimente Tematice</h4>
                <p className="opacity-80 mb-4">
                  Organizăm frecvent seri de jazz, petreceri tematice și degustări, toate îmbrăcate în spiritul misterios al lui Dracula.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2 gothic-heading dracula-secondary">Băuturi Speciale</h4>
                <p className="opacity-80 mb-4">
                  Colecția noastră de vinuri și cocktailuri unice completează perfect mâncărurile, pentru o experiență culinară completă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 