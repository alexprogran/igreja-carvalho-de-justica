import Retroced from "@/components/layout/Retroced";
import styles from "./CriarDevotion.module.css";

export default function CriarDevotion() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <Retroced title="Criar Devocional" />

        <div className={styles.hero}>
          <p className={styles.kicker}>Mensagens</p>
          <h2 className={styles.heading}>Escreva um novo devocional para a comunidade</h2>
          <p className={styles.description}>
            Monte uma mensagem curta, clara e inspiradora para compartilhar com a igreja.
          </p>
        </div>

        <div className={styles.formPreview}>
          <label className={styles.field}>
            <span className={styles.label}>Título</span>
            <div className={styles.inputLike}>Uma palavra para hoje</div>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Referência bíblica</span>
            <div className={styles.inputLike}>Salmos 23:1</div>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Mensagem</span>
            <div className={styles.textAreaLike}>
              O Senhor é o meu pastor; nada me faltará. Caminhe com fé e confiança neste dia.
            </div>
          </label>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.primaryButton}>
            Publicar devocional
          </button>
          <p className={styles.helperText}>Rascunho visual pronto para integração com a API.</p>
        </div>
      </div>
    </section>
  );
}
