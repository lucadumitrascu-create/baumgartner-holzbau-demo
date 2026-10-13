# baumgartner-holzbau-demo

Live at https://bg-demo.ealenterprises.com. Vercel project `baumgartner-holzbau-demo`, git-linked: **a push to `main` deploys to production**.

## Before editing
- `git fetch && git status -sb`. The local clone has been found several commits behind prod; "up to date" means nothing without a fetch.

## Before pushing
- Commit as `lucadumitrascu-create <luca.dumitrascu@icloud.com>` (the identity the earlier prod deploys used).
- If `next/font` or `app/layout.tsx` changed, build from clean (`rm -rf .next && npm run build`). A stale `.next/cache` once produced HTML with old font class hashes, so every headline fell back to system-ui.
- After the deploy, open prod and check that the headlines render in condensed Archivo (`font-variation-settings: "wdth" 62.5`).

## Design system (in code), direction "Abbund" (13.10.2026)
- One font family: Archivo variable. `.display` = its condensed cut (wdth 62.5, weight 800) for every headline; normal width for the text. No second family.
- Headlines are sentence case, one colour, no closing period. Don't bring back the old two-tone "WORD WORD." formula.
- Motif: `components/Abbund.tsx` draws Abbundzeichen (carpenters' assembly marks, additive I–IIII, V as a chevron) and is the only numbering on the page. Never use 01/02 codes.
- One oversized moment per page: the years in `NumbersStrip`. Keep everything else on the `.h-section` scale.
- Grounds: `bone` and `ink` only. Copper (`holz`) is for the marks, the 48, focus and hover.
- Tokens: `tailwind.config.ts`. Use `muted` for labels on light grounds and `chalk` only on dark; `holz-deep` for small copper text on `bone` (plain `holz` is 3.35:1 there).
- Shared classes in `app/globals.css`: `.display`, `.h-section`, `.label`, `.btn` + `.btn-ink`/`.btn-bone`, `.link-quiet`, `.field`.
- Long German compounds in headings carry a soft hyphen (U+00AD). In source, write it as the JS escape (backslash, u00AD), never the raw character: the Write tool stores it invisibly.
- `app/opengraph-image.tsx` pulls a static condensed instance from the Google Fonts CSS API (`wdth,wght@62.5,800`), because Satori can't use variable axes.
