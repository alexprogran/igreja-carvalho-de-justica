import styles from './ProfileUser.module.css';
import { FaBell, FaGift, FaHistory, FaUserEdit, FaMapMarkerAlt, FaQuestionCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

export default function ProfileUser() {
  return (
    <div className={styles.container}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <button className={styles.iconButton} aria-label="Back">
          <span className={styles.arrowLeft} />
        </button>
        <span className={styles.profileTitle}>Profile</span>
        <button className={styles.iconButton} aria-label="Settings">
          <FaCog size={22} />
        </button>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatar} src="/assets/avatar-placeholder.png" alt="Profile" />
        </div>
        <div className={styles.profileName}>Jane Cooper</div>
        <div className={styles.profileEmail}>Janeper01@gmail.com</div>
        <div className={styles.quickActions}>
          <div className={styles.quickAction}>
            <FaBell size={20} />
            <span>Notification</span>
          </div>
          <div className={styles.quickAction}>
            <FaGift size={20} />
            <span>Voucher</span>
          </div>
          <div className={styles.quickAction}>
            <FaHistory size={20} />
            <span>History</span>
          </div>
        </div>
      </div>
      {/* Options List */}
      <div className={styles.optionsList}>
        <div className={styles.optionItem}>
          <FaUserEdit className={styles.optionIcon} />
          <span>Edit Profile</span>
          <IoChevronForward className={styles.chevron} />
        </div>
        <div className={styles.optionItem}>
          <FaMapMarkerAlt className={styles.optionIcon} />
          <span>Address Management</span>
          <IoChevronForward className={styles.chevron} />
        </div>
        <div className={styles.optionItem}>
          <FaQuestionCircle className={styles.optionIcon} />
          <span>Help & Support</span>
          <IoChevronForward className={styles.chevron} />
        </div>
        <div className={styles.optionItem}>
          <FaCog className={styles.optionIcon} />
          <span>Setting</span>
          <IoChevronForward className={styles.chevron} />
        </div>
        <div className={styles.optionItemLogout}>
          <FaSignOutAlt className={styles.optionIcon} />
          <span>Log out</span>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className={styles.bottomNav}>
        <span className={styles.navIcon} />
        <span className={styles.navIcon} />
        <span className={styles.navIcon} />
        <span className={styles.navIconActive} />
      </div>
    </div>
  );
}
