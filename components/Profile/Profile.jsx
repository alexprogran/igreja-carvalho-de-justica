import React from "react";
import styles from "./Profile.module.css";
import { FaUser, FaEnvelope, FaCog, FaFileAlt, FaSignOutAlt, FaCheck, FaBars, FaChevronRight } from "react-icons/fa";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.headerWrapper}>
        <svg className={styles.headerSvg} viewBox="0 0 375 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0H375V120C375 120 312.5 160 187.5 160C62.5 160 0 120 0 120V0Z" fill="hsl(var(--church-green))"/>
        </svg>
        <div className={styles.headerContent}>
          <button className={styles.menuIcon} aria-label="Menu">
            <FaBars />
          </button>
          <button className={styles.editBtn}>Edit</button>
        </div>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>
            A
            <span className={styles.verified}>
              <FaCheck className={styles.verifiedIcon} />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.profileName}>ABIMBOLA</div>
      <div className={styles.profileEmail}>abims2642@gmail.com</div>
      <div className={styles.menuList}>
        <div className={styles.menuItem}>
          <FaUser className={styles.menuIconLeft + ' ' + styles.iconChurchGreen} />
          <span>My Profile</span>
          <FaChevronRight className={styles.menuArrow} />
        </div>
        <div className={styles.menuItem}>
          <FaEnvelope className={styles.menuIconLeft + ' ' + styles.iconChurchGreen} />
          <span>Messages</span>
          <span className={styles.badge}>2</span>
          <FaChevronRight className={styles.menuArrow} />
        </div>
        <div className={styles.menuItem}>
          <FaCog className={styles.menuIconLeft + ' ' + styles.iconChurchGreen} />
          <span>Settings</span>
          <FaChevronRight className={styles.menuArrow} />
        </div>
        <div className={styles.menuItem}>
          <FaFileAlt className={styles.menuIconLeft + ' ' + styles.iconChurchGreen} />
          <span>Terms & Privacy Policy</span>
          <FaChevronRight className={styles.menuArrow} />
        </div>
      </div>
      <button className={styles.logout}>
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
}
