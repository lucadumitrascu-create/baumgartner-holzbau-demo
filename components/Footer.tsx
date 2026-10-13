const pages = [
  ["Leistungen", "/#leistungen"],
  ["Referenzen", "/#referenzen"],
  ["Ablauf", "/#methode"],
  ["Unternehmen", "/#unternehmen"],
  ["Karriere", "/#karriere"],
  ["Kontakt", "/#kontakt"],
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="py-16 border-b border-bone/10">
          <p className="h-section text-bone">BAUMGARTNER</p>
          <p className="text-[15px] text-bone/70 mt-4">Holzbau in Reichenfels, seit 1978.</p>
        </div>

        <div className="py-12 border-b border-bone/10 grid sm:grid-cols-3 gap-10">
          <div>
            <p className="label text-chalk mb-5">Kontakt</p>
            <address className="not-italic text-bone/75 text-[15px] leading-[1.9]">
              Industriestraße 3, 9463 Reichenfels
              <br />
              <a href="tel:+4343592660" className="hover:text-holz transition-colors">+43 4359 2660</a>
              <br />
              <a href="mailto:info@holzbau-baumgartner.at" className="hover:text-holz transition-colors">info@holzbau-baumgartner.at</a>
            </address>
          </div>
          <nav aria-label="Seiten">
            <p className="label text-chalk mb-5">Seiten</p>
            <ul className="text-[15px] leading-[1.9]">
              {pages.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-bone/75 hover:text-holz transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="label text-chalk mb-5">Rechtliches</p>
            <ul className="text-[15px] leading-[1.9]">
              <li>
                <a href="/impressum" className="text-bone/75 hover:text-holz transition-colors">Impressum</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6">
          <p className="text-[13px] text-bone/55">
            &copy; {new Date().getFullYear()} Raimund Baumgartner GmbH &middot; FN 144090y &middot; Landesgericht Klagenfurt &middot; UID ATU51008804
          </p>
        </div>
      </div>
    </footer>
  );
}
