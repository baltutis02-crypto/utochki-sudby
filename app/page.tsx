import Link from "next/link";
import { processSteps, services } from "@/lib/site";
import { heroImage } from "@/lib/heroImage";

export default function HomePage() {
  return (
    <main>
      <header className="site-header shell">
        <Link className="brand" href="/">
          <span className="brand-mark">🦆</span>
          <span>
            <strong>Уточки судьбы</strong>
            <small>магия для тех, кто устал, но всё ещё держится</small>
          </span>
        </Link>
        <nav>
          <Link href="/razbory">Разборы</Link>
          <a href="#products">Уточки</a>
          <a href="#about">Обо мне</a>
          <Link className="nav-cta" href="/cabinet">Личный кабинет</Link>
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="badge">✨ астрология, Саджу и авторские уточки</div>
          <h1>Когда хочется понять, <em>что вообще происходит.</em></h1>
          <p className="lead">
            Персональные разборы без бюрократии и мистического тумана. Подробно, красиво,
            местами ехидно — и всё хранится в твоём личном кабинете.
          </p>
          <div className="actions">
            <Link className="button primary" href="/razbory">Выбрать разбор</Link>
            <a className="button ghost" href="#products">Посмотреть уточек</a>
          </div>
          <div className="mini-proof">
            <span>PDF-разбор</span><span>личный кабинет</span><span>оплата онлайн</span>
          </div>
        </div>
        <div className="hero-art-card">
          <img
            className="hero-art-image"
            src={heroImage}
            alt="Коалиция Уточек судьбы: утка с бантиком и ножом, ведьма, таролог и волшебница"
          />
          <span className="hero-art-badge">коалиция судьбы · в сборе</span>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">Персональные разборы</p>
            <h2>Выбери, с какой стороны посмотреть на судьбу</h2>
          </div>
          <Link className="text-link" href="/razbory">Все разборы →</Link>
        </div>
        <div className="cards three">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              <p className="eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-bottom">
                <strong>{service.price}</strong>
                <Link href={service.slug === "combo" ? "/razbory" : `/razbory/${service.slug}`}>
                  Подробнее →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <p className="eyebrow">Без квеста из двадцати сообщений</p>
        <h2>Как проходит заказ</h2>
        <div className="steps">
          {processSteps.map(([n, title, text]) => (
            <div className="step" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell preview">
        <div>
          <p className="eyebrow">Пример результата</p>
          <h2>Не три абзаца из генератора. Нормальный человеческий разбор.</h2>
          <p>
            Внутри — структурированные главы, объяснения простым языком, акценты на повторяющихся темах
            и отдельные выводы. Примеры реальных обезличенных страниц добавим в галерею.
          </p>
          <Link className="button ghost" href="/razbory">Смотреть состав разборов</Link>
        </div>
        <div className="paper-stack" aria-hidden="true">
          <div className="paper p3" />
          <div className="paper p2" />
          <div className="paper p1">
            <span>УТОЧКИ СУДЬБЫ</span>
            <h3>Твой персональный разбор</h3>
            <i />
            <i />
            <i className="short" />
          </div>
        </div>
      </section>

      <section className="section shell" id="products">
        <div className="section-head">
          <div>
            <p className="eyebrow">Уточки, которых можно потрогать</p>
            <h2>Карты, блокноты и вся стая</h2>
          </div>
        </div>
        <div className="product-banner">
          <div className="product-duck">🦆</div>
          <div>
            <h3>Авторская колода «Уточки судьбы»</h3>
            <p>55 карт с самоиронией, вопросами к жизни и периодическими нападениями правды.</p>
          </div>
          <a className="button primary" href="https://www.wildberries.ru/catalog/846841716/detail.aspx?targetUrl=GP">
            На Wildberries
          </a>
        </div>
      </section>

      <section className="section shell about" id="about">
        <div className="portrait">АС</div>
        <div>
          <p className="eyebrow">Кто всё это придумал</p>
          <h2>Привет, я Настя.</h2>
          <p>
            Юрист по основной профессии и человек, который в свободное время зачем-то строит целые вселенные.
            Я люблю системы, детали, Корею, карточные форматы и объяснять сложное человеческим языком.
          </p>
          <p>
            Поэтому и разборы здесь будут не «вам выпала загадочная энергия», а подробно: что вижу,
            почему делаю такой вывод и где это может проявляться в обычной жизни.
          </p>
        </div>
      </section>

      <footer className="shell footer">
        <span>🦆 Уточки судьбы</span>
        <span>© 2026</span>
        <div>
          <a href="#">Оферта</a>
          <a href="#">Политика ПД</a>
          <a href="#">Контакты</a>
        </div>
      </footer>
    </main>
  );
}
