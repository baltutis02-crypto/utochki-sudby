import Link from "next/link";

export const metadata = { title: "한 가지 질문 집중 분석 | Уточки судьбы" };

const examples = [
  "일, 커리어와 방향 전환",
  "관계와 커플 안의 특정 상황",
  "돈과 재정 흐름",
  "올해 또는 가까운 시기의 흐름",
  "지금 가장 중요한 다른 한 가지 주제",
];

export default function KoreanSpecificQuestionPage() {
  return (
    <main className="inner-page shell" lang="ko">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <Link className="back-link" href="/ko/razbory">← 모든 분석</Link>
        <Link className="back-link" href="/razbory/konkretnyy-vopros">Русский →</Link>
      </div>
      <div className="service-hero">
        <div>
          <p className="eyebrow">필요한 것만 콕 집어서</p>
          <h1>한 가지 질문 집중 분석</h1>
          <p className="lead narrow">
            지금 전체적인 성향 분석은 필요 없고, 한 가지 주제에 대한 답이 가장 궁금할 때 선택하는 형식이에요.
            모든 삶의 영역으로 퍼지지 않고 질문 하나에 집중해서 봅니다.
          </p>
          <div className="price-row"><strong>600 ₽</strong><span>한 가지 주제 · PDF + 개인 페이지</span></div>
          <span className="button ghost">주문 기능은 현재 러시아어 페이지에서 제공돼요</span>
        </div>

        <div className="service-box">
          <p className="eyebrow">예를 들면</p>
          <ul>{examples.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>

      <section className="question-note">
        <p className="eyebrow">진행 방식</p>
        <h2>한 번의 주문, 한 가지 포커스</h2>
        <p>
          질문을 자신의 말로 적고 출생 정보를 남기면, 그 주제만 따로 분석해서 PDF로 정리합니다.
          보다 넓게 전체를 보고 싶다면 네이털 차트, 사주 또는 두 가지를 함께 보는 형식이 더 잘 맞아요.
        </p>
      </section>

      <section className="section no-x">
        <h2>이미 전체 분석을 주문한다면?</h2>
        <p>
          이 형식을 따로 살 필요는 없어요. 전체 네이털 차트나 사주 분석에는 추가 질문 한 가지를 함께 넣을 수 있습니다.
        </p>
      </section>
    </main>
  );
}
