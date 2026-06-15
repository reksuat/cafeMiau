import styled from "styled-components";
import Botao from "./Botao";

export const CardContainer = styled.div`
  background-color: ${(p) => p.theme.surface};
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 100%;
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
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.4s ease;
    box-shadow: 6px 8px 16px ${(p) => p.theme.shadow};
  }

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

function Card({
  imagem,
  titulo,
  children,
  descricao,
  textoBotao,
  onBotaoClick,
}) {
  return (
    <CardContainer>
      <CardImage src={imagem} alt={titulo} />
      <h3
        style={{
          margin: "10px 0 6px 0",
          fontSize: "1.1rem",
          minHeight: "2.4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {titulo}
      </h3>
      <p
        style={{
          margin: "0 0 12px 0",
          fontSize: "0.95rem",
          lineHeight: "1.5",
          flexGrow: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {descricao}
      </p>
      {children ? (
        children
      ) : (
        <Botao
          onClick={onBotaoClick}
          style={{ width: "100%", padding: "10px 20px" }}
        >
          {textoBotao}
        </Botao>
      )}
    </CardContainer>
  );
}

export default Card;
