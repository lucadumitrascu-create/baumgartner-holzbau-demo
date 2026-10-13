import { ImageResponse } from "next/og";

export const alt = "Baumgartner Holzbau · Reichenfels, Kärnten";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori needs TTF/OTF; the Google Fonts CSS API serves TTF when no browser UA is sent
async function archivoBlack(text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Archivo+Black&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const words = ["HOLZ", "BAUT", "DAUER.", "BAUMGARTNER", "Holzbau in Reichenfels, seit 1978"];
  const font = await archivoBlack(words.join(""));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F1EA",
          padding: "64px 72px",
          fontFamily: font ? "Archivo Black" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.85, letterSpacing: "-0.03em" }}>
          <span style={{ fontSize: 150, color: "#0E0E0C" }}>HOLZ</span>
          <span style={{ fontSize: 104, color: "#0E0E0C", marginLeft: 64 }}>BAUT</span>
          <span style={{ fontSize: 150, color: "#B8733E" }}>DAUER.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 28, color: "#0E0E0C" }}>
          <span>BAUMGARTNER</span>
          <span style={{ fontSize: 22, color: "#4A4842" }}>Holzbau in Reichenfels, seit 1978</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Archivo Black", data: font, style: "normal", weight: 400 }] : undefined,
    }
  );
}
