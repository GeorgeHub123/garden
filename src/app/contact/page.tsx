"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const formValues = {
        name: formData.get('name'),
        email: formData.get('email'),
        date: formData.get('date'),
        guests: formData.get('guests'),
        message: formData.get('message'),
      };

      const response = await fetch('/api/send-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitError(result.message || 'A apărut o eroare. Vă rugăm încercați din nou.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('A apărut o eroare la trimiterea formularului. Vă rugăm încercați din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10"></div>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gothic-heading hero-text">
            <span className="dracula-accent">Contact</span>
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-8 gothic-heading dracula-secondary">Găsiți-ne</h2>
              
              <div className="mb-8">
                <h3 className="text-xl mb-4 gothic-heading dracula-accent">Adresa Noastră</h3>
                <p className="text-lg mb-2">București, Lipscani, nr 28</p>
                <p className="mb-4 opacity-80">În inima Centrului Vechi din București</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl mb-4 gothic-heading dracula-accent">Program</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Luni - Joi:</p>
                    <p className="opacity-80">12:00 - 00:00</p>
                  </div>
                  <div>
                    <p className="font-semibold">Vineri - Duminică:</p>
                    <p className="opacity-80">12:00 - 02:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl mb-4 gothic-heading dracula-accent">Contact</h3>
                <p className="mb-2">Telefon: +40 777 888 999</p>
                <p className="mb-2">Email: rezervari@draculabites.ro</p>
              </div>
            </div>
            
            <div className="bg-[rgba(20,20,30,0.7)] p-8 rounded-sm border border-gray-800">
              <h3 className="text-2xl mb-6 gothic-heading text-center dracula-accent">Rezervați o Masă</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2">Nume</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[rgba(30,30,40,0.7)] border border-gray-800 rounded-sm p-3 focus:border-[rgb(var(--accent-rgb))] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[rgba(30,30,40,0.7)] border border-gray-800 rounded-sm p-3 focus:border-[rgb(var(--accent-rgb))] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block mb-2">Data și Ora</label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    required
                    className="w-full bg-[rgba(30,30,40,0.7)] border border-gray-800 rounded-sm p-3 focus:border-[rgb(var(--accent-rgb))] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block mb-2">Număr de Persoane</label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    className="w-full bg-[rgba(30,30,40,0.7)] border border-gray-800 rounded-sm p-3 focus:border-[rgb(var(--accent-rgb))] focus:outline-none"
                  >
                    <option value="1">1 persoană</option>
                    <option value="2">2 persoane</option>
                    <option value="3">3 persoane</option>
                    <option value="4">4 persoane</option>
                    <option value="5">5 persoane</option>
                    <option value="6+">6+ persoane</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Mesaj (opțional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-[rgba(30,30,40,0.7)] border border-gray-800 rounded-sm p-3 focus:border-[rgb(var(--accent-rgb))] focus:outline-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[rgb(var(--accent-rgb))] hover:bg-[rgb(var(--accent-rgb))/90] text-white font-bold py-3 px-8 rounded-sm transition-all duration-300 gothic-heading tracking-wider disabled:opacity-70"
                >
                  {isSubmitting ? 'Se trimite...' : 'Trimite Rezervarea'}
                </button>

                {submitSuccess && (
                  <div className="p-4 bg-green-900/40 border border-green-800 rounded-sm text-center">
                    Rezervarea a fost trimisă cu succes! Vă vom contacta în curând pentru confirmare.
                  </div>
                )}

                {submitError && (
                  <div className="p-4 bg-red-900/40 border border-red-800 rounded-sm text-center">
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 