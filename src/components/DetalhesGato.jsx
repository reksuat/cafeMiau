import styled from "styled-components";
import Botao from "./Botao.jsx";
import Texto from "./Texto.jsx";

const Fundo = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  z-index: 2000;
`;

const Container = styled.div`
  background-color: ${(p) => p.theme.surface};
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 16px;
  padding: 24px;
  width: min(92vw, 400px);
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 10px 30px ${(p) => p.theme.shadow};

  @media (max-width: 480px) {
    width: 100%;
    max-height: 85vh;
    padding: 20px;
  }
`;

function DetalhesGato({ gato, onFechar, idade }) {
  if (!gato) return null;

  return (
    <Fundo onClick={onFechar}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h2 style={{ color: (p) => p.theme.highlight, margin: "0 0 5px 0" }}>
          {gato.nome}
        </h2>

        <Texto style={{ fontSize: "1rem", marginBottom: "0" }}>
          <strong>Idade:</strong> {idade} anos
        </Texto>

        <Texto style={{ fontSize: "1rem", marginBottom: "0" }}>
          <strong>Status:</strong>{" "}
          {gato.status === "adotado" ? "🏡 Já adotado" : "🏠 Residente do café"}
        </Texto>

        <Texto
          style={{
            fontSize: "1.05rem",
            marginTop: "4px",
            marginBottom: "12px",
          }}
        >
          <strong>Descrição:</strong> {gato.descricao}
        </Texto>

        <Botao onClick={onFechar} style={{ width: "100%", marginTop: "5px" }}>
          Fechar ×
        </Botao>
      </Container>
    </Fundo>
  );
}

export default DetalhesGato;
