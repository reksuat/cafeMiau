import Card from "./Card";
import Grid from "./Grid";
import styled from "styled-components";
import Botao from "./Botao";

const BotoesAdmin = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

function ListaCardapio({ itens, onSelecionar, isAdmin, onEditar, onExcluir }) {
  return (
    <Grid style={{ justifyItems: "center" }}>
      {itens.map((item) => (
        <Card
          key={item.id}
          imagem={item.foto}
          titulo={item.nome}
          descricao={`R$ ${item.preco.toFixed(2)}`}
        >
          {isAdmin && (
            <BotoesAdmin>
              <Botao
                $variant="icon"
                onClick={() => onEditar(item)}
                type="button"
                style={{ margin: "0" }}
              >
                ✏️
              </Botao>
              <Botao
                onClick={() => onSelecionar(item)}
                type="button"
                style={{
                  flexGrow: 1,
                  padding: "10px 8px",
                  fontSize: "0.85rem",
                  margin: "0",
                }}
              >
                Detalhes 🍽️
              </Botao>
              <Botao
                $variant="icon"
                onClick={() => onExcluir(item.id, item.nome)}
                type="button"
                style={{ margin: "0" }}
              >
                🗑️
              </Botao>
            </BotoesAdmin>
          )}
        </Card>
      ))}
    </Grid>
  );
}
export default ListaCardapio;
