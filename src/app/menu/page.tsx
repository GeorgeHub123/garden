import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meniu - Dracula&apos;s Bite and Bits',
  description: 'Vizualizați meniul complet al restaurantului Dracula&apos;s Bite and Bits',
};

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl gothic-heading mb-8 text-center">
        Meniul Nostru Complet
      </h1>
      
      <div className="bg-[rgba(20,20,30,0.7)] p-4 rounded-sm border border-gray-800 mb-8">
        <div className="w-full h-[80vh] relative">
          <iframe 
            src="/Meniu_food.pdf#view=FitH" 
            className="w-full h-full"
            style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
          ></iframe>
        </div>
      </div>
      
      <div className="text-center">
        <a 
          href="/Meniu_food.pdf" 
          download
          className="inline-block bg-[rgb(var(--accent-rgb))] hover:bg-[rgb(var(--accent-rgb))/90] text-white font-bold py-2 px-6 rounded-sm transition-all duration-300 gothic-heading tracking-wider"
        >
          Descarcă Meniul
        </a>
      </div>
    </div>
  );
} 