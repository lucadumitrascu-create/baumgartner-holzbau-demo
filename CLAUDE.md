# baumgartner-holzbau-demo

Live at https://bg-demo.ealenterprises.com. Vercel project `baumgartner-holzbau-demo`, git-linked: **a push to `main` deploys to production**.

## Before editing
- `git fetch && git status -sb`. The local clone has been found several commits behind prod; "up to date" means nothing without a fetch.

## Before pushing
- Commit as `lucadumitrascu-create <luca.dumitrascu@icloud.com>` (the identity the earlier prod deploys used).
- If `next/font` or `app/layout.tsx` changed, build from clean (`rm -rf .next && npm run build`). A stale `.next/cache` once produced HTML with old font class hashes, so every headline fell back to system-ui.
- After the deploy, open prod and check that the headlines render in Archivo Black.

## Design system (in code)
- Tokens: `tailwind.config.ts`. Use `muted` for labels on light grounds and `chalk` only on dark; `holz-deep` for small copper text on `bone` (plain `holz` is 3.35:1 there).
- Shared classes in `app/globals.css`: `.h-section` (the one fluid headline size), `.label`, `.btn` + `.btn-ink`/`.btn-bone`, `.link-quiet`, `.field`.
- Long German compounds in headings carry a soft hyphen (`­`) so they break instead of clipping on mobile.
