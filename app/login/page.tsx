import Link from "next/link";

export const metadata = { title: "Вход" };

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <Link className="brand auth-brand" href="/">🦆 <strong>Уточки судьбы</strong></Link>
        <p className="eyebrow">Вход для клиента</p>
        <h1>Все твои разборы — в одном кабинете</h1>
        <p>
          После подключения авторизации здесь будет вход по e-mail, восстановление пароля
          и доступ только к твоим заказам, чатам и готовым PDF.
        </p>
        <div className="auth-actions">
          <Link className="button primary" href="/cabinet">Посмотреть прототип кабинета</Link>
          <Link className="button ghost" href="/razbory">Выбрать разбор</Link>
        </div>
      </div>
    </main>
  );
}
