import styles from "./HeaderSection.module.css";

const DEFAULT_HEADER_SECTION = {
  versiculo: "Lucas 10:27",
  pregador: "Alex Neves Da Silva",
  foto: "/assets/avatar.jpg",
};

const HeaderSection = ({
  versiculo = DEFAULT_HEADER_SECTION.versiculo,
  pregador = DEFAULT_HEADER_SECTION.pregador,
  foto = DEFAULT_HEADER_SECTION.foto,
  data,
}) => {
  const versiculoAtual = data?.versiculo ?? versiculo;
  const pregadorAtual = data?.pregador ?? pregador;
  const fotoAtual = data?.foto ?? foto;

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img
          src={fotoAtual}
          alt={`Foto de ${pregadorAtual}`}
          className={styles.avatar}
          width={48}
          height={48}
        />
        <div>
          <h1 className={styles.name}>{pregadorAtual}</h1>
          <p className={styles.welcome}>{versiculoAtual}</p>
          
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
