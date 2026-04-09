import SideLabel from "@/components/SideLabel";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NumbersStrip from "@/components/NumbersStrip";
import Leistungen from "@/components/Leistungen";
import Referenzen from "@/components/Referenzen";
import Methode from "@/components/Methode";
import Unternehmen from "@/components/Unternehmen";
import Karriere from "@/components/Karriere";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SideLabel />
      <main>
        <Navigation />
        <Hero />
        <NumbersStrip />
        <Leistungen />
        <Referenzen />
        <Methode />
        <Unternehmen />
        <Karriere />
        <Kontakt />
        <Footer />
      </main>
    </>
  );
}
