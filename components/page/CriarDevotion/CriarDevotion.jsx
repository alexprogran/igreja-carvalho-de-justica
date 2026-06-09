import Retroced from "@/components/layout/Retroced";
import styles from "./CriarDevotion.module.css";
import FormPublic from "@/components/form/formPublic/FormPublic";
export default function CriarDevotion() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <Retroced title="Criar Devocional" />

        <div className={styles.hero}>
          <p className={styles.kicker}>Sobre a Mensagem</p>
          <h2 className={styles.heading}>Será um complemento do vídeo.</h2>
          <p className={styles.description}>
            Monte uma reflexão breve, clara que realce o que foi abordado no vídeo.
          </p>
        </div>        
        <FormPublic
          campo={[
            { name: "versiculo", label: "Versículo", placeholder: 'Exemplo: "João 3:16"', type: "text" },
            { name: "conteudo",label: "Conteúdo do Versículo", placeholder:'Exemplo: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."', fullscreen: true, type: "textarea", rows: 6 },
            { name: "mensagem", label: "Mensagem", placeholder: 'Exemplo: "O amor de Deus não foi demonstrado apenas por palavras, mas por entrega. João 3:16 revela a maior prova de amor já oferecida à humanidade: Deus entregou Seu próprio Filho para nos dar vida eterna. Essa passagem nos lembra que, mesmo em meio às falhas, medos e dificuldades, existe um amor que permanece constante..."', fullscreen: true, type: "textarea", rows: 6 },
            {name: "data", label: "Data de publicação", placeholder: "Data de publicação", type: "date"},
            { name: "video", label: "Vídeo", placeholder: "Vídeo", type: "video", accept: "video/*" }
          ]}
          buttonText="Publicar devocional"
        />
      </div>
     
    </section>
  );
}
