"use client";

import { Home, Calendar, MessageCircle, BookOpen, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./BootmNav.module.css";

const navItems = [
  { icon: Home, label: "Início" },
  { icon: Calendar, label: "Eventos" },
  { icon: MessageCircle, label: "Mensagens" },
  { icon: BookOpen, label: "Panfleto" },
  { icon: Settings, label: "Config." },
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
            type="button"
            onClick={() => handleNavClick(i)}
            className={`${styles.navButton} ${active === i ? styles.active : ""}`.trim()}
            aria-current={active === i ? "page" : undefined}
            aria-label={item.label}
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
