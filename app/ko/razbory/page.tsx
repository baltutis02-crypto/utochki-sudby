import Link from "next/link";
import { servicesKo } from "@/lib/site-ko";
import ReadingServiceCardHead from "@/components/ReadingServiceCardHead";

export const metadata = { title: "분석 | Уточки судьбы" };

export default function KoreanReadingsPage() {
  return (
    <main className="inner-page shell" lang="ko">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <Link className="back-link" href="/ko">← 한국어 메인</Link>
        <Link className="back-link" href="/razbory">Русский →</Link>
      </div>
      <p className="eyebrow">개인 맞춤 분석</p>
      <h1>불안의 정도 말고, 보고 싶은 방식을 고르세요</h1>
      <p className="lead narrow">
        각 형식이 무엇을 다루는지, 가격은 얼마인지, 어떤 결과물을 받는지 한눈에 볼 수 있어요.
      </p>
      <div className="cards three reading-grid">
        {servicesKo.map((service) => (
          <article className={`service-card ${service.slug === "konkretnyy-vopros" ? "question-card" : ""}`} key={service.slug}>
            <ReadingServiceCardHead
              slug={service.slug}
              eyebrow={service.eyebrow}
              title={service.title}
              headingLevel="h2"
            />
            <p>{service.description}</p>
            <div className="card-bottom">
              <strong>{service.price}</strong>
              {service.slug !== "combo" ? (
                <Link href={`/ko/razbory/${service.slug}`}>열기 →</Link>
              ) : (
                <span>곧 추가돼요</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
