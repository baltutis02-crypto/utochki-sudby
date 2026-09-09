import ReadingDuck from "./ReadingDuck";
import styles from "./reading-duck.module.css";

type Props = {
  slug: string;
  eyebrow: string;
  title: string;
  headingLevel?: "h2" | "h3";
  home?: boolean;
};

export default function ReadingServiceCardHead({ slug, eyebrow, title, headingLevel = "h2", home = false }: Props) {
  const Heading = headingLevel;

  return (
    <div className={styles.cardHead}>
      <div className={styles.cardTitle}>
        <p className="eyebrow">{eyebrow}</p>
        <Heading>{title}</Heading>
      </div>
      <ReadingDuck slug={slug} className={`${styles.mascot} ${home ? styles.homeMascot : ""}`} />
    </div>
  );
}
