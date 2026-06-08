import { useState } from "react";
import styled from "styled-components";
import gatosBase from "../data/Gatos.json";
import useLocalStorage from "../data/LocalStorage";

import Card from "../components/Card.jsx";
import Grid from "../components/Grid.jsx";
import Texto from "../components/Texto.jsx";
import FormularioVisita from "../components/FormularioVisita.jsx";

function calcularIdade(nascimento) {
  if (!nascimento) return "?";
  const hoje = new Date();
  const nasc = new Date(nascimento);
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const mes = hoje.getMonth() - nasc.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) idade--;
  return idade;
}
const ContainerGatil = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
const NavAbas = styled.div`
  display: flex;
  justify-content: center;
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
function Gatil() {
  const [edicoes] = useLocalStorage("cafemiau_gatos_edicoes", {});
  const [extras] = useLocalStorage("cafemiau_gatos_extras", []);
  const [abaAtiva, setAbaAtiva] = useState("moradores");

  const gatos = [
    ...gatosBase.map((g) => ({ ...g, ...(edicoes[g.id] || {}) })),
    ...extras,
  ];
  const residentes = gatos.filter((g) => g.status === "residente");
  const adotados = gatos.filter((g) => g.status === "adotado");

  const renderCard = (gato) => {
    const idade = calcularIdade(gato.nascimento);
    const textoBotaoCard =
      gato.status === "adotado" ? "Ver História 🏡" : "Adotar 🐾";

    return (
      <Card
        key={gato.id}
        imagem={gato.foto}
        titulo={gato.nome}
        descricao={`${idade} anos — ${gato.descricao}`}
        textoBotao={textoBotaoCard}
        onBotaoClick={() => alert(`Você clicou no(a) ${gato.nome}!`)}
      />
    );
  };
  return (
    <ContainerGatil>
      <h2>Gatil 🐾</h2>
      <Texto style={{ textAlign: "center", marginBottom: "30px" }}>
        Conheça os felinos que fazem o CafeMiau ser especial.
      </Texto>
      <NavAbas>
        <BotaoAba
          $ativa={abaAtiva === "moradores"}
          onClick={() => setAbaAtiva("moradores")}
        >
          Subpágina: Moradores ({residentes.length})
        </BotaoAba>
        <BotaoAba
          $ativa={abaAtiva === "adotados"}
          onClick={() => setAbaAtiva("adotados")}
        >
          Subpágina: Já Adotados ({adotados.length})
        </BotaoAba>
      </NavAbas>
      {abaAtiva === "moradores" ? (
        <Grid style={{ justifyItems: "center" }}>
          {residentes.map(renderCard)}
        </Grid>
      ) : (
        <Grid style={{ justifyItems: "center" }}>
          {adotados.map(renderCard)}
        </Grid>
      )}
      <FormularioVisita />
    </ContainerGatil>
  );
}
export default Gatil;
