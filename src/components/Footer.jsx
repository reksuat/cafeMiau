import styled from "styled-components";
import Texto from "./Texto";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.surface};
  border-top: 3px solid ${(props) => props.theme.highlight};
  padding: 15px;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const SectionTitle = styled.h4`
  color: ${(props) => props.theme.text};
  font-family: "Arial", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 12px;
  margin: 0 0 12px 0;
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 15px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <SectionTitle>📍 Endereço</SectionTitle>
          <Texto style={{ textAlign: "center", margin: 0, fontSize: "0.9rem" }}>
            Rua dos Gatos, 123
            <br />
            Ponta Grossa, PR
          </Texto>
        </div>

        <div>
          <SectionTitle>🕐 Horário</SectionTitle>
          <Texto style={{ textAlign: "center", margin: 0, fontSize: "0.9rem" }}>
            Seg-Sex: 08h-19h
            <br />
            Sáb-Dom: 09h-20h
          </Texto>
        </div>

        <div>
          <SectionTitle>📞 Contato</SectionTitle>
          <Texto style={{ textAlign: "center", margin: 0, fontSize: "0.9rem" }}>
            (42) 9999-8888
            <br />
            contato@cafemiau.com.br
          </Texto>
        </div>
      </FooterContent>

      <Copyright>
        <Texto style={{ textAlign: "center", margin: 0, fontSize: "0.85rem" }}>
          &copy; 2026 CafeMiau. Todos os direitos reservados.
        </Texto>
      </Copyright>
    </FooterContainer>
  );
}
export default Footer;
