import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Leistungen from "@/components/Leistungen";
import Referenzen from "@/components/Referenzen";
import Unternehmen from "@/components/Unternehmen";
import Karriere from "@/components/Karriere";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustBar />
      <Leistungen />
      <Referenzen />
      <Unternehmen />
      <Karriere />
      <Kontakt />
      <Footer />
    </main>
  );
}
