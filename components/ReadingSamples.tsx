type SampleFrameProps = {
  children: React.ReactNode;
  label: string;
};

function SampleFrame({ children, label }: SampleFrameProps) {
  return (
    <div className="sample-wrap">
      <div className="sample-sheet" aria-label={label}>
        <div className="sample-top-ornament">✦</div>
        {children}
        <div className="sample-page-number">Уточки судьбы</div>
      </div>
      <span className="sample-caption">{label}</span>
    </div>
  );
}

function SampleTitle({ children, subtitle }: { children: React.ReactNode; subtitle: string }) {
  return (
    <>
      <h4 className="sample-title">{children}</h4>
      <p className="sample-subtitle">{subtitle}</p>
      <div className="sample-gold-rule">✦</div>
    </>
  );
}

function Duck({ children = "🐥" }: { children?: React.ReactNode }) {
  return <div className="sample-duck">{children}</div>;
}

export function NatalVenusSample() {
  return (
    <SampleFrame label="Венера · любовь и ценности">
      <SampleTitle subtitle="Любовь, близость и ценности">ВЕНЕРА<br />В РЫБАХ</SampleTitle>
      <p className="sample-lead">Ты любишь глубоко, тонко и по-настоящему.</p>
      <div className="sample-two-boxes">
        <div className="sample-box">
          <strong>Тебе важно</strong>
          <ul>
            <li>нежность и эмоциональная честность</li>
            <li>дружба внутри любви</li>
            <li>ощущение вдохновения</li>
            <li>пространство для души</li>
          </ul>
        </div>
        <div className="sample-box soft">
          <strong>Осторожно</strong>
          <ul>
            <li>идеализация партнёра</li>
            <li>роль спасательницы</li>
            <li>молчание вместо разговора</li>
          </ul>
        </div>
      </div>
      <Duck>🐥♡🐥</Duck>
      <p className="sample-quote">Твоя любовь раскрывается там, где есть и магия, и свобода.</p>
    </SampleFrame>
  );
}

export function NatalCareerSample() {
  return (
    <SampleFrame label="Карьера · реализация">
      <SampleTitle subtitle="Где твоя сила раскрывается особенно ярко">КАРЬЕРА И<br />РЕАЛИЗАЦИЯ</SampleTitle>
      <p className="sample-lead compact">
        Сильный Водолей даёт талант видеть системы, закономерности и слабые места процессов.
      </p>
      <div className="sample-box wide">
        <strong>Подходящие направления</strong>
        <ul>
          <li>право и аналитика</li>
          <li>консультирование и обучение</li>
          <li>цифровые проекты и продукты</li>
          <li>креативные концепции и тексты</li>
        </ul>
      </div>
      <div className="sample-box wide soft">
        <strong>Твои сильные качества</strong>
        <p>стратегическое мышление · самостоятельность · свежие идеи · умение видеть картину целиком</p>
      </div>
      <Duck>🐥💻</Duck>
      <p className="sample-quote">Лучший путь для тебя — не просто работа, а дело со смыслом.</p>
    </SampleFrame>
  );
}

export function SajuEnergySample() {
  return (
    <SampleFrame label="Пять элементов">
      <SampleTitle subtitle="Баланс пяти элементов">ЭНЕРГЕТИЧЕСКИЙ<br />ПРОФИЛЬ</SampleTitle>
      <div className="sample-energy">
        <div className="sample-donut" />
        <div className="sample-legend">
          <span><i className="fire" />Огонь — 37.5%</span>
          <span><i className="earth" />Земля — 25%</span>
          <span><i className="wood" />Дерево — 12.5%</span>
          <span><i className="metal" />Металл — 12.5%</span>
          <span><i className="water" />Вода — 12.5%</span>
        </div>
      </div>
      <div className="sample-three-boxes">
        <div className="sample-box mini"><strong>🔥 Огонь</strong><p>драйв, инициатива, внутренний импульс</p></div>
        <div className="sample-box mini"><strong>⛰ Земля</strong><p>опора, выносливость, удержание задач</p></div>
        <div className="sample-box mini"><strong>🌳 Дерево</strong><p>рост, обучение и новый уровень</p></div>
      </div>
      <Duck>🐥🔎</Duck>
      <p className="sample-alert"><strong>Главная уязвимость:</strong> избыток Огня забирает ресурс у Воды и иссушает Дерево.</p>
    </SampleFrame>
  );
}

export function SajuMoneySample() {
  return (
    <SampleFrame label="Деньги · реализация">
      <SampleTitle subtitle="Денежная траектория и социальная реализация">ДЕНЬГИ И<br />РЕАЛИЗАЦИЯ</SampleTitle>
      <div className="sample-two-boxes money">
        <div className="sample-box">
          <strong>正財 — регулярный доход</strong>
          <p>стабильная оплата за компетенцию, должность, ответственность и долгие контракты.</p>
        </div>
        <div className="sample-box soft">
          <strong>偏財 — подвижный доход</strong>
          <p>проекты, продажи, дополнительные продукты, связи, рынки и движение.</p>
        </div>
      </div>
      <p className="sample-alert"><strong>Деньги становятся сильнее после Металла:</strong> когда знания упакованы, цена названа, продукт закончен.</p>
      <div className="sample-box wide">
        <strong>Сильные среды</strong>
        <p>право · регулирование · аналитика · управление процессами · обучение · цифровые продукты</p>
      </div>
      <Duck>🐥📈</Duck>
    </SampleFrame>
  );
}
