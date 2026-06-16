import styled from "styled-components";
import Texto from "../components/Texto";
import EquipeCafeMiau from "../components/EquipeCafeMiau";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 12px;
  }
`;

function Sobre() {
  return (
    <Container>
      <h2>Sobre o CafeMiau</h2>

      <Texto>
        O CafeMiau é um café temático que combina o amor por gatos e café.
        Fundado em 2020, nosso objetivo é criar um espaço acolhedor onde os
        amantes de gatos possam desfrutar de bebidas deliciosas enquanto
        interagem com nossos adoráveis gatinhos disponíveis para adoção.
      </Texto>

      <Texto>
        Além de oferecer um ambiente confortável para nossos clientes, também
        nos dedicamos a promover a adoção responsável de gatos. Todos os nossos
        gatinhos são resgatados e cuidados com muito amor, e estamos sempre em
        busca de lares amorosos para eles.
      </Texto>

      <Texto>
        Venha nos visitar e experimente nossas bebidas exclusivas enquanto faz
        novos amigos felinos!
      </Texto>

      <EquipeCafeMiau />
    </Container>
  );
}

export default Sobre;
