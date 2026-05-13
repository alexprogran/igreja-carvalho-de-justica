"use client";

import styles from "./Panfleto.module.css";
import Ingaje from "../Ingaje/Ingaje";
import VideoPanfleto from "./VideoPanfleto";

const DEFAULT_PANFELTO = {
  capa: "",
  imageFundo: "/background_pan.png",
  texto:
    "**O Deserto: Lugar de Provação e Encontro com Deus**\n\nO deserto, na caminhada espiritual, não é apenas um tempo de dificuldade, mas um período de profunda transformação. É nesse ambiente, muitas vezes marcado pela solidão, silêncio e desafios, que somos levados a depender mais de Deus e a ouvir a Sua voz com maior clareza.\n\nNa Palavra de Deus, vemos que o deserto não é um fim, mas um processo. O povo de Israel passou pelo deserto para aprender a confiar no Senhor:\n*\"Recorde-se de como o Senhor, o seu Deus, o conduziu por todo o caminho no deserto... para humilhá-lo e pô-lo à prova, a fim de conhecer suas intenções\"* — Deuteronômio 8:2.\n\nAssim também acontece conosco. As experiências difíceis nos moldam, quebram o orgulho e fortalecem nossa fé. Em meio à escassez, aprendemos que Deus é suficiente:\n*\"Ele o humilhou, deixando-o passar fome, mas depois o sustentou com o maná... para mostrar-lhe que nem só de pão viverá o homem, mas de toda palavra que procede da boca do Senhor\"* — Deuteronômio 8:3.\n\nO deserto também é lugar de encontro. Deus nos atrai para falar ao nosso coração:\n*\"Portanto, eu a atrairei e a levarei para o deserto, e lhe falarei ao coração\"* — Oséias 2:14.\n\nMesmo quando tudo parece difícil, Deus está presente. Ele sustenta, guia e fortalece:\n*\"Os que esperam no Senhor renovam as suas forças... caminham e não se cansam\"* — Isaías 40:31.\n\nSe você está vivendo um “deserto”, lembre-se: não é abandono, é preparação. Deus está trabalhando em você, formando caráter, fortalecendo sua fé e te conduzindo para algo maior.\n\n**O deserto não é o seu destino final — é o caminho onde Deus se revela.**",
  tempoExibicaoMs: 8000,
  ctaTexto: "Acesse nossa plataforma",
};

const normalizePanfeltoFromApi = (apiData = {}) => ({
  capa: apiData.capa || apiData.cover || apiData.image || DEFAULT_PANFELTO.capa,
  imageFundo:
    apiData.imageFundo || apiData.background || apiData.backgroundImage || DEFAULT_PANFELTO.imageFundo,
  texto: apiData.texto || apiData.text || apiData.description || DEFAULT_PANFELTO.texto,
  tempoExibicaoMs:
    typeof apiData.tempoExibicaoMs === "number"
      ? apiData.tempoExibicaoMs
      : DEFAULT_PANFELTO.tempoExibicaoMs,
  ctaTexto: apiData.ctaTexto || apiData.ctaLabel || DEFAULT_PANFELTO.ctaTexto,
});

  
const Panfelto = ({
  capa = DEFAULT_PANFELTO.capa,
  imageFundo = DEFAULT_PANFELTO.imageFundo,
  texto = DEFAULT_PANFELTO.texto,
  tempoExibicaoMs = DEFAULT_PANFELTO.tempoExibicaoMs,
  ctaTexto = DEFAULT_PANFELTO.ctaTexto,
  apiData,
}) => {
  const dados = apiData
    ? normalizePanfeltoFromApi(apiData)
    : { capa, imageFundo, texto, tempoExibicaoMs, ctaTexto };

  return (
    <section className={styles.section} style={{ backgroundImage: `url(${dados.imageFundo})` }} aria-label="Panfleto da mensagem">
      <article className={styles.card} style={{ backgroundImage: `url(${dados.capa})` }}>
        <div className={styles.content}>
          <p className={styles.texto}>{dados.texto}</p>
        </div>

        <div className={styles.bottomArea}>
          <VideoPanfleto
            title="Deus é fiel o tempo todo"
            subtitle="Temos algo de Deus para você!"
          />

          {/* <button type="button" className={styles.ctaButton}>
            {dados.ctaTexto}
          </button> */}

          <div className={styles.ingajeWrap}>
            <Ingaje vertical={false} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Panfelto;
