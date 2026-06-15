import Botao from "./Botao.jsx";
import Texto from "./Texto.jsx";
import JanelaSobreposta from "./JanelaSobreposta.jsx";

function DetalhesCardapio({ item, onFechar }) {
  if (!item) return null;

  return (
    <JanelaSobreposta onFechar={onFechar}>
      <h2>{item.nome}</h2>

      <Texto style={{ fontSize: "1.2rem", marginBottom: "12px", color: "#d4a574" }}>
        R$ {item.preco.toFixed(2)}
      </Texto>

      <Texto
        style={{
          fontSize: "1.05rem",
          marginTop: "4px",
          marginBottom: "12px",
        }}
      >
        <span>Descrição:</span> {item.descricao}
      </Texto>
    </JanelaSobreposta>
  );
}

export default DetalhesCardapio;
