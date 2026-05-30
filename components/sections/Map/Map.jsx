import styles from "./Map.module.css";

const Map = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Como nos encontrar</h3>
      <div className={styles.card}>
        <div className={styles.addressSide}>
          <p className={styles.addressTitle}>Igreja Carvalho de Justiça</p>

          <div className={styles.addressRow}>
            <svg
              className={styles.addressIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className={styles.addressText}>
              R. Antônio Félix, 895{"\n"}
              Parque Verde, Camaçari - BA{"\n"}
              CEP: 42800-970
            </span>
          </div>          
        </div>

        <div className={styles.mapSide}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.902608035419!2d-38.3270524!3d-12.7197762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716691a493fea6f%3A0x99b6b75f67efb0ab!2sIgreja%20Evang%C3%A9lica%20Carvalhos%20de%20justi%C3%A7a!5e0!3m2!1sen!2sbr!4v1779241419331!5m2!1sen!2sbr"
            className={styles.mapFrame}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Igreja Carvalho de Justiça"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
