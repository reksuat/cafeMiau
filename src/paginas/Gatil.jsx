import { useState } from "react";
import styled from "styled-components";
import gatosBase from "../data/Gatos.json";
import useLocalStorage from "../data/LocalStorage";

import JanelaSobreposta from "../components/JanelaSobreposta.jsx";
import Botao from "../components/Botao.jsx";
import ListaGatos from "../components/ListaGatos.jsx";
import DetalhesGato from "../components/DetalhesGato.jsx";
import FormularioVisita from "../components/FormularioVisita.jsx";
import { calcularIdade } from "../util/CalcularIdade.jsx";
import IntroducaoGatil from "../components/IntroducaoGatil.jsx";
const ContainerGatil = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 12px;
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
function Gatil() {
  const [edicoes] = useLocalStorage("cafemiau_gatos_edicoes", {});
  const [extras] = useLocalStorage("cafemiau_gatos_extras", []);
  const [abaAtiva, setAbaAtiva] = useState("moradores");
  const [gatoDescricao, setGatoDescricao] = useState(null);
  const [janela, setJanela] = useState(false);
  //guarda alterações feitas nos gatos, status de edição e gatos novos adicionados, guarda no localStorage
  const gatos = [
    ...gatosBase.map((g) => ({ ...g, ...(edicoes[g.id] || {}) })),
    ...extras,
  ];
  const residentes = gatos.filter((g) => g.status === "residente");
  const adotados = gatos.filter((g) => g.status === "adotado");

  return (
    <ContainerGatil>
      <IntroducaoGatil setJanela={setJanela} />
      <NavAbas>
        <BotaoAba
          $ativa={abaAtiva === "moradores"}
          onClick={() => setAbaAtiva("moradores")}
        >
          Moradores ({residentes.length})
        </BotaoAba>
        <BotaoAba
          $ativa={abaAtiva === "adotados"}
          onClick={() => setAbaAtiva("adotados")}
        >
          Já Adotados ({adotados.length})
        </BotaoAba>
      </NavAbas>
      <ListaGatos
        gatos={abaAtiva === "moradores" ? residentes : adotados}
        onSelecionar={setGatoDescricao}
      />
      {gatoDescricao && (
        <DetalhesGato
          gato={gatoDescricao}
          idade={calcularIdade(gatoDescricao.nascimento)}
          onFechar={() => setGatoDescricao(null)}
        />
      )}
      {janela && (
        <JanelaSobreposta onFechar={() => setJanela(false)}>
          <FormularioVisita />
        </JanelaSobreposta>
      )}
    </ContainerGatil>
  );
}
export default Gatil;
