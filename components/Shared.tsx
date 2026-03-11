"use client";

// Shared section label + title component
export function SectionHeader({
  label,
  title,
  highlight,
  className = "",
}: {
  label: string;
  title: string;
  highlight: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-[2px] bg-[var(--red)]" />
        <span className="font-condensed font-semibold text-[11px] tracking-[4px] uppercase text-[var(--red)]">
          {label}
        </span>
      </div>
      <h2
        className="font-bebas leading-[0.95] tracking-[1px]"
        style={{ fontSize: "clamp(48px, 6vw, 82px)" }}
        dangerouslySetInnerHTML={{
          __html: title.replace(
            highlight,
            `<span style="color:var(--red)">${highlight}</span>`
          ),
        }}
      />
    </div>
  );
}

// Running ticker bar
export function Ticker() {
  const items = [
    "STRENGTH TRAINING",
    "CARDIO FITNESS",
    "PERSONAL TRAINING",
    "CROSSFIT",
    "WEIGHT LOSS",
    "MUSCLE BUILDING",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="bg-[var(--red)] py-3.5 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="font-bebas text-[15px] tracking-[4px] mx-8">
            {item}
            <span className="mx-8 text-white/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
