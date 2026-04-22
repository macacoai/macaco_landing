interface Props {
  items: string[];
}

interface ChipProps {
  label: string;
  ariaHidden?: boolean;
}

function Chip({ label, ariaHidden }: ChipProps) {
  return (
    <span
      aria-hidden={ariaHidden || undefined}
      className="inline-flex items-center whitespace-nowrap"
      style={{
        gap: "8px",
        padding: "10px 18px",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.04)",
        color: "rgba(255,255,255,0.75)",
        fontFamily: "var(--font-inter)",
        fontSize: "14px",
        fontWeight: 500,
        letterSpacing: "0.01em",
      }}
    >
      <svg
        className="w-4 h-4 shrink-0"
        style={{ color: "#FFF912" }}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        />
      </svg>
      {label}
    </span>
  );
}

export default function FeaturesCarousel({ items }: Props) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div className="marquee-track flex w-max" style={{ gap: "12px" }}>
        {items.map((label, i) => (
          <Chip key={`a-${i}`} label={label} />
        ))}
        {items.map((label, i) => (
          <Chip key={`b-${i}`} label={label} ariaHidden />
        ))}
      </div>
    </div>
  );
}
