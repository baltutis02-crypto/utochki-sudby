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
          <h1>Натальная карта</h1>
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

      <section className="section no-x">
        <h2>Что понадобится от тебя</h2>
        <p>Дата рождения, максимально точное время и город рождения. Всё это будем собирать прямо внутри заказа.</p>
      </section>
    </main>
  );
}
