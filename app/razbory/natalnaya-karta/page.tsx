import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Натальная карта" };

const includes = [
  "базовый портрет личности и ведущие черты",
  "отношения, привязанность и сценарии партнёрства",
  "работа, деньги и профессиональные сильные стороны",
  "напряжённые точки карты и способы их проживать",
  "ключевые повторяющиеся темы и итоговые выводы",
];

export default function NatalPage() {
  return (
    <main className="inner-page shell">
      <Link className="back-link" href="/razbory">← Все разборы</Link>
      <div className="service-hero">
        <div>
          <p className="eyebrow">Западная астрология</p>
          <div className="service-title-with-duck">
            <h1>Натальная карта</h1>
            <Image
              className="service-hero-duck"
              src="/ducks/natal-duck.webp"
              width={200}
              height={200}
              alt="Утёнок с телескопом и символом Водолея"
            />
          </div>
          <p className="lead narrow">
            Подробный персональный разбор без копипаста из справочника аспектов.
            Собираем карту в одну историю и смотрим, как её темы проявляются именно у тебя.
          </p>
          <div className="price-row"><strong>1 700 ₽</strong><span>PDF + личный кабинет</span></div>
          <Link className="button primary" href="/login">Заказать разбор</Link>
        </div>
        <div className="service-box">
          <p className="eyebrow">Что внутри</p>
          <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>

      <section className="question-note">
        <p className="eyebrow">Можно добавить свой вопрос</p>
        <h2>Если есть тема, которая особенно волнует</h2>
        <p>
          Например: этот год, работа, отношения, деньги или конкретная ситуация.
          Укажи её при заказе — я разберу этот вопрос отдельно в рамках основного разбора.
          Если отдельного вопроса нет, просто делаю полный разбор по программе.
        </p>
      </section>

      <section className="reading-example-section">
        <div className="reading-example-head">
          <p className="eyebrow">Пример готовой работы</p>
          <h2>Как выглядит натальная книга</h2>
          <p>
            Это реальные внутренние страницы персонального разбора.
            Первая страница и паспорт карты с персональными данными здесь специально не публикуются.
          </p>
        </div>

        <div className="reading-example-grid">
          <a className="example-page large" href="/examples/natal-venus-real.webp" target="_blank" rel="noreferrer">
            <Image unoptimized src="/examples/natal-venus-real.webp" width={520} height={735} alt="Венера в Рыбах — любовь, близость и ценности" />
            <span>Венера в Рыбах · любовь, близость и ценности</span>
          </a>
          <a className="example-page large" href="/examples/natal-career-real.webp" target="_blank" rel="noreferrer">
            <Image unoptimized src="/examples/natal-career-real.webp" width={520} height={735} alt="Карьера и реализация" />
            <span>Карьера и реализация</span>
          </a>
        </div>

        <p className="example-note">Именно эти страницы входят в реальный готовый разбор; на сайте они только сжаты по весу.</p>
      </section>

      <section className="section no-x">
        <h2>Что понадобится от тебя</h2>
        <p>Дата рождения, максимально точное время и город рождения. Всё это будем собирать прямо внутри заказа.</p>
      </section>
    </main>
  );
}
