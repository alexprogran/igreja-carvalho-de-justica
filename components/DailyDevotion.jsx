import Image from "next/image";
import styles from "./DailyDevotion.module.css";

const DEFAULT_DEVOTION = {
  imageSrc: "/assets/devotion-bg.jpg",
  imageAlt: "Daily Devotion",
  title: "The Key to Surviving Tough Times",
  text: "To receive God intended blessing, focus your attention on Him during trials.",
  date: "February 5, 2025",
};

const DailyDevotion = ({
  titleSection = "Reflexao do dia",
  devotion = DEFAULT_DEVOTION,
}) => {
  const { imageSrc, imageAlt, title, text, date } = {
    ...DEFAULT_DEVOTION,
    ...devotion,
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{titleSection}</h3>
        <button className={styles.viewMore}>View more</button>
      </div>
      <div className={styles.card}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className={styles.image}
          width={800}
          height={512}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h4 className={styles.devotionTitle}>{title}</h4>
          <p className={styles.devotionText}>{text}</p>
          <p className={styles.devotionDate}>{date}</p>
        </div>
      </div>
    </section>
  );
};

export default DailyDevotion;
