"use client";

import { useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import styles from "./kebab.module.css";

export default function Kebab({
  nome = "Ações",
  items = ["Visualizar", "Editar", "Excluir"],
  background = false,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <button
        type="button"
        className={styles.trigger}
        aria-label={nome}
        onClick={() => setOpen((current) => !current)}
        style={{ background: background ? "#f3f4f6" : "transparent" }}
      >
        <FiMoreVertical size={16} />
      </button>

      {open ? (
        <div
          className={styles.menu}
          role="menu"
          aria-label={nome}
          style={{ background: background ? "#ffffff" : "rgba(255, 255, 255, 0.92)" }}
        >
          {items.map((item) => (
            <button key={item} type="button" className={styles.menuButton} role="menuitem">
              {item}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
