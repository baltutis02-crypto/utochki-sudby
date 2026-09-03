import Link from "next/link";

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
          <h1>Саджу</h1>
          <p className="lead narrow">
            Разбор карты рождения через баланс пяти элементов и десять небесных стволов.
            Без попытки сделать из человека «огненную лошадь в четверг».
          </p>
          <div className="price-row"><strong>от 4 990 ₽</strong><span>PDF + личный кабинет</span></div>
          <Link className="button primary" href="/login">Заказать разбор</Link>
        </div>
        <div className="service-box">
          <p className="eyebrow">Что внутри</p>
          <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      <section className="section no-x">
        <h2>Что понадобится от тебя</h2>
        <p>Дата рождения, время и место рождения. Для расчёта часового пояса всё нормализуем на стороне заказа.</p>
      </section>
    </main>
  );
}
