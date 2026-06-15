import { useState } from "react";
import styled from "styled-components";
import cardapioBase from "../../data/Cardapio.json";
import useLocalStorage from "../../data/LocalStorage";
import FormularioCardapio from "../../components/FormularioCardapio.jsx";
import JanelaSobreposta from "../../components/JanelaSobreposta.jsx";
import ListaCardapio from "../../components/ListaCardapio.jsx";
import DetalhesCardapio from "../../components/DetalhesCardapio.jsx";
import Botao from "../../components/Botao.jsx";

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

function AdminCardapio() {
  const [edicoes, setEdicoes] = useLocalStorage("cafemiau_cardapio_edicoes", {});
  const [extras, setExtras] = useLocalStorage("cafemiau_cardapio_extras", []);

  const [itemDescricao, setItemDescricao] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [itemParaEditar, setItemParaEditar] = useState(null);

  const todosItens = [
    ...cardapioBase.map((item) => ({ ...item, ...(edicoes[item.id] || {}) })),
    ...extras,
  ];

  const handleNovoItem = () => {
    setItemParaEditar(null);
    setModalAberto(true);
  };

  const handleEditarClick = (item) => {
    setItemParaEditar(item);
    setModalAberto(true);
  };

  const handleExcluir = (id, nome) => {
    if (window.confirm(`Tem certeza que deseja remover "${nome}"?`)) {
      // Se for um item que veio do JSON, nós limpamos a edição dele
      if (cardapioBase.some((i) => i.id === id)) {
        const novasEdicoes = { ...edicoes };
        delete novasEdicoes[id];
        setEdicoes(novasEdicoes);
      } else {
        // Se for um item criado manualmente, removemos do local
        setExtras(extras.filter((i) => i.id !== id));
      }
    }
  };

  const handleSalvarItem = (dadosItem) => {
    if (cardapioBase.some((i) => i.id === dadosItem.id)) {
      // Se o item pertence ao JSON original, salva no objeto de 'edicoes'
      setEdicoes({
        ...edicoes,
        [dadosItem.id]: dadosItem,
      });
    } else if (itemParaEditar) {
      // Se for um item criado por você que está sendo EDITADO, atualiza nos 'extras'
      setExtras(extras.map((i) => (i.id === dadosItem.id ? dadosItem : i)));
    } else {
      // Se for um item COMPLETAMENTE NOVO, adiciona na lista de 'extras'
      setExtras([...extras, dadosItem]);
    }

    // Fecha o modal após concluir
    setModalAberto(false);
  };

  return (
    <ContainerAdmin>
      <TopoAdmin>
        <h2>Gerenciamento do Cardápio ☕</h2>
        {/* Botao no topo para cadastro */}
        <Botao onClick={handleNovoItem} style={{ padding: "12px 25px" }}>
          ➕ Adicionar Item
        </Botao>
      </TopoAdmin>
      <ListaCardapio
        itens={todosItens}
        onSelecionar={setItemDescricao}
        onEditar={handleEditarClick}
        onExcluir={handleExcluir}
        isAdmin={true}
      />
      {itemDescricao && (
        <DetalhesCardapio
          item={itemDescricao}
          onFechar={() => setItemDescricao(null)}
        />
      )}
      {modalAberto && (
        <JanelaSobreposta onFechar={() => setModalAberto(false)}>
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
            {itemParaEditar
              ? `Editar ${itemParaEditar.nome}`
              : "Adicionar Novo Item"}
          </h3>
          <FormularioCardapio
            itemParaEditar={itemParaEditar}
            onSalvar={handleSalvarItem}
          />
        </JanelaSobreposta>
      )}
    </ContainerAdmin>
  );
}

export default AdminCardapio;
