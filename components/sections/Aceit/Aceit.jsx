import Button from "@/components/layout/Button";
import LegalSection from "@/components/sections/LegalSection";
import styles from "./Aceit.module.css";

export default function Aceit({ onAccept, onReject, introText = "Ao continuar" }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.sheet}>
        <div className={styles.legalWrap}>
          <LegalSection introText={introText} />
        </div>

        <div className={styles.buttonWrap}>
          <Button
            className={styles.button}
            type="button"
            nome="Concordar e Segue"
            backend="#000000"
            textColor="#ffffff"
            borderColor="#000000"
            width="100%"
            onClick={onAccept}
          />
          <Button
            className={styles.button}
            type="button"
            nome="Regitar e Voltar"
            backend="transparent"
            textColor="#000000"
            borderColor="#c0c0c0"
            width="100%"
            onClick={onReject}
          />
        </div>
      </div>
    </div>
  );
}