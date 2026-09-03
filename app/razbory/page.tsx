import Link from "next/link";
import { services } from "@/lib/site";

export const metadata = { title: "Разборы" };

function ServiceDuck({ slug }: { slug: string }) {
  if (slug === "combo") {
    return (
      <div className="combo-ducks" aria-hidden="true">
        <span className="duck-sprite duck-natal" />
        <span className="duck-sprite duck-saju" />
      </div>
    );
  }

  const duckClass =
    slug === "natalnaya-karta"
      ? "duck-natal"
      : slug === "saju"
        ? "duck-saju"
        : "duck-question";

  return <span className={`duck-sprite ${duckClass}`} aria-hidden="true" />;
}

export default function ReadingsPage() {
  return (
    <main className="inner-page shell">
      <Link className="back-link" href="/">← На главную</Link>
      <p className="eyebrow">Разборы</p>
      <h1>Выбирай систему, а не уровень тревоги</h1>
      <p className="lead narrow">
        Здесь — точный состав, реальные страницы готовых разборов и финальная цена каждого формата.
        Всё нужное видно сразу, без поисков по странице.
      </p>

      <div className="cards reading-grid">
        {services.map((service) => {
          const sample =
            service.slug === "natalnaya-karta"
              ? {
                  src: "/examples/natal-examples.webp",
                  alt: "Реальные страницы натального разбора: Венера в Рыбах и карьера",
                  label: "Реальные страницы Наталки →",
                }
              : service.slug === "saju"
                ? {
                    src: "/examples/saju-examples.webp",
                    alt: "Реальные страницы разбора Саджу: энергетический профиль и деньги",
                    label: "Реальные страницы Саджу →",
                  }
                : null;

          return (
            <article
              className={`service-card reading-service-card ${service.slug === "konkretnyy-vopros" ? "question-card" : ""}`}
              key={service.slug}
            >
              <div className="service-card-head">
                <div>
                  <p className="eyebrow">{service.eyebrow}</p>
                  <h2>{service.title}</h2>
                </div>
                <div className="service-duck-slot">
                  <ServiceDuck slug={service.slug} />
                </div>
              </div>

              <p>{service.description}</p>

              {sample ? (
                <a
                  className="service-sample-preview"
                  href={sample.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={sample.label}
                >
                  <img src={sample.src} alt={sample.alt} />
                  <span>{sample.label}</span>
                </a>
              ) : service.slug === "combo" ? (
                <div className="service-mini-note">
                  Внутри — обе полноценные книги: Натальная карта и Саджу.
                </div>
              ) : (
                <div className="service-mini-note">
                  Один вопрос, один фокус и отдельный готовый PDF.
                </div>
              )}

              <div className="card-bottom">
                <strong>{service.price}</strong>
                {service.slug !== "combo" ? (
                  <Link href={`/razbory/${service.slug}`}>Открыть →</Link>
                ) : (
                  <span>скоро</span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <p className="reading-grid-note">
        В примерах используются настоящие страницы готовых разборов; страницы с персональными данными не показываю.
      </p>
    </main>
  );
}
