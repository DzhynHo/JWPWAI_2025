import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Witaj na Blogu o Bogach Hinduizmu</h1>
      <p className={styles.text}>
        Ten blog przybliża bogactwo kultury hinduistycznej, mitologię, tradycje oraz bogów hinduizmu.
      </p>

      <h2 className={styles.subtitle}>Odwiedź nasze sekcje:</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/gods" className={styles.link}>
            Bogi – poznaj głównych bogów hinduizmu
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/history" className={styles.link}>
            Historia – odkryj dzieje hinduizmu i jego tradycji
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/culture" className={styles.link}>
            Kultura – muzyka, taniec, sztuka i tradycje
          </Link>
        </li>
      </ul>

      <p className={styles.text}>
        Blog jest w pełni edukacyjny i pozwala łatwo przeglądać informacje o bogach, historii i kulturze Indii.
      </p>
    </div>
  );
}
