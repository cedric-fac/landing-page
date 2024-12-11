"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, CheckCircle2, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Internet Haut Débit à Yaoundé avec Starlink
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Connectez-vous à l&apos;internet le plus rapide de Yaoundé. Plus de problèmes de connexion !
        </p>
        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1622433595283-572df1475210"
            alt="Starlink Antenna"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir Starlink ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Wifi className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Vitesse Exceptionnelle</h3>
                <p>Jusqu&apos;à 150 Mbps en téléchargement</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Installation Professionnelle</h3>
                <p>Service d&apos;installation par des experts certifiés</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Support 24/7</h3>
                <p>Assistance technique disponible à tout moment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tarification Simple et Transparente</h2>
          <div className="max-w-lg mx-auto">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Pack Complet Starlink</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span>Matériel Starlink : 350 000 FCFA</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span>Installation : 50 000 FCFA</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span>Maintenance mensuelle : 10 000 FCFA</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Rejoignez la Liste d&apos;Attente Prioritaire</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
              <Input
                type="tel"
                placeholder="Votre numéro WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white"
              />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Rejoindre la Liste d&apos;Attente
              </Button>
            </form>
            <div className="mt-8">
              <p className="text-lg mb-4">Ou rejoignez notre groupe WhatsApp pour plus d&apos;informations</p>
              <Button
                as="a"
                href="https://chat.whatsapp.com/your-group-link"
                target="_blank"
                className="bg-green-500 hover:bg-green-600"
              >
                Rejoindre le Groupe WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ils Nous Font Confiance</h2>
          <p className="text-xl mb-4">Plus de <span className="font-bold">150</span> personnes déjà sur liste d&apos;attente</p>
          <div className="flex justify-center space-x-8 mt-8">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
              alt="Installation Starlink"
              className="w-64 h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7"
              alt="Internet Haut Débit"
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Mail className="w-6 h-6" />
            <Phone className="w-6 h-6" />
          </div>
          <p>© 2024 Starlink Yaoundé. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}