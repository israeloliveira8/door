import styles from "../styles/Porta.module.css";
import PortaModel from "../model/porta";
import Presente from "../components/Presente";

interface PortaProps {
  porta: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export default function Porta(props: PortaProps) {
  const porta = props.porta;
  const selecionada =
    porta.selecionada && !porta.aberta ? styles.selecionada : "";

  const alternarSelecao = (e) => {
    console.log("chama");
    console.log(e);
    return props.onChange(porta.alternarSelecao());
  };
  const abrir = (e) => {
    e.stopPropagation();
    props.onChange(porta.abrir());
  };

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    );
  }

  return (
    <div
      className={styles.area}
      style={{ color: "white" }}
      onClick={alternarSelecao}
    >
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ?
          renderizarPorta() : porta.temPresente ? <Presente/> : false}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
