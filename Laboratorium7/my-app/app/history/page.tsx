import styles from "./page.module.css";

export default function HistoryPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Historia Hinduizmu</h1>
      <p className={styles.text}>
        Hinduizm jest jedną z najstarszych religii świata, wywodzącą się z subkontynentu indyjskiego. 
        Jego początki sięgają tysięcy lat wstecz, obejmując różnorodne wierzenia, rytuały i tradycje.
      </p>

      <h2 className={styles.subtitle}>Początki i Wedy</h2>
      <p className={styles.text}>
        Najstarsze teksty hinduistyczne to Wedy, które zawierają modlitwy, hymny i wskazówki rytualne. 
        Wedy powstały około 1500–1200 p.n.e. i stanowią fundament filozofii oraz kultury hinduskiej.
      </p>

      <h2 className={styles.subtitle}>Epoka eposów</h2>
      <p className={styles.text}>
        W kolejnych wiekach powstały wielkie eposy, takie jak Ramajana i Mahabharata, 
        które opisują życie bogów i bohaterów, nauczają wartości i zasad moralnych.
      </p>

      <h2 className={styles.subtitle}>Rozwój kultu bogów</h2>
      <p className={styles.text}>
        Z czasem powstała Trójca Hinduska: Brahma – bóg stwórca, Wisznu – bóg podtrzymujący, 
        oraz Siwa – bóg zniszczenia. Wraz z nimi pojawiły się kultury lokalnych bogów i bogiń, takich jak Lakszmi czy Saraswati.
      </p>

      <h2 className={styles.subtitle}>Wpływ na kulturę</h2>
      <p className={styles.text}>
        Hinduizm kształtował sztukę, architekturę, muzykę, taniec i literaturę Indii przez tysiące lat. 
        Jego tradycje przetrwały do dziś, wciąż obecne w codziennym życiu Hindusów.
      </p>
    </div>
  );
}
