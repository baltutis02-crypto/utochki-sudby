import Link from "next/link";
import { services } from "@/lib/site";
import styles from "./reading-ducks.module.css";

export const metadata = { title: "Разборы" };

const duckBySlug: Record<string, { src: string; alt: string; className: string }> = {
  "natalnaya-karta": {
    src: "/ducks/natal-duck.webp",
    alt: "Утёнок с телескопом и символом Водолея",
    className: styles.natalDuck,
  },
  saju: {
    src: "/ducks/saju-duck.webp",
    alt: "Утёнок со стихиями Саджу",
    className: styles.sajuDuck,
  },
  combo: {
    src: "/ducks/combo-ducks.webp",
    alt: "Два утёнка — Натальная карта и Саджу",
    className: styles.comboDuck,
  },
  "konkretnyy-vopros": {
    src: "/ducks/question-duck.webp",
    alt: "Утёнок с лупой",
    className: styles.questionDuck,
  },
};

function ServiceDuck({ slug }: { slug: string }) {
  const duck = duckBySlug[slug];
  if (!duck) return null;

  return (
    <div className={`${styles.duckWrap} ${duck.className}`}>
      <img src={duck.src} alt={duck.alt} width="112" height="112" loading="lazy" />
    </div>
  );
}

export default function ReadingsPage() {
  return (
    <main className="inner-page shell">
      <Link className="back-link" href="/">← На главную</Link>
      <p className="eyebrow">Разборы</p>
      <h1>Выбирай систему, а не уровень тревоги</h1>
      <p className="lead narrow">
        Здесь будут точный состав, сроки, примеры страниц, отзывы и финальная цена каждого формата.
      </p>
      <div className="cards three reading-grid">
        {services.map((service) => (
          <article className={`service-card ${service.slug === "konkretnyy-vopros" ? "question-card" : ""}`} key={service.slug}>
            <div className={styles.cardHead}>
              <div className={styles.cardTitle}>
                <p className="eyebrow">{service.eyebrow}</p>
                <h2>{service.title}</h2>
              </div>
              <ServiceDuck slug={service.slug} />
            </div>
            <p>{service.description}</p>
            <div className="card-bottom">
              <strong>{service.price}</strong>
              {service.slug !== "combo" ? (
                <Link href={`/razbory/${service.slug}`}>Открыть →</Link>
              ) : (
                <span>скоро</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
