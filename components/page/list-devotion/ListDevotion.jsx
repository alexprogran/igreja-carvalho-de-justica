"use client";

import Image from "next/image";
import Retroced from "@/components/layout/Retroced";
import Kebab from "@/components/layout/kebab-menu/Kebab";
import styles from "./ListDevotion.module.css";

const devocionais = [
  {
    id: 1,
    titulo: "A esperança que sustenta",
    data: "05 de fevereiro de 2025",
    imagem: "/assets/foto_pregador.png",
  },
  {
    id: 2,
    titulo: "O amor que transforma",
    data: "12 de fevereiro de 2025",
    imagem: "/assets/avatar.jpg",
  },
  {
    id: 3,
    titulo: "A fé que vence o medo",
    data: "19 de fevereiro de 2025",
    imagem: "/assets/foto_pregador.png",
  },
];

export default function ListDevotion() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <Retroced title="Devocionais publicadas" href="/criar-devotion" />

        <div className={styles.hero}>
          <p className={styles.kicker}>Painel</p>
          <h2 className={styles.heading}>Devocionais já criadas</h2>
          <p className={styles.description}>
            Veja, edite ou remova as devocionais publicadas em um único painel organizado.
          </p>
        </div>

        <div className={styles.list}>
          {devocionais.map((item) => (
            <article key={item.id} className={styles.itemCard}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.imagem}
                  alt={item.titulo}
                  fill
                  sizes="72px"
                  className={styles.image}
                />
              </div>

              <div className={styles.textBlock}>
                <h3 className={styles.itemTitle}>{item.titulo}</h3>
                <p className={styles.itemDate}>{item.data}</p>
              </div>

              <div className={styles.actions}>
                <Kebab
                  nome={`Ações para ${item.titulo}`}
                  items={["Visualizar", "Editar", "Excluir"]}
                  background={false}
                />
              </div>


              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
