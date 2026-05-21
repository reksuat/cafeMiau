import { useState, useEffect } from "react";
import Botao from "../components/Botao";

function CatAPI() {
  const [catImage, setCatImage] = useState("");
  const [carregando, setCarregando] = useState(true);

  //funcao de buscar gato na api
  const buscarGatinho = () => {
    setCarregando(true);
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        setCatImage(data[0].url);
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar imagem do gato:", err);
        setCarregando(false);
      });
  };

  useEffect(() => {
    buscarGatinho();
  }, []);
  const BotaoTroca = () => {
    buscarGatinho();
  };

  return (
    <div
      className="containerImg"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
        marginTop: "20spx",
      }}
    >
      {carregando ? (
        <p style={{ height: "400px", display: "flex", alignItems: "center" }}>
          Carregando gatinho... 🐾
        </p>
      ) : (
        <img
          src={catImage}
          alt="Gato aleatório"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "10px",
            maxWidth: "350px",
            boxShadow: "10px 10px 0px #d4a5a5",
          }}
        />
      )}
      <Botao onClick={BotaoTroca}>🐾 Mudar gato</Botao>
    </div>
  );
}

export default CatAPI;
