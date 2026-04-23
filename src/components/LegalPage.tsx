"use client";

import Image from "next/image";

type ParagraphBlock = { type: "p"; text: string };
type SubheadingBlock = { type: "h3"; text: string };
type ListBlock = { type: "ul"; items: readonly string[] };
type KeyValueBlock = {
  type: "kv";
  items: readonly { label: string; value: string }[];
};
type Block = ParagraphBlock | SubheadingBlock | ListBlock | KeyValueBlock;

type Section = {
  id: string;
  number: string;
  title: string;
  blocks: readonly Block[];
};

export type LegalPageData = {
  eyebrow: string;
  h1Main: string;
  h1Accent: string;
  lead: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  sections: readonly Section[];
};

const EYEBROW: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "14px",
  fontFamily: "var(--font-google-sans-flex)",
  fontWeight: 500,
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)",
};

const EYEBROW_DASH: React.CSSProperties = {
  width: "28px",
  height: "1px",
  background: "#FFF912",
  boxShadow: "0 0 8px rgba(255,249,18,0.6)",
};

function renderBlocks(blocks: readonly Block[]) {
  return blocks.map((block, index) => {
    if (block.type === "p") {
      return (
        <p
          key={index}
          className="text-white/70"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            lineHeight: 1.6,
            margin: "0 0 10px",
          }}
        >
          {block.text}
        </p>
      );
    }

    if (block.type === "h3") {
      return (
        <h3
          key={index}
          className="text-white"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            margin: "16px 0 6px",
          }}
        >
          {block.text}
        </h3>
      );
    }

    if (block.type === "ul") {
      return (
        <ul
          key={index}
          className="text-white/70"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            lineHeight: 1.6,
            margin: "0 0 10px",
            paddingLeft: "20px",
            listStyle: "disc",
          }}
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} style={{ margin: "0 0 4px" }}>
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <dl
        key={index}
        className="text-white/75"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "14px",
          lineHeight: 1.6,
          margin: "2px 0 10px",
          display: "grid",
          gridTemplateColumns: "minmax(150px, max-content) 1fr",
          gap: "2px 16px",
        }}
      >
        {block.items.map((item, itemIndex) => (
          <div key={itemIndex} style={{ display: "contents" }}>
            <dt className="text-white" style={{ fontWeight: 600 }}>
              {item.label}
            </dt>
            <dd style={{ margin: 0 }}>{item.value}</dd>
          </div>
        ))}
      </dl>
    );
  });
}

export default function LegalPage({ data }: { data: LegalPageData }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-dark-deepest)" }}
    >
      <Image
        src="/images/wall.jpg"
        alt=""
        aria-hidden="true"
        width={6000}
        height={3800}
        sizes="100vw"
        priority={false}
        className="pointer-events-none select-none absolute bottom-0 left-0 z-0 w-full h-auto"
      />
      <div
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "108px", paddingBottom: "64px" }}
      >
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          <div style={EYEBROW}>
            <span aria-hidden="true" style={EYEBROW_DASH} />
            <span>{data.eyebrow}</span>
          </div>
          <h1
            className="text-white mb-3"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3.6vw, 40px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
            }}
          >
            {data.h1Main}{" "}
            <span style={{ color: "#FFF912" }}>{data.h1Accent}</span>
          </h1>
          <p
            className="text-white/70"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              lineHeight: 1.55,
              fontWeight: 300,
              maxWidth: "580px",
              margin: "0 0 10px",
            }}
          >
            {data.lead}
          </p>
          <p
            className="text-white/50"
            style={{
              fontFamily: "var(--font-google-sans-flex)",
              fontSize: "12px",
              letterSpacing: "0.02em",
            }}
          >
            {data.lastUpdatedLabel}: {data.lastUpdated}
          </p>
        </div>

        <ol
          className="list-none p-0"
          style={{
            marginTop: "36px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {data.sections.map((section) => (
            <li
              key={section.id}
              id={section.id}
              style={{
                padding: "18px 22px 12px",
                scrollMarginTop: "112px",
                background: "rgba(217, 217, 217, 0.1)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                borderRadius: "16px",
              }}
            >
              <h2
                className="text-white"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "17px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  margin: "0 0 10px",
                }}
              >
                <span style={{ color: "#FFF912", marginRight: "8px" }}>
                  {section.number}.
                </span>
                {section.title}
              </h2>
              {renderBlocks(section.blocks)}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
