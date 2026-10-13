import { ImageResponse } from "next/og";

export const alt = "Baumgartner Holzbau · Reichenfels, Kärnten";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori can't drive variable axes; with wdth/wght pinned and `text=`, the Google Fonts CSS API
// serves a static extra-condensed 800 TTF (the same cut the site sets with font-variation-settings)
async function archivoCondensed(text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62.5,800&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const words = ["Holz", "baut", "Dauer", "BAUMGARTNER", "Holzbau in Reichenfels, seit 1978"];
  const font = await archivoCondensed(words.join(""));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          background: "#F4F1EA",
          padding: "40px 72px 56px",
          fontFamily: font ? "Archivo" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", fontSize: 176, lineHeight: 0.86, color: "#0E0E0C" }}>
          <span>Holz</span>
          <span>baut</span>
          <span>Dauer</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end", gap: 18 }}>
          {/* Abbundzeichen IIII */}
          <svg width="66" height="72" viewBox="0 0 33 40">
            {[3, 12, 21, 30].map((x, i) => (
              <line key={x} x1={x + (i % 2 ? -0.7 : 0.9)} y1="3" x2={x - (i % 2 ? -0.7 : 0.9)} y2="37" stroke="#B8733E" strokeWidth="3.4" />
            ))}
          </svg>
          <span style={{ fontSize: 44, color: "#0E0E0C" }}>BAUMGARTNER</span>
          <span style={{ fontSize: 30, color: "#4A4842" }}>Holzbau in Reichenfels, seit 1978</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Archivo", data: font, style: "normal", weight: 800 }] : undefined,
    }
  );
}
