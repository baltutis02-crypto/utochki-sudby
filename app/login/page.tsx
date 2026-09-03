import Link from "next/link";

export const metadata = { title: "Вход" };

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <Link className="brand auth-brand" href="/">🦆 <strong>Уточки судьбы</strong></Link>
        <p className="eyebrow">Личный кабинет</p>
        <h1>Заказы будут жить здесь</h1>
        <p>
          На следующем этапе подключим регистрацию, вход по e-mail, восстановление пароля
          и безопасное хранение заказов.
        </p>
        <Link className="button primary" href="/razbory">Пока выбрать разбор</Link>
      </div>
    </main>
  );
}
