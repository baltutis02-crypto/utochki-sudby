type ReadingDuckProps = {
  slug: string;
  className?: string;
};

const ducks: Record<string, { src: string; alt: string }> = {
  "natalnaya-karta": {
    src: "/ducks/readings/natal.webp",
    alt: "Утёнок с телескопом и книгой для Натальной карты",
  },
  saju: {
    src: "/ducks/readings/saju.webp",
    alt: "Утёнок с пятью стихиями для Саджу",
  },
  combo: {
    src: "/ducks/readings/combo.webp",
    alt: "Два утёнка — Натальная карта и Саджу",
  },
  "konkretnyy-vopros": {
    src: "/ducks/readings/question.webp",
    alt: "Утёнок с лупой и картой для конкретного вопроса",
  },
};

export default function ReadingDuck({ slug, className }: ReadingDuckProps) {
  const duck = ducks[slug] ?? ducks["konkretnyy-vopros"];

  return (
    <img
      className={className}
      src={duck.src}
      alt={duck.alt}
      width={160}
      height={160}
      decoding="async"
    />
  );
}
