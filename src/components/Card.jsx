import styled from "styled-components";
import Botao from "./Botao";

export const CardContainer = styled.div`
  background-color: ${(p) => p.theme.surface};
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 3px 4px 12px ${(p) => p.theme.shadow};
  box-sizing: border-box;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  @media (max-width: 480px) {
    padding: 14px;
    width: min(100%, 280px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  height: auto;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 480px) {
    border-radius: 6px;
  }
`;

function Card({ imagem, titulo, descricao, textoBotao, onBotaoClick }) {
  return (
    <CardContainer>
      <CardImage src={imagem} alt={titulo} />
      <h3 style={{ margin: "5px 0" }}>{titulo}</h3>
      <p
        style={{ margin: "0 0 10px 0", fontSize: "0.9rem", lineHeight: "1.4" }}
      >
        {descricao}
      </p>
      <Botao
        onClick={onBotaoClick}
        style={{ marginTop: "auto", padding: "10px 20px" }}
      >
        {textoBotao}
      </Botao>
    </CardContainer>
  );
}

export default Card;
