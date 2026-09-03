import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata = { title: "Разборы" };

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
            <p className="eyebrow">{service.eyebrow}</p>
            <h2>{service.title}</h2>
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
              <a className="example-page" href="/examples/natal-venus.webp" target="_blank" rel="noreferrer">
                <Image src="/examples/natal-venus.webp" width={360} height={509} alt="Пример страницы натальной карты: Венера в Рыбах" />
                <span>Венера · любовь</span>
              </a>
              <a className="example-page" href="/examples/natal-career.webp" target="_blank" rel="noreferrer">
                <Image src="/examples/natal-career.webp" width={360} height={509} alt="Пример страницы натальной карты: карьера и реализация" />
                <span>Карьера · реализация</span>
              </a>
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
              <a className="example-page" href="/examples/saju-energy.webp" target="_blank" rel="noreferrer">
                <Image src="/examples/saju-energy.webp" width={360} height={509} alt="Пример страницы Саджу: энергетический профиль" />
                <span>Пять элементов</span>
              </a>
              <a className="example-page" href="/examples/saju-money.webp" target="_blank" rel="noreferrer">
                <Image src="/examples/saju-money.webp" width={360} height={509} alt="Пример страницы Саджу: деньги и реализация" />
                <span>Деньги · реализация</span>
              </a>
            </div>
            <Link className="button ghost example-cta" href="/razbory/saju">Посмотреть Саджу подробнее</Link>
          </article>
        </div>

        <p className="example-note">
          Нажми на любую страницу, чтобы открыть её отдельно. В готовом заказе ты получаешь цельную персональную книгу в PDF.
        </p>
      </section>
    </main>
  );
}
