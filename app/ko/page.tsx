import Link from "next/link";
import { heroImage } from "@/lib/heroImage";
import { aboutImage } from "@/lib/aboutImage";
import { readingPreviewImageFixed } from "@/lib/readingPreviewImageFixed";
import { processStepsKo, servicesKo } from "@/lib/site-ko";
import ReadingServiceCardHead from "@/components/ReadingServiceCardHead";
import styles from "../home-about.module.css";

export const metadata = {
  title: "Уточки судьбы | 한국어",
  description: "네이털 차트, 사주와 운명의 오리들 프로젝트 한국어 소개",
};

export default function KoreanHomePage() {
  return (
    <main lang="ko">
      <header className="site-header shell">
        <Link className="brand" href="/ko">
          <span className="brand-mark">🦆</span>
          <span>
            <strong>Уточки судьбы · 운명의 오리들</strong>
            <small>지쳤지만 그래도 버티고 있는 사람들을 위한 작은 마법</small>
          </span>
        </Link>
        <nav>
          <Link href="/ko/razbory">분석</Link>
          <a href="#products">오리 굿즈</a>
          <a href="#about">소개</a>
          <Link href="/">RU</Link>
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="badge">✨ 점성술 · 사주 · 작가의 오리들</div>
          <h1>도대체 지금 <em>무슨 일이 벌어지고 있는지</em> 알고 싶을 때.</h1>
          <p className="lead">
            복잡한 말과 뜬구름 잡는 신비주의 없이, 개인의 출생 정보를 바탕으로 쉽고 자세하게 풀어드려요.
            내용은 꼼꼼하고, 디자인은 예쁘고, 가끔은 살짝 장난스럽습니다.
          </p>
          <div className="actions">
            <Link className="button primary" href="/ko/razbory">분석 고르기</Link>
            <a className="button ghost" href="#products">오리 굿즈 보기</a>
          </div>
          <div className="mini-proof">
            <span>PDF 해석</span><span>개인 페이지</span><span>결제는 현재 러시아어로 제공</span>
          </div>
        </div>
        <div className="hero-art-card">
          <img
            className="hero-art-image"
            src={heroImage}
            alt="운명의 오리들 세계관의 오리 캐릭터들"
          />
          <span className="hero-art-badge">운명의 오리 연합 · 전원 집합</span>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">개인 맞춤 해석</p>
            <h2>어떤 방식으로 내 이야기를 볼지 골라보세요</h2>
          </div>
          <Link className="text-link" href="/ko/razbory">모든 분석 보기 →</Link>
        </div>
        <div className="cards three">
          {servicesKo.map((service) => (
            <article className={`service-card ${service.slug === "konkretnyy-vopros" ? "question-card" : ""}`} key={service.slug}>
              <ReadingServiceCardHead
                slug={service.slug}
                eyebrow={service.eyebrow}
                title={service.title}
                headingLevel="h3"
                home
              />
              <p>{service.description}</p>
              <div className="card-bottom">
                <strong>{service.price}</strong>
                <Link href={service.slug === "combo" ? "/ko/razbory" : `/ko/razbory/${service.slug}`}>
                  자세히 보기 →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <p className="eyebrow">스무 번씩 메시지 주고받을 필요 없이</p>
        <h2>주문은 이렇게 진행돼요</h2>
        <div className="steps">
          {processStepsKo.map(([n, title, text]) => (
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
          <p className="eyebrow">결과물 예시</p>
          <h2>몇 문장짜리 자동 생성 결과가 아니라, 제대로 만든 개인용 해석이에요.</h2>
          <p>
            여러 장으로 구성된 PDF 안에 주제별 설명, 반복해서 나타나는 패턴과 최종 정리가 들어갑니다.
            어려운 용어를 늘어놓기보다 왜 그렇게 보는지 이해할 수 있게 설명하는 게 목표예요.
          </p>
          <Link className="button ghost" href="/ko/razbory">분석 구성 보기</Link>
        </div>
        <div className={styles.previewArtWrap} aria-hidden="true">
          <img
            className={styles.previewArt}
            src={readingPreviewImageFixed}
            alt=""
          />
        </div>
      </section>

      <section className="section shell" id="products">
        <div className="section-head">
          <div>
            <p className="eyebrow">직접 만질 수 있는 오리들</p>
            <h2>카드, 노트와 오리 무리</h2>
          </div>
        </div>
        <div className="product-banner">
          <div className="product-duck">🦆</div>
          <div>
            <h3>작가 오리지널 카드 덱 «Уточки судьбы»</h3>
            <p>55장의 카드에 자기풍자, 삶에 대한 질문과 가끔 정곡을 찌르는 한마디를 담았어요. 현재 러시아 Wildberries에서 판매 중이에요.</p>
          </div>
          <a className="button primary" href="https://www.wildberries.ru/catalog/846841716/detail.aspx?targetUrl=GP">
            Wildberries
          </a>
        </div>
      </section>

      <section className={`section shell about ${styles.aboutWithArt}`} id="about">
        <div className={styles.artWrap}>
          <img
            className={styles.art}
            src={aboutImage}
            alt="별빛 작업실에서 오리들과 함께 있는 나스탸"
          />
        </div>
        <div>
          <p className="eyebrow">이 모든 걸 만든 사람</p>
          <h2>안녕하세요, 저는 나스탸예요.</h2>
          <p>
            본업은 변호사이고, 남는 시간에는 어쩌다 보니 세계관을 통째로 만드는 사람이에요.
            시스템과 디테일, 한국, 카드 형식의 콘텐츠, 그리고 복잡한 걸 사람 말로 설명하는 걸 좋아해요.
          </p>
          <p>
            그래서 여기의 해석도 “신비한 에너지가 찾아옵니다” 같은 말로 끝내지 않아요.
            무엇을 보고 그렇게 판단하는지, 그리고 그 주제가 실제 생활에서 어떻게 나타날 수 있는지 가능한 한 구체적으로 설명합니다.
          </p>
        </div>
      </section>

      <footer className="shell footer">
        <span>🦆 Уточки судьбы</span>
        <span>© 2026</span>
        <div>
          <Link href="/">Русский</Link>
          <Link href="/offer">이용 조건 (RU)</Link>
          <Link href="/privacy">개인정보 처리방침 (RU)</Link>
        </div>
      </footer>
    </main>
  );
}
