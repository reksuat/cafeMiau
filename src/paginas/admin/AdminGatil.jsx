import { useState } from "react";
import styled from "styled-components";
import gatosBase from "../../data/Gatos.json";
import useLocalStorage from "../../data/LocalStorage";
import FormularioGato from "../../components/FormularioGato.jsx";
import JanelaSobreposta from "../../components/JanelaSobreposta.jsx";
import ListaGatos from "../../components/ListaGatos.jsx";
import DetalhesGato from "../../components/DetalhesGato.jsx";
import Botao from "../../components/Botao.jsx";
import { calcularIdade } from "../../util/CalcularIdade.jsx";

// Container principal do painel admin
const ContainerAdmin = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const TopoAdmin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 2px solid ${(p) => p.theme.border};
  padding-bottom: 15px;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;
function AdminGatil() {
  const [edicoes, setEdicoes] = useLocalStorage("cafemiau_gatos_edicoes", {});
  const [extras, setExtras] = useLocalStorage("cafemiau_gatos_extras", []);

  const [gatoDescricao, setGatoDescricao] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [gatoParaEditar, setGatoParaEditar] = useState(null);

  const todosGatos = [
    ...gatosBase.map((g) => ({ ...g, ...(edicoes[g.id] || {}) })),
    ...extras,
  ];
  const handleNovoGato = () => {
    setGatoParaEditar(null);
    setModalAberto(true);
  };
  const handleEditarClick = (gato) => {
    setGatoParaEditar(gato);
    setModalAberto(true);
  };
  const handleExcluir = (id, nome) => {
    if (window.confirm(`Tem certeza que deseja remover o(a) ${nome}?`)) {
      // Se for um gato que veio do JSON, nós limpamos a edição dele
      if (gatosBase.some((g) => g.id === id)) {
        const novasEdicoes = { ...edicoes };
        delete novasEdicoes[id];
        setEdicoes(novasEdicoes);
      } else {
        // Se for um gato criado manualmente, removemos do local
        setExtras(extras.filter((g) => g.id !== id));
      }
    }
  };

  const handleSalvarGato = (dadosGato) => {
    if (gatosBase.some((g) => g.id === dadosGato.id)) {
      // Se o gato pertence ao JSON original, salva no objeto de 'edicoes'
      setEdicoes({
        ...edicoes,
        [dadosGato.id]: dadosGato,
      });
    } else if (gatoParaEditar) {
      // Se for um gato criado por você que está sendo EDITADO, atualiza nos 'extras'
      setExtras(extras.map((g) => (g.id === dadosGato.id ? dadosGato : g)));
    } else {
      // Se for um gato COMPLETAMENTE NOVO, adiciona na lista de 'extras'
      setExtras([...extras, dadosGato]);
    }

    // Fecha o modal após concluir
    setModalAberto(false);
  };

  return (
    <ContainerAdmin>
      <TopoAdmin>
        <h2>Gerenciamento do Gatil 🐾</h2>
        {/* Botao no topo para cadastro */}
        <Botao onClick={handleNovoGato} style={{ padding: "12px 25px" }}>
          ➕ Adicionar Novo Gato
        </Botao>
      </TopoAdmin>
      <ListaGatos
        gatos={todosGatos}
        onSelecionar={setGatoDescricao}
        onEditar={handleEditarClick}
        onExcluir={handleExcluir}
        isAdmin={true}
      />
      {gatoDescricao && (
        <DetalhesGato
          gato={gatoDescricao}
          idade={calcularIdade(gatoDescricao.nascimento)}
          onFechar={() => setGatoDescricao(null)}
        />
      )}
      {modalAberto && (
        <JanelaSobreposta onFechar={() => setModalAberto(false)}>
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
            {gatoParaEditar
              ? `Editar ${gatoParaEditar.nome}`
              : "Cadastrar Novo Felino"}
          </h3>
          <FormularioGato
            gatoParaEditar={gatoParaEditar}
            onSalvar={handleSalvarGato}
          />
        </JanelaSobreposta>
      )}
    </ContainerAdmin>
  );
}

export default AdminGatil;
