export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Row 1: Brand */}
        <div className="py-16 border-b border-bone/5">
          <p className="font-archivo-black text-[64px] md:text-[88px] xl:text-[120px] text-bone uppercase leading-[0.9] -tracking-[0.02em]">
            BAUMGARTNER
          </p>
          <p className="font-mono text-[11px] tracking-[0.08em] text-holz uppercase mt-4">
            HOLZBAU &middot; REICHENFELS &middot; EST. 1978
          </p>
        </div>

        {/* Row 2: Links */}
        <div className="py-12 border-b border-bone/5 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.08em] text-chalk uppercase mb-4">LEISTUNGEN</p>
            <ul className="space-y-2 text-bone/30 text-[13px]">
              <li>Klassische Zimmerei</li>
              <li>Privater Wohnbau</li>
              <li>Ingenieurholzbau</li>
              <li>Holzmassivbau</li>
              <li>Bruckenbau</li>
              <li>Aussenfassaden</li>
              <li>Sonderkonstruktionen</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.08em] text-chalk uppercase mb-4">UNTERNEHMEN</p>
            <ul className="space-y-2">
              {["Uber uns", "Team", "Karriere", "Referenzen", "Presse"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-bone/30 hover:text-holz transition-colors text-[13px]">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.08em] text-chalk uppercase mb-4">KONTAKT</p>
            <div className="text-bone/30 text-[13px] space-y-2">
              <p>Industriestrasse 3</p>
              <p>9463 Reichenfels</p>
              <p className="pt-2">
                <a href="tel:+4343592660" className="hover:text-holz transition-colors">+43 4359 2660</a>
              </p>
              <p>
                <a href="mailto:info@holzbau-baumgartner.at" className="hover:text-holz transition-colors">info@holzbau-baumgartner.at</a>
              </p>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.08em] text-chalk uppercase mb-4">RECHTLICHES</p>
            <ul className="space-y-2">
              {["Impressum", "AGB", "Datenschutz"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-bone/30 hover:text-holz transition-colors text-[13px]">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 3: Legal */}
        <div className="py-6">
          <p className="font-mono text-[9px] tracking-[0.1em] text-bone/15 uppercase">
            &copy; 2026 RAIMUND BAUMGARTNER GMBH — FN 144090Y — LANDESGERICHT KLAGENFURT — UID ATU51008804
          </p>
        </div>
      </div>
    </footer>
  );
}
