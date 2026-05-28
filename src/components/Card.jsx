import styled from "styled-components";
import Botao from "./Botao";

export const CardContainer = styled.div`
  background-color: ${(p) => p.theme.surface};
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 12px;
  padding: 20px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

function Card({ imagem, titulo, descricao, textoBotao, onBotaoClick }) {
  return (
    <CardContainer>
      <CardImage src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <Botao onClick={onBotaoClick}>{textoBotao}</Botao>
    </CardContainer>
  );
}

export default Card;
