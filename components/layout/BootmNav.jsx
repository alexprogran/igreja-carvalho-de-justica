"use client";

import { Home, Calendar, MessageCircle, BookOpen, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./BootmNav.module.css";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Calendar, label: "Events" },
  { icon: MessageCircle, label: "Messages" },
  { icon: BookOpen, label: "Panfleto" },
  { icon: Settings, label: "Settings" },
];

const BootmNav = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const handleNavClick = (index) => {
    setActive(index);

    if (index === 0) {
      router.push("/login");
      return;
    }

    if (index === 3) {
      router.push("/panfleto");
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {navItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(i)}
            className={`${styles.navButton} ${active === i ? styles.active : ""}`.trim()}
          >
            <item.icon className={styles.icon} />
            <span className={styles.label}>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BootmNav;
