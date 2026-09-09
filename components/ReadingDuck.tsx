type ReadingDuckProps = {
  slug: string;
  className?: string;
};

function DuckBody({ x = 54, mirror = false }: { x?: number; mirror?: boolean }) {
  const transform = mirror ? `translate(${x * 2} 0) scale(-1 1)` : undefined;

  return (
    <g transform={transform}>
      <ellipse cx={x} cy="71" rx="26" ry="20" fill="#ffd86f" />
      <circle cx={x + 17} cy="49" r="16" fill="#ffe58f" />
      <ellipse cx={x + 3} cy="72" rx="11" ry="8" fill="#f4b84d" opacity=".9" />
      <path d={`M ${x + 29} 50 L ${x + 43} 55 L ${x + 29} 60 Z`} fill="#ff9f55" />
      <circle cx={x + 22} cy="46" r="2.2" fill="#2b2340" />
      <path d={`M ${x - 10} 88 q -6 8 -13 4`} stroke="#ff9f55" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d={`M ${x + 5} 89 q 6 8 13 3`} stroke="#ff9f55" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>
  );
}

export default function ReadingDuck({ slug, className }: ReadingDuckProps) {
  const isNatal = slug === "natalnaya-karta";
  const isSaju = slug === "saju";
  const isCombo = slug === "combo";
  const isQuestion = slug === "konkretnyy-vopros";

  const label = isNatal
    ? "Утёнок с телескопом для Натальной карты"
    : isSaju
      ? "Утёнок со стихиями для Саджу"
      : isCombo
        ? "Два утёнка — Натальная карта и Саджу"
        : "Утёнок с лупой для конкретного вопроса";

  return (
    <svg
      className={className}
      viewBox="0 0 140 110"
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={`duck-shadow-${slug}`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000" floodOpacity=".3" />
        </filter>
        <linearGradient id={`glass-${slug}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fd8ff" stopOpacity=".75" />
          <stop offset="1" stopColor="#ff8fe7" stopOpacity=".35" />
        </linearGradient>
      </defs>

      <g filter={`url(#duck-shadow-${slug})`}>
        {isCombo ? (
          <>
            <g transform="translate(-11 5) scale(.82)">
              <DuckBody x={53} />
              <circle cx="33" cy="31" r="12" fill="#17142d" stroke="#8fd8ff" strokeWidth="2" />
              <text x="33" y="36" textAnchor="middle" fontSize="15" fontWeight="800" fill="#8fd8ff">♒</text>
            </g>
            <g transform="translate(47 8) scale(.8)">
              <DuckBody x={53} mirror />
              <circle cx="75" cy="29" r="5" fill="#ff8fe7" />
              <circle cx="86" cy="36" r="5" fill="#8fd8ff" />
              <circle cx="73" cy="43" r="5" fill="#ffd86f" />
              <path d="M75 29 L86 36 L73 43 Z" fill="none" stroke="#f2efff" strokeOpacity=".55" strokeWidth="1.5" />
            </g>
            <path d="M66 19 C72 10 83 10 87 18 C91 10 102 10 108 19 C108 31 91 39 87 42 C82 39 66 31 66 19Z" fill="#ff8fe7" opacity=".78" />
          </>
        ) : (
          <DuckBody x={55} />
        )}

        {isNatal && (
          <>
            <circle cx="37" cy="27" r="13" fill="#17142d" stroke="#8fd8ff" strokeWidth="2" />
            <text x="37" y="32" textAnchor="middle" fontSize="16" fontWeight="800" fill="#8fd8ff">♒</text>
            <g transform="rotate(-17 91 70)">
              <rect x="79" y="58" width="28" height="10" rx="5" fill="#c8b7ff" stroke="#f2efff" strokeWidth="1.5" />
              <circle cx="107" cy="63" r="7" fill={`url(#glass-${slug})`} stroke="#f2efff" strokeWidth="1.5" />
              <path d="M88 68 L82 88 M97 68 L103 88" stroke="#c8b7ff" strokeWidth="3" strokeLinecap="round" />
            </g>
            <circle cx="116" cy="21" r="2" fill="#ffd86f" />
            <path d="M121 30 l3 6 l6 3 l-6 3 l-3 6 l-3-6 l-6-3 l6-3Z" fill="#ff8fe7" opacity=".9" />
          </>
        )}

        {isSaju && (
          <>
            <circle cx="29" cy="28" r="7" fill="#7ed6a1" />
            <circle cx="45" cy="17" r="7" fill="#ff8f78" />
            <circle cx="63" cy="21" r="7" fill="#ffd86f" />
            <circle cx="80" cy="17" r="7" fill="#d8d5e7" />
            <circle cx="96" cy="28" r="7" fill="#8fd8ff" />
            <path d="M29 28 Q63 2 96 28" fill="none" stroke="#f2efff" strokeOpacity=".5" strokeWidth="1.5" />
            <circle cx="55" cy="72" r="12" fill="#17142d" stroke="#ffd86f" strokeWidth="2" />
            <text x="55" y="77" textAnchor="middle" fontSize="13" fontWeight="900" fill="#ffd86f">命</text>
          </>
        )}

        {isQuestion && (
          <>
            <circle cx="92" cy="63" r="16" fill={`url(#glass-${slug})`} stroke="#f2efff" strokeWidth="3" />
            <path d="M102 75 L119 93" stroke="#f2efff" strokeWidth="5" strokeLinecap="round" />
            <text x="31" y="34" textAnchor="middle" fontSize="29" fontWeight="900" fill="#ff8fe7">?</text>
            <circle cx="111" cy="28" r="3" fill="#ffd86f" />
          </>
        )}
      </g>
    </svg>
  );
}
