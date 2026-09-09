import Link from "next/link";

export const metadata = { title: "사주 | Уточки судьбы" };

const includes = [
  "사주의 네 기둥과 오행 구성",
  "도움이 되는 요소와 과한 요소",
  "성격, 자원과 취약한 지점",
  "관계, 돈과 직업적 실현",
  "큰 인생 주기와 반복되는 테마",
];

export default function KoreanSajuPage() {
  return (
    <main className="inner-page shell" lang="ko">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <Link className="back-link" href="/ko/razbory">← 모든 분석</Link>
        <Link className="back-link" href="/razbory/saju">Русский →</Link>
      </div>
      <div className="service-hero">
        <div>
          <p className="eyebrow">한국식 사주명리 · 네 기둥</p>
          <h1>사주</h1>
          <p className="lead narrow">
            태어난 연·월·일·시의 네 기둥과 오행의 균형을 바탕으로 성향과 삶의 흐름을 봐요.
            사람을 단순한 한 가지 동물이나 한 문장으로 정리하지 않고, 전체 구조를 연결해서 설명합니다.
          </p>
          <div className="price-row"><strong>1,500 ₽</strong><span>PDF + 개인 페이지</span></div>
          <span className="button ghost">주문 기능은 현재 러시아어 페이지에서 제공돼요</span>
        </div>
        <div className="service-box">
          <p className="eyebrow">포함되는 내용</p>
          <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>

      <section className="question-note">
        <p className="eyebrow">추가 질문 한 가지 가능</p>
        <h2>한 가지 주제를 따로 보고 싶다면</h2>
        <p>
          연애, 일, 돈, 올해의 흐름이나 특정 상황처럼 궁금한 주제를 주문할 때 적을 수 있어요.
          기본 사주 해석과 함께 그 질문도 별도로 봅니다.
          질문이 없다면 기본 프로그램에 따라 전체 해석을 진행해요.
        </p>
      </section>

      <section className="section no-x">
        <h2>필요한 정보</h2>
        <p>생년월일, 출생 시간과 출생 장소가 필요해요. 시간대는 주문 과정에서 맞춰 계산합니다.</p>
      </section>
    </main>
  );
}
