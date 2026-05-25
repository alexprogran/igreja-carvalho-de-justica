import styles from './ProfileEdit.module.css';
import { FaUserEdit, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaPen } from 'react-icons/fa';

export default function ProfileEdit() {
  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <button className={styles.backButton} aria-label="Back">
        <span className={styles.arrowLeft} />
      </button>
      <div className={styles.title}>Edit Profile</div>
      {/* Avatar */}
      <div className={styles.avatarWrapper}>
        <img className={styles.avatar} src="/assets/avatar-placeholder.png" alt="Profile" />
        <div className={styles.avatarEdit}><span>+</span></div>
      </div>
      {/* Form */}
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Full Name</label>
          <div className={styles.inputWrapper}>
            <input type="text" value="Jane Cooper" readOnly />
            <FaPen className={styles.inputIcon} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label>Nickname</label>
          <div className={styles.inputWrapper}>
            <input type="text" value="Jane" readOnly />
            <FaPen className={styles.inputIcon} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <div className={styles.inputWrapper}>
            <input type="email" value="Janeper01@gmail.com" readOnly />
            <FaEnvelope className={styles.inputIcon} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label>Phone</label>
          <div className={styles.inputWrapper}>
            <input type="tel" value="(303) 555-0105" readOnly />
            <FaPhone className={styles.inputIcon} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label>Address</label>
          <div className={styles.inputWrapper}>
            <input type="text" value="UK ,789 Pine Avenue" readOnly />
            <FaMapMarkerAlt className={styles.inputIcon} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label>Occupation</label>
          <div className={styles.inputWrapper}>
            <input type="text" value="Business" readOnly />
            <FaBriefcase className={styles.inputIcon} />
          </div>
        </div>
        <div className={styles.buttonRow}>
          <button type="button" className={styles.discardBtn}>Discard</button>
          <button type="submit" className={styles.saveBtn}>Save</button>
        </div>
      </form>
    </div>
  );
}
