import { useState, useEffect } from "react";
import Botao from "../components/Botao";
import styled from "styled-components";

const MinhaImagem = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  max-width: 350px;
  box-shadow: 10px 10px 0px ${(props) => props.theme.border};
`;

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
        <MinhaImagem src={catImage} alt="Gato aleatório" />
      )}
      <Botao onClick={BotaoTroca}>🐾 Mudar gato</Botao>
    </div>
  );
}

export default CatAPI;
