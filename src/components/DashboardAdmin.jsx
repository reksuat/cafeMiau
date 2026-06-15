import styled from "styled-components";
import gatosBase from "../data/Gatos.json";
import cardapioBase from "../data/Cardapio.json";
import useLocalStorage from "../data/LocalStorage";

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  color: ${(p) => p.theme.text};

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const GridEstatisticas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const CardEstatistica = styled.div`
  background: linear-gradient(135deg, ${(p) => p.theme.surface} 0%, ${(p) => p.theme.bg} 100%);
  border: 2px solid ${(p) => p.theme.highlight};
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  box-shadow: 3px 4px 12px ${(p) => p.theme.shadow};
`;

const NumeroGrande = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(p) => p.theme.highlight};
  margin-bottom: 10px;
`;

const LabelEstatistica = styled.p`
  font-size: 1rem;
  color: ${(p) => p.theme.text};
  margin: 0;
  font-weight: 500;
`;

const SecaoReservas = styled.div`
  margin-top: 40px;
  padding: 20px 0;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: ${(p) => p.theme.text};
  }
`;

const TabelaReservas = styled.div`
  background-color: ${(p) => p.theme.surface};
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 3px 4px 12px ${(p) => p.theme.shadow};
`;

const LinhaTabelaHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 15px;
  padding: 15px 20px;
  background-color: ${(p) => p.theme.highlight};
  color: ${(p) => p.theme.bg};
  font-weight: bold;
  text-align: left;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const LinhaTabela = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 15px;
  padding: 15px 20px;
  border-bottom: 1px solid ${(p) => p.theme.border};
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${(p) => p.theme.bg};
  }
`;

const MensagemVazio = styled.p`
  text-align: center;
  color: ${(p) => p.theme.textSecondary};
  padding: 40px 20px;
  font-size: 1.1rem;
`;

function DashboardAdmin() {
  const [edicoes] = useLocalStorage("cafemiau_gatos_edicoes", {});
  const [extras] = useLocalStorage("cafemiau_gatos_extras", []);
  const [cardapioEdicoes] = useLocalStorage("cafemiau_cardapio_edicoes", {});
  const [cardapioExtras] = useLocalStorage("cafemiau_cardapio_extras", []);
  const [reservas] = useLocalStorage("cafemiau_reservas", []);

  // Contar gatos
  const totalGatos =
    gatosBase.length + extras.filter((g) => !gatosBase.some((base) => base.id === g.id)).length;

  // Contar itens cardápio
  const totalItensCardapio =
    cardapioBase.length +
    cardapioExtras.filter((i) => !cardapioBase.some((base) => base.id === i.id)).length;

  // Formatar data
  const formatarData = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  // Ordenar reservas por data decrescente
  const reservasOrdenadas = [...reservas].sort(
    (a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao)
  );

  const ultimasReservas = reservasOrdenadas.slice(0, 5);

  return (
    <DashboardContainer>
      <Titulo>📊 Resumo CafeMiau</Titulo>

      <GridEstatisticas>
        <CardEstatistica>
          <NumeroGrande>🐾 {totalGatos}</NumeroGrande>
          <LabelEstatistica>Gatos no Gatil</LabelEstatistica>
        </CardEstatistica>

        <CardEstatistica>
          <NumeroGrande>☕ {totalItensCardapio}</NumeroGrande>
          <LabelEstatistica>Itens no Cardápio</LabelEstatistica>
        </CardEstatistica>

        <CardEstatistica>
          <NumeroGrande>📅 {reservas.length}</NumeroGrande>
          <LabelEstatistica>Total de Reservas</LabelEstatistica>
        </CardEstatistica>
      </GridEstatisticas>

      <SecaoReservas>
        <h2>📋 Últimas Reservas</h2>
        {ultimasReservas.length > 0 ? (
          <TabelaReservas>
            <LinhaTabelaHeader>
              <div>#</div>
              <div>Nome do Visitante</div>
              <div>Data da Visita</div>
            </LinhaTabelaHeader>
            {ultimasReservas.map((reserva, index) => (
              <LinhaTabela key={reserva.id}>
                <div>{index + 1}</div>
                <div>{reserva.nome}</div>
                <div>{formatarData(reserva.data)}</div>
              </LinhaTabela>
            ))}
          </TabelaReservas>
        ) : (
          <MensagemVazio>Nenhuma reserva registrada ainda. Quando os visitantes fizerem reservas, elas aparecerão aqui! 🐾</MensagemVazio>
        )}
      </SecaoReservas>
    </DashboardContainer>
  );
}

export default DashboardAdmin;
