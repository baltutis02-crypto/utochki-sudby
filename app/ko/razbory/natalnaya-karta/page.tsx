import Link from "next/link";

export const metadata = { title: "네이털 차트 | Уточки судьбы" };

const includes = [
  "기본적인 성격과 중심 성향",
  "연애, 애착 방식과 반복되는 관계 패턴",
  "일, 돈과 커리어에서의 강점",
  "차트에서 긴장이 생기는 지점과 그것을 다루는 방식",
  "반복해서 나타나는 핵심 주제와 최종 정리",
];

export default function KoreanNatalPage() {
  return (
    <main className="inner-page shell" lang="ko">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <Link className="back-link" href="/ko/razbory">← 모든 분석</Link>
        <Link className="back-link" href="/razbory/natalnaya-karta">Русский →</Link>
      </div>
      <div className="service-hero">
        <div>
          <p className="eyebrow">서양 점성술</p>
          <h1>네이털 차트</h1>
          <p className="lead narrow">
            별자리 설명을 복사해 붙이는 식이 아니라, 출생 차트 전체를 하나의 이야기로 묶어서 봐요.
            어떤 성향이 반복되는지, 그 주제가 실제 생활에서 어떻게 나타나는지 개인 기준으로 풀어드립니다.
          </p>
          <div className="price-row"><strong>1,700 ₽</strong><span>PDF + 개인 페이지</span></div>
          <span className="button ghost">주문 기능은 현재 러시아어 페이지에서 제공돼요</span>
        </div>
        <div className="service-box">
          <p className="eyebrow">포함되는 내용</p>
          <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>

      <section className="question-note">
        <p className="eyebrow">추가 질문 한 가지 가능</p>
        <h2>특히 신경 쓰이는 주제가 있다면</h2>
        <p>
          예를 들어 올해의 흐름, 일, 연애, 돈이나 특정 상황처럼 한 가지를 추가할 수 있어요.
          주문할 때 질문을 적으면 기본 해석과 별도로 그 주제를 따로 봅니다.
          별도 질문이 없다면 기본 프로그램에 따라 전체 해석을 진행해요.
        </p>
      </section>

      <section className="section no-x">
        <h2>필요한 정보</h2>
        <p>생년월일, 가능한 한 정확한 출생 시간, 출생 도시가 필요해요.</p>
      </section>
    </main>
  );
}
