import Botao from "./Botao.jsx";
import Texto from "./Texto.jsx";
import JanelaSobreposta from "./JanelaSobreposta.jsx";

function DetalhesGato({ gato, onFechar, idade }) {
  if (!gato) return null;

  return (
    <JanelaSobreposta onFechar={onFechar}>
      <h2>{gato.nome}</h2>

      <Texto style={{ fontSize: "1rem", marginBottom: "0" }}>
        <span>Idade:</span> {idade}
      </Texto>

      <Texto style={{ fontSize: "1rem", marginBottom: "0" }}>
        <span>Status:</span>{" "}
        {gato.status === "adotado" ? "🏡 Já adotado" : "🏠 Residente do café"}
      </Texto>

      <Texto
        style={{
          fontSize: "1.05rem",
          marginTop: "4px",
          marginBottom: "12px",
        }}
      >
        <span>Descrição:</span> {gato.descricao}
      </Texto>

      <Botao
        onClick={onFechar}
        style={{ width: "60%", marginTop: "5px", alignSelf: "center" }}
      >
        Fechar ×
      </Botao>
    </JanelaSobreposta>
  );
}

export default DetalhesGato;
