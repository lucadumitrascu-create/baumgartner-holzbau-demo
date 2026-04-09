export default function Footer() {
  return (
    <footer className="bg-stein border-t border-kalk/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        {/* Top: Brand */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="font-archivo text-xl text-kalk tracking-[0.15em] uppercase font-bold block">
              BAUMGARTNER HOLZBAU
            </span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-beton uppercase block mt-1">
              REICHENFELS &middot; KARNTEN &middot; SEIT 1978
            </span>
          </div>
        </div>

        <div className="h-px bg-kalk/5 mb-14" />

        {/* Mid: Columns */}
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase mb-4">
              LEISTUNGEN
            </p>
            <ul className="space-y-2 text-kalk/30 text-sm">
              <li>Klassische Zimmerei</li>
              <li>Privater Wohnbau</li>
              <li>Ingenieurholzbau</li>
              <li>Holzmassivbau</li>
              <li>Brucken</li>
              <li>Aussenfassaden</li>
              <li>Sonderkonstruktionen</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase mb-4">
              UNTERNEHMEN
            </p>
            <ul className="space-y-2">
              {["Uber uns", "Team", "Karriere", "Referenzen"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-kalk/30 hover:text-holz transition-colors text-sm">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase mb-4">
              KONTAKT
            </p>
            <div className="text-kalk/30 text-sm space-y-2">
              <p>Industriestrasse 3</p>
              <p>9463 Reichenfels</p>
              <p className="pt-2">
                <a href="tel:+4343592660" className="hover:text-holz transition-colors">
                  +43 4359 2660
                </a>
              </p>
              <p>
                <a href="mailto:info@holzbau-baumgartner.at" className="hover:text-holz transition-colors">
                  info@holzbau-baumgartner.at
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="h-px bg-kalk/5 mt-14 mb-8" />

        {/* Bottom legal */}
        <p className="font-mono text-[9px] tracking-[0.1em] text-kalk/15 uppercase leading-relaxed">
          &copy; 2026 RAIMUND BAUMGARTNER GMBH &middot; FN 144090Y &middot;
          LANDESGERICHT KLAGENFURT &middot; UID ATU51008804 &middot; IMPRESSUM
          &middot; DATENSCHUTZ
        </p>
      </div>
    </footer>
  );
}
