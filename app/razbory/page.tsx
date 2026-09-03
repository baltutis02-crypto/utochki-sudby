import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { NatalVenusSample, NatalCareerSample, SajuEnergySample, SajuMoneySample } from "@/components/ReadingSamples";

export const metadata = { title: "Разборы" };

const serviceDucks: Record<string, { src: string; alt: string }> = {
  "natalnaya-karta": {
    src: "/ducks/natal-duck.webp",
    alt: "Утёнок с телескопом и символом Водолея для Натальной карты",
  },
  saju: {
    src: "/ducks/saju-duck.webp",
    alt: "Утёнок со стихиями для Саджу",
  },
  combo: {
    src: "/ducks/combo-ducks.webp",
    alt: "Два утёнка вместе для Наталки и Саджу",
  },
  "konkretnyy-vopros": {
    src: "/ducks/question-duck.webp",
    alt: "Утёнок с лупой для конкретного вопроса",
  },
};

export default function ReadingsPage() {
  return (
    <main className="inner-page shell">
      <Link className="back-link" href="/">← На главную</Link>
      <p className="eyebrow">Разборы</p>
      <h1>Выбирай систему, а не уровень тревоги</h1>
      <p className="lead narrow">
        Здесь — точный состав, примеры страниц и финальная цена каждого формата.
        Можно сначала посмотреть, как всё выглядит, и уже потом решать, какая система тебе ближе.
      </p>

      <div className="cards three reading-grid">
        {services.map((service) => (
          <article className={`service-card ${service.slug === "konkretnyy-vopros" ? "question-card" : ""}`} key={service.slug}>
            <div className="service-card-head">
              <div>
                <p className="eyebrow">{service.eyebrow}</p>
                <h2>{service.title}</h2>
              </div>
              <div className={`service-duck service-duck-${service.slug}`}>
                <Image
                  src={serviceDucks[service.slug].src}
                  width={200}
                  height={200}
                  alt={serviceDucks[service.slug].alt}
                />
              </div>
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

      <section className="examples-section">
        <div className="examples-intro">
          <p className="eyebrow">Так выглядит результат</p>
          <h2>Не кот в мешке. Вот реальные страницы.</h2>
          <p>
            Показываю фрагменты готовых персональных книг. Паспортные страницы с именем,
            датой, временем и местом рождения в публичные примеры не попадают.
          </p>
        </div>

        <div className="example-showcase-grid">
          <article className="example-showcase-card">
            <div className="example-card-head">
              <div>
                <p className="eyebrow">Западная астрология</p>
                <h3>Натальная карта</h3>
              </div>
              <span>1 700 ₽</span>
            </div>
            <p>В примере — любовь и ценности, а ещё карьерная реализация и сильные качества.</p>
            <div className="example-pages">
              <NatalVenusSample />
              <NatalCareerSample />
            </div>
            <Link className="button ghost example-cta" href="/razbory/natalnaya-karta">Посмотреть Наталку подробнее</Link>
          </article>

          <article className="example-showcase-card">
            <div className="example-card-head">
              <div>
                <p className="eyebrow">Корейская система</p>
                <h3>Саджу</h3>
              </div>
              <span>1 500 ₽</span>
            </div>
            <p>В примере — баланс пяти элементов, энергетический профиль, деньги и реализация.</p>
            <div className="example-pages">
              <SajuEnergySample />
              <SajuMoneySample />
            </div>
            <Link className="button ghost example-cta" href="/razbory/saju">Посмотреть Саджу подробнее</Link>
          </article>
        </div>

        <p className="example-note">
          Это фрагменты реальных разборов, собранные прямо на сайте без персональных данных.
          В готовом заказе ты получаешь цельную персональную книгу в PDF.
        </p>
      </section>
    </main>
  );
}
