import Link from "next/link";

export const metadata = { title: "Управление заказами" };

const requests = [
  {
    id: "UT-2412",
    client: "Анна К.",
    service: "Натальная карта",
    status: "Новая заявка",
    className: "new",
    time: "5 минут назад",
  },
  {
    id: "UT-2409",
    client: "Мария С.",
    service: "Натальная карта",
    status: "В работе",
    className: "working",
    time: "сегодня, 16:08",
  },
  {
    id: "UT-2401",
    client: "Елена П.",
    service: "Саджу",
    status: "Ждём ответ",
    className: "waiting",
    time: "сегодня, 14:32",
  },
];

export default function AdminPage() {
  return (
    <main className="inner-page shell cabinet-page admin-page">
      <div className="cabinet-topline">
        <Link className="back-link" href="/">← На сайт</Link>
        <span className="role-pill admin-role">Кабинет Насти</span>
      </div>

      <div className="cabinet-heading">
        <div>
          <p className="eyebrow">Управление заказами</p>
          <h1>Заявки и диалоги</h1>
          <p className="lead narrow">
            Сюда приходят новые заказы. У каждого клиента — отдельная карточка заказа
            и отдельный чат для уточнений.
          </p>
        </div>
        <div className="admin-stats">
          <span><strong>1</strong> новая</span>
          <span><strong>2</strong> требуют внимания</span>
        </div>
      </div>

      <div className="cabinet-layout admin-layout">
        <section className="order-list" aria-label="Заявки клиентов">
          {requests.map((request, index) => (
            <article className={`order-card ${index === 0 ? "active" : ""}`} key={request.id}>
              <div className="order-card-top">
                <span className="order-number">{request.id}</span>
                <span className={`status-chip ${request.className}`}>{request.status}</span>
              </div>
              <h2>{request.client}</h2>
              <p>{request.service}</p>
              <div className="order-meta">
                <span>{request.time}</span>
                <span>{index === 0 ? "Открыть заявку →" : "Открыть чат →"}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="chat-panel">
          <div className="chat-head">
            <div>
              <span className="order-number">UT-2412 · Анна К.</span>
              <h2>Новая заявка</h2>
            </div>
            <span className="status-chip new">Новая заявка</span>
          </div>

          <div className="client-data">
            <div><span>Услуга</span><strong>Натальная карта</strong></div>
            <div><span>Дата рождения</span><strong>14.06.1994</strong></div>
            <div><span>Время</span><strong>07:42</strong></div>
            <div><span>Место</span><strong>Казань</strong></div>
          </div>

          <div className="chat-thread admin-thread">
            <div className="message client">
              <span>Анна</span>
              <p>
                Время со слов мамы, но она говорит, что могла ошибиться минут на десять.
                Это критично?
              </p>
              <small>16:26</small>
            </div>
            <div className="message admin">
              <span>Вы</span>
              <p>
                Для начала беру 07:42. Если увижу, что Асцендент стоит прямо на границе,
                уточню детали здесь.
              </p>
              <small>черновик</small>
            </div>
          </div>

          <div className="chat-compose">
            <input aria-label="Ответ клиенту" placeholder="Ответить Анне по этому заказу…" />
            <button type="button">Отправить</button>
          </div>
          <p className="prototype-note">
            Админский кабинет не будет виден клиентам. После подключения ролей доступ останется только у администратора.
          </p>
        </section>
      </div>
    </main>
  );
}
