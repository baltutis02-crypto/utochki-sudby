import Link from "next/link";
import { services } from "@/lib/site";
import ReadingServiceCardHead from "@/components/ReadingServiceCardHead";

export const metadata = { title: "Разборы" };

export default function ReadingsPage() {
  return (
    <main className="inner-page shell">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <Link className="back-link" href="/">← На главную</Link>
        <Link className="back-link" href="/ko/razbory">한국어 →</Link>
      </div>
      <p className="eyebrow">Разборы</p>
      <h1>Выбирай систему, а не уровень тревоги</h1>
      <p className="lead narrow">
        Здесь будут точный состав, сроки, примеры страниц, отзывы и финальная цена каждого формата.
      </p>
      <div className="cards three reading-grid">
        {services.map((service) => (
          <article className={`service-card ${service.slug === "konkretnyy-vopros" ? "question-card" : ""}`} key={service.slug}>
            <ReadingServiceCardHead
              slug={service.slug}
              eyebrow={service.eyebrow}
              title={service.title}
              headingLevel="h2"
            />
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
