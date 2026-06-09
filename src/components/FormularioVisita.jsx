import { useState } from "react";
import styled from "styled-components";
import Input from "./Input.jsx";
import Botao from "./Botao.jsx";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
`;

const FormTitulo = styled.h3`
  text-align: center;
  color: ${(p) => p.theme.highlight};
  margin-bottom: 0 0 10px 0;
`;

function FormularioVisita() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento enviado para ${nome}! Nos vemos dia ${data}. 🐾`);
    setNome("");
    setData("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitulo>Estamos ansiosos pela sua visita! (˵◝ ⩊ ◜˵マ</FormTitulo>
      <Input
        id="nome_visita"
        label="Seu Nome:"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome completo"
        required
      />
      <Input
        id="data_visita"
        label="Data da Visita:"
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        required
      />

      <Botao
        type="submit"
        style={{ width: "60%", marginTop: "10px", alignSelf: "center" }}
      >
        Reservar Visita
      </Botao>
    </FormContainer>
  );
}

export default FormularioVisita;
