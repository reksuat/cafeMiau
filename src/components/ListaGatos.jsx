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

function ListaGatos({ gatos, onSelecionar, isAdmin, onEditar, onExcluir }) {
  return (
    <Grid style={{ justifyItems: "center" }}>
      {gatos.map((gato) => (
        <Card
          key={gato.id}
          imagem={gato.foto || "/gatoR.jpg"}
          titulo={gato.nome}
          descricao=""
          textoBotao={
            gato.status === "adotado" ? "Ver História 🏡" : "Saiba mais 🐾"
          }
          onBotaoClick={() => onSelecionar(gato)}
        >
          {isAdmin && (
            <BotoesAdmin>
              <Botao
                $variant="icon"
                onClick={() => onEditar(gato)}
                type="button"
                style={{ margin: "0" }}
              >
                ✏️
              </Botao>
              <Botao
                onClick={() => onSelecionar(gato)}
                type="button"
                style={{
                  flexGrow: 1,
                  padding: "10px 8px",
                  fontSize: "0.85rem",
                  margin: "0",
                }}
              >
                {gato.status === "adotado" ? "História 🏡" : "Detalhes 🐾"}
              </Botao>
              <Botao
                $variant="icon"
                onClick={() => onExcluir(gato.id, gato.nome)}
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
export default ListaGatos;
