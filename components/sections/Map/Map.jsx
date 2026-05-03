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
              R. Evilásio Moreira, 380{"\n"}
              Stella Maris, Salvador – BA{"\n"}
              CEP: 41600-465
            </span>
          </div>

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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.9 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6.29 6.29l.75-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span className={styles.addressText}>(71) 9 9999-9999</span>
          </div>

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
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className={styles.addressText}>contato@carvalhojustica.com</span>
          </div>
        </div>

        <div className={styles.mapSide}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d189405.92692439037!2d-38.3270524!3d-12.7197762!3m2!1i1024!2i768!4f13.1!2m1!1sIgreja%20Carvalho%20de%20Justi%C3%A7a!5e1!3m2!1sen!2sbr!4v1777178026864!5m2!1sen!2sbr"
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
