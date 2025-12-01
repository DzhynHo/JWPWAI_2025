import styles from "./page.module.css";

export default function CulturePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kultura Hinduizmu</h1>
      <p className={styles.text}>
        Kultura hinduizmu jest niezwykle bogata i różnorodna, obejmuje muzykę, taniec, sztuki wizualne, literaturę i święta religijne. 
        Wpływa na codzienne życie Hindusów i kształtuje ich tradycje od tysięcy lat.
      </p>

      <h2 className={styles.subtitle}>Święta i obrzędy</h2>
      <p className={styles.text}>
        Najważniejsze święta hinduistyczne to m.in. Diwali – Święto Świateł, Holi – Festiwal Kolorów, Navaratri oraz Maha Shivaratri. 
        Obrzędy obejmują modlitwy, ofiary, tańce i procesje, a także ceremonie rodzinne.
      </p>

      <h2 className={styles.subtitle}>Muzyka i taniec</h2>
      <p className={styles.text}>
        Indyjska muzyka klasyczna, zarówno hinduska (Bharatanatyam, Kathak), jak i instrumentalna, 
        odgrywa ważną rolę w rytuałach religijnych. Tradycyjne tańce opowiadają historie mitologiczne i są częścią kultury świątynnej.
      </p>

      <h2 className={styles.subtitle}>Sztuka i architektura</h2>
      <p className={styles.text}>
        Świątynie hinduskie są znane ze wspaniałej architektury, rzeźb i malowideł przedstawiających bogów i sceny mitologiczne. 
        Indyjska sztuka jest ściśle związana z religią i codziennym życiem.
      </p>

      <h2 className={styles.subtitle}>Kuchnia i tradycje</h2>
      <p className={styles.text}>
        Kuchnia indyjska jest różnorodna, bogata w przyprawy i symbole religijne. Tradycje kulinarne często łączą się z rytuałami i świętami, 
        podkreślając znaczenie jedzenia w kulturze i duchowości.
      </p>
    </div>
  );
}
