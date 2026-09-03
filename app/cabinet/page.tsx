import Link from "next/link";

export const metadata = { title: "Личный кабинет" };

const orders = [
  {
    id: "UT-2409",
    title: "Натальная карта",
    status: "В работе",
    statusClass: "working",
    date: "3 сентября 2026",
    note: "Данные получены. Если понадобится уточнение времени рождения — напишу в чат заказа.",
  },
  {
    id: "UT-2318",
    title: "Саджу",
    status: "Готово",
    statusClass: "ready",
    date: "18 августа 2026",
    note: "Разбор готов и доступен для скачивания.",
  },
];

export default function CabinetPage() {
  return (
    <main className="inner-page shell cabinet-page">
      <div className="cabinet-topline">
        <Link className="back-link" href="/">← На главную</Link>
        <span className="role-pill">Кабинет клиента</span>
      </div>

      <div className="cabinet-heading">
        <div>
          <p className="eyebrow">Личный кабинет</p>
          <h1>Мои заказы</h1>
          <p className="lead narrow">
            Здесь живут все разборы: статус, переписка по заказу и готовые файлы.
            Один аккаунт — одна история заказов.
          </p>
        </div>
        <Link className="button primary" href="/razbory">Новый заказ</Link>
      </div>

      <div className="cabinet-layout">
        <section className="order-list" aria-label="Список заказов">
          {orders.map((order, index) => (
            <article className={`order-card ${index === 0 ? "active" : ""}`} key={order.id}>
              <div className="order-card-top">
                <span className="order-number">{order.id}</span>
                <span className={`status-chip ${order.statusClass}`}>{order.status}</span>
              </div>
              <h2>{order.title}</h2>
              <p>{order.note}</p>
              <div className="order-meta">
                <span>{order.date}</span>
                <span>{index === 0 ? "3 сообщения" : "PDF готов"}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="chat-panel">
          <div className="chat-head">
            <div>
              <span className="order-number">UT-2409</span>
              <h2>Чат по заказу</h2>
            </div>
            <span className="status-chip working">В работе</span>
          </div>

          <div className="chat-thread">
            <div className="message mine">
              <span>Вы</span>
              <p>Привет! Данные отправила. Время рождения 10:25, Екатеринбург.</p>
              <small>16:04</small>
            </div>
            <div className="message admin">
              <span>Настя · Уточки судьбы</span>
              <p>
                Всё получила 🦆 Если по ходу разбора понадобится уточнить какой-нибудь момент,
                напишу прямо сюда.
              </p>
              <small>16:08</small>
            </div>
            <div className="message system">
              <p>Статус заказа изменён: «В работе»</p>
            </div>
          </div>

          <div className="chat-compose">
            <input aria-label="Сообщение" placeholder="Написать сообщение по заказу…" />
            <button type="button">Отправить</button>
          </div>
          <p className="prototype-note">
            Сейчас это интерфейс-прототип. После подключения авторизации и базы чат станет настоящим.
          </p>
        </section>
      </div>
    </main>
  );
}
