import Link from "next/link";

export const metadata = { title: "Личный кабинет" };

export default function CabinetPage() {
  return (
    <main className="inner-page shell">
      <Link className="back-link" href="/">← На главную</Link>
      <p className="eyebrow">Личный кабинет · прототип</p>
      <h1>Мои заказы</h1>
      <div className="empty-state">
        <div>🦆</div>
        <h2>Пока здесь подозрительно тихо</h2>
        <p>После подключения авторизации здесь появятся оплаченные заказы, статусы, сообщения и готовые PDF.</p>
        <Link className="button primary" href="/razbory">Заказать первый разбор</Link>
      </div>
    </main>
  );
}
