import Worship from "./Worship";
import styles from "./QuickLinks.module.css";

const QuickLinks = () => (
  <section className={styles.section}>
    <h3 className={styles.heading}>Dias de culto</h3>
    <div className={styles.worshipList}>
      <Worship dayWorship="Domingo" time="09:00" />
      <Worship dayWorship="Quarta-feira" time="19:30" />
    </div>
  </section>
);

export default QuickLinks;
