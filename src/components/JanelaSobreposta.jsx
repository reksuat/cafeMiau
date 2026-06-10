import styled from "styled-components";
import Botao from "./Botao.jsx";

const BotaoFechar = styled(Botao)`
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 50%;
  align-self: flex-end;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 2px solid ${(p) => p.theme.border};
  color: ${(p) => p.theme.text};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
  box-shadow: 0px 10px 20px ${(p) => p.theme.border};

  @media (max-width: 480px) {
    width: 100%;
    max-height: 85vh;
    padding: 20px;
  }
`;

function JanelaSobreposta({ children, onFechar }) {
  return (
    <Fundo onClick={onFechar}>
      <Container onClick={(e) => e.stopPropagation()}>
        {children}
        <BotaoFechar onClick={onFechar}>×</BotaoFechar>
      </Container>
    </Fundo>
  );
}

export default JanelaSobreposta;
