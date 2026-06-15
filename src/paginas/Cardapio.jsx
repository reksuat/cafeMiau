import { useState } from "react";
import styled from "styled-components";
import cardapioData from "../data/Cardapio.json";
import Card from "../components/Card.jsx";
import Grid from "../components/Grid.jsx";
import DetalhesCardapio from "../components/DetalhesCardapio.jsx";
import JanelaSobreposta from "../components/JanelaSobreposta.jsx";

const ContainerCardapio = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const IntroCardapio = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${(p) => p.theme.text};
  }

  p {
    font-size: 1.1rem;
    color: ${(p) => p.theme.textSecondary};
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
`;

const NavAbas = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

const BotaoAba = styled.button`
  background-color: ${(p) => (p.$ativa ? p.theme.highlight : "transparent")};
  color: ${(p) => (p.$ativa ? p.theme.bg : p.theme.text)};
  border: 2px solid ${(p) => p.theme.highlight};
  border-radius: 25px;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: ${(p) =>
      p.$ativa ? p.theme.highlight : "rgba(0,0,0,0.03)"};
  }
`;

const categoriasMap = {
  "bebidas-quentes": "☕ Bebidas Quentes",
  "bebidas-geladas": "🧊 Bebidas Geladas",
  doces: "🍰 Doces",
  salgados: "🥐 Salgados",
  vegano: "🌱 Vegano",
};

function Cardapio() {
  const [abaAtiva, setAbaAtiva] = useState("bebidas-quentes");
  const [itemDetalhes, setItemDetalhes] = useState(null);

  // Agrupa itens por categoria
  const itensPorCategoria = {};
  cardapioData.forEach((item) => {
    if (!itensPorCategoria[item.categoria]) {
      itensPorCategoria[item.categoria] = [];
    }
    itensPorCategoria[item.categoria].push(item);
  });

  const itensAtuais = itensPorCategoria[abaAtiva] || [];

  return (
    <ContainerCardapio>
      <IntroCardapio>
        <h1>☕ Nosso Cardápio</h1>
        <p>Confira nossos deliciosos cafés e lanches feitos com amor!</p>
      </IntroCardapio>

      <NavAbas>
        {Object.entries(categoriasMap).map(([key, label]) => (
          <BotaoAba
            key={key}
            $ativa={abaAtiva === key}
            onClick={() => setAbaAtiva(key)}
          >
            {label}
          </BotaoAba>
        ))}
      </NavAbas>

      <Grid style={{ justifyItems: "center" }}>
        {itensAtuais.map((item) => (
          <Card
            key={item.id}
            imagem={item.foto}
            titulo={item.nome}
            descricao={`R$ ${item.preco.toFixed(2)}`}
            textoBotao="Saiba mais 🍽️"
            onBotaoClick={() => setItemDetalhes(item)}
          />
        ))}
      </Grid>

      {itemDetalhes && (
        <DetalhesCardapio
          item={itemDetalhes}
          onFechar={() => setItemDetalhes(null)}
        />
      )}
    </ContainerCardapio>
  );
}

export default Cardapio;
