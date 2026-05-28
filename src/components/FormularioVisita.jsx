import { useState } from "react";
import styled from "styled-components";
import Input from "./Input.jsx";
import Botao from "./Botao.jsx";

const FormContainer = styled.form`
  background-color: ${(p) => p.theme.surface};
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 16px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  margin: 40px auto 10px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.02);
`;

const FormTitulo = styled.h3`
  text-align: center;
  color: ${(p) => p.theme.highlight};
  margin-bottom: 10px;
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
      <FormTitulo>Agende uma Visita ao Gatil 📅</FormTitulo>
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
        Solicitar Agendamento
      </Botao>
    </FormContainer>
  );
}

export default FormularioVisita;
