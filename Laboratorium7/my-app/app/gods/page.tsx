import styles from "./page.module.css";

export default function GodsPage() {
  const gods = [
    { name: "Brahma", description: "Brahma jest bogiem stwórcą w hinduizmie." },
    { name: "Wisznu", description: "Wisznu jest bogiem podtrzymującym wszechświat." },
    { name: "Siwa", description: "Siwa jest bogiem zniszczenia i transformacji." },
    { name: "Lakszmi", description: "Lakszmi jest boginią bogactwa i szczęścia." },
    { name: "Saraswati", description: "Saraswati jest boginią wiedzy i sztuki." }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bogi</h1>
      <p className={styles.text}>Oto niektórzy z głównych bogów hinduizmu:</p>
      <ul className={styles.list}>
        {gods.map((god) => (
          <li key={god.name} className={styles.listItem}>
            <h2 className={styles.subtitle}>{god.name}</h2>
            <p className={styles.text}>{god.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
