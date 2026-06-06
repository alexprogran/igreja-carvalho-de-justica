import styles from './ProfileUser.module.css';
import Image from 'next/image';
import { FaUserEdit, FaCog } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

/**
 * @param {Object}  props
 * @param {string}  [props.userName]   - Nome completo do usuário (virá da API)
 * @param {string}  [props.userEmail]  - E-mail do usuário (virá da API)
 * @param {string}  [props.userImage]  - URL da foto de perfil (virá da API; opcional)
 */
export default function ProfileUser({
  userName = "",
  userEmail = "",
  userImage = "",
}) {
  const initial = userName.trim().charAt(0).toUpperCase() || null;

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <div className={styles.topSection}>        
        <div className={styles.avatarWrapper}>
          {userImage ? (
            <Image className={styles.avatar} src={userImage} alt={userName || "Foto de perfil"} fill sizes="clamp(4.2rem, 18vw, 6.2rem)" />
          ) : (
            <span className={styles.avatarInitial} aria-hidden="true">
              {initial}
            </span>
          )}
        </div>
        <div className={styles.profileName}>{userName || "—"}</div>
        <div className={styles.profileEmail}>{userEmail || "—"}</div>
        {/* <div className={styles.quickActions}>
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
        </div> */}
      </div>
      {/* Options List */}
      <div className={styles.optionsList}>
        <div className={styles.optionItem}>
          <FaUserEdit className={styles.optionIcon} />
          <span>Editar Perfil</span>
          <IoChevronForward className={styles.chevron} />
        </div>        
        <div className={styles.optionItem}>
          <FaCog className={styles.optionIcon} />
          <span>Configurações</span>
          <IoChevronForward className={styles.chevron} />
        </div>
        <div className={styles.optionItemLogout}>
          
          <span>Sair</span>
        </div>
      </div>    
    </div>
  );
}
