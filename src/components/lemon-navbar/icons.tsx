import Image from "next/image";

const LOGO_SRC = "/images/logo-20260329.png";

export function MacacoLogoMark({ size = 40 }: { size?: number }) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Macaco"
      width={size}
      height={size}
      priority
      className="rounded-xl"
    />
  );
}

export function ChevronDown({
  size = 16,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
