import Link from "next/link";

export const metadata = { title: "Разобрать конкретный вопрос" };

const examples = [
  "работа, карьера и смена направления",
  "отношения и конкретная ситуация в паре",
  "деньги и финансовый период",
  "что несёт текущий год или ближайший период",
  "другая одна конкретная тема, которая сейчас важна",
];

export default function SpecificQuestionPage() {
  return (
    <main className="inner-page shell">
      <Link className="back-link" href="/razbory">← Все разборы</Link>
      <div className="service-hero">
        <div>
          <p className="eyebrow">Точечно и по делу</p>
          <div className="service-title-with-duck">
            <h1>Разобрать конкретный вопрос</h1>
            <span className="duck-sprite duck-question service-hero-duck" aria-hidden="true" />
          </div>
          <p className="lead narrow">
            Когда весь портрет сейчас не нужен, а хочется получить ответ по одной конкретной теме.
            Не расползаемся по всем сферам жизни — берём один вопрос и разбираем именно его.
          </p>
          <div className="price-row"><strong>600 ₽</strong><span>одна тема · PDF + личный кабинет</span></div>
          <Link className="button primary" href="/login">Задать вопрос</Link>
        </div>

        <div className="service-box">
          <p className="eyebrow">Например</p>
          <ul>{examples.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>

      <section className="question-note">
        <p className="eyebrow">Как это работает</p>
        <h2>Один заказ — один фокус</h2>
        <p>
          При оформлении формулируешь вопрос своими словами и оставляешь данные рождения.
          Я смотрю именно эту тему и собираю отдельный разбор по ней.
          Если понимаешь, что хочется посмотреть вообще всё, выгоднее выбрать Натальную карту, Саджу или их комбинацию.
        </p>
      </section>

      <section className="section no-x">
        <h2>А если уже заказываешь полный разбор?</h2>
        <p>
          Тогда отдельно покупать этот формат не нужно: один дополнительный вопрос можно добавить
          к основному разбору, и я рассмотрю его отдельно в рамках заказа.
        </p>
      </section>
    </main>
  );
}
