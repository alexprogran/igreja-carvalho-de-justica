import React from "react";
import styles from "./Profile.module.css";
import { FaUser, FaEnvelope, FaCog, FaFileAlt, FaSignOutAlt, FaCamera, FaBars, FaChevronRight, FaPen } from "react-icons/fa";

function Accordion() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.menuItem} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
        <FaUser className={styles.menuIconLeft} style={{ color: '#fff', marginRight: 12 }} />
        <span style={{ fontWeight: 500 }}>Meus dados</span>
        <FaChevronRight className={styles.menuArrow} style={{ marginLeft: 'auto', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
      </div>
      {open && (
        <div style={{ marginTop: 12, width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: '#b0b0b0', fontSize: '0.97rem' }}>maria@email.com</span>
            <FaPen style={{ color: '#b0b0b0', marginLeft: 'auto', cursor: 'pointer' }} title="Editar email" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#b0b0b0', fontSize: '0.97rem' }}>Telefone: 99999-99999</span>
            <FaPen style={{ color: '#b0b0b0', marginLeft: 'auto', cursor: 'pointer' }} title="Editar telefone" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.headerWrapper}>
        <svg className={styles.headerSvg} viewBox="0 0 375 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* <path d="M0 0H375V120C375 120 312.5 160 187.5 160C62.5 160 0 120 0 120V0Z" fill="hsl(var(--church-green))"/> */}
          <defs>
            <linearGradient id="profileHeaderGreen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(111, 127, 74, 0.8)" />
              <stop offset="100%" stopColor="rgba(155, 204, 85, 0.8)" />
            </linearGradient>
          </defs>
          <path d="M0 0H375V120C375 120 312.5 160 187.5 160C62.5 160 0 120 0 120V0Z" fill="url(#profileHeaderGreen)" />

        </svg>        
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>
            M
            <span className={styles.verified}>
              <FaCamera className={styles.verifiedIcon} />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.profileName}>Maria</div>
      <div className={styles.profileEmail}>maria@gmail.com</div>
      <div className={styles.menuList}>
        <Accordion />
        {/* <div className={styles.menuItem}>
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
        </div> */}
      </div>
      <button className={styles.logout}>
        <FaSignOutAlt /> Sair
      </button>
    </div>
  );
}
