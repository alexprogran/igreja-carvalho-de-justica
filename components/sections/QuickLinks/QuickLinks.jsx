import Worship from "../Worship/Worship";
import styles from "./QuickLinks.module.css";

const QuickLinks = () => (
  <section className={styles.section}>
    <h3 className={styles.heading}>Dias de culto</h3>
    <div className={styles.worshipList}>
      <Worship dayWorship="Domingo" time="18:30" />
      <Worship dayWorship="Terça-feira" time="19:00" />
    </div>
  </section>
);

export default QuickLinks;
