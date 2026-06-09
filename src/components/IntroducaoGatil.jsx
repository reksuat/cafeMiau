import Texto from "./Texto";
import Botao from "./Botao.jsx";
import styled from "styled-components";

const Introducao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: 30px auto 10px auto;
  max-width: 600px;
  text-align: center;
`;
function IntroducaoGatil({ setJanela }) {
  return (
    <Introducao>
      <h1>Gatil 🐾</h1>
      <Texto>
        Quer conhecer nossos moradores de perto? Reserve seu horário e venha
        aproveitar momentos incriveis.
      </Texto>

      <Botao onClick={() => setJanela(true)} style={{ padding: "12px 35px" }}>
        Quero conhecer!
      </Botao>
    </Introducao>
  );
}
export default IntroducaoGatil;
