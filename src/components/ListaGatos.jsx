import Card from "./Card";
import Grid from "./Grid";

function ListaGatos({ gatos, onSelecionar }) {
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
        />
      ))}
    </Grid>
  );
}
export default ListaGatos;
