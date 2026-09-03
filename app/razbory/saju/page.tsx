import Image from "next/image";
import Link from "next/link";
import { SajuEnergySample, SajuMoneySample } from "@/components/ReadingSamples";

export const metadata = { title: "Саджу" };

const includes = [
  "структура четырёх столпов и карта пяти элементов",
  "полезные и перегруженные элементы",
  "характер, ресурсы и уязвимые места",
  "отношения, деньги и профессиональная реализация",
  "большие жизненные периоды и повторяющиеся темы",
];

export default function SajuPage() {
  return (
    <main className="inner-page shell">
      <Link className="back-link" href="/razbory">← Все разборы</Link>
      <div className="service-hero">
        <div>
          <p className="eyebrow">Корейская система четырёх столпов</p>
          <div className="service-title-with-duck">
            <h1>Саджу</h1>
            <Image
              className="service-hero-duck"
              src="/ducks/saju-duck.webp"
              width={200}
              height={200}
              alt="Утёнок со стихиями Саджу"
            />
          </div>
          <p className="lead narrow">
            Разбор карты рождения через баланс пяти элементов и десять небесных стволов.
            Без попытки сделать из человека «огненную лошадь в четверг».
          </p>
          <div className="price-row"><strong>1 500 ₽</strong><span>PDF + личный кабинет</span></div>
          <Link className="button primary" href="/login">Заказать разбор</Link>
        </div>
        <div className="service-box">
          <p className="eyebrow">Что внутри</p>
          <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>

      <section className="question-note">
        <p className="eyebrow">Можно добавить свой вопрос</p>
        <h2>Если хочется отдельно посмотреть одну тему</h2>
        <p>
          Например: отношения, работа, деньги, текущий год или конкретную ситуацию.
          Напиши вопрос при заказе — я разберу его отдельно в рамках основного Саджу.
          Если вопроса нет, делаю обычный полный разбор по программе.
        </p>
      </section>

      <section className="reading-example-section">
        <div className="reading-example-head">
          <p className="eyebrow">Пример готовой работы</p>
          <h2>Как выглядит книга Саджу</h2>
          <p>
            Это реальные внутренние страницы персонального 10-страничного разбора.
            Обложка и паспорт карты с датой, временем и местом рождения в публичный пример не попадают.
          </p>
        </div>

        <div className="reading-example-grid">
          <SajuEnergySample />
          <SajuMoneySample />
        </div>

        <p className="example-note">Это фрагменты реальных страниц, собранные на сайте без персональных данных.</p>
      </section>

      <section className="section no-x">
        <h2>Что понадобится от тебя</h2>
        <p>Дата рождения, время и место рождения. Для расчёта часового пояса всё нормализуем на стороне заказа.</p>
      </section>
    </main>
  );
}
