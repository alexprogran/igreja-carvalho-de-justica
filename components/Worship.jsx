import { Clock } from "lucide-react";
import styles from "./Worship.module.css";

const Worship = ({ dayWorship = "Domingo", time = "09:00" }) => (
  <div className={styles.card}>
    <div className={styles.left}>
      <Clock className={styles.icon} />
      <span className={styles.day}>{dayWorship}</span>
    </div>
    <span className={styles.timeBadge}>{time}</span>
  </div>
);

export default Worship;
