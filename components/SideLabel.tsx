export default function SideLabel() {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-30 hidden xl:block">
      <p
        className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase whitespace-nowrap"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        BAUMGARTNER HOLZBAU &middot; REICHENFELS &middot; KARNTEN &middot; EST. 1978
      </p>
    </div>
  );
}
