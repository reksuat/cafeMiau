import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input.jsx";
import Botao from "./Botao.jsx";

const FormPuro = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
`;

const SelectEstilizado = styled.select`
  padding: 10px 14px;
  border-radius: 8px;
  border: 2px solid ${(p) => p.theme.border};
  background-color: ${(p) => p.theme.bg};
  color: ${(p) => p.theme.text};
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${(p) => p.theme.highlight};
  }
`;

const LabelSelect = styled.label`
  font-weight: bold;
  font-size: 0.95rem;
  color: ${(p) => p.theme.text};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

function FormularioGato({ gatoParaEditar, onSalvar }) {
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("residente");
  const [nascimento, setNascimento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");

  // Efeito para carregar os dados caso seja uma EDIÇÃO
  useEffect(() => {
    if (gatoParaEditar) {
      setNome(gatoParaEditar.nome || "");
      setStatus(gatoParaEditar.status || "residente");
      setNascimento(gatoParaEditar.nascimento || "");
      setDescricao(gatoParaEditar.descricao || "");
      setFoto(gatoParaEditar.foto || "");
    } else {
      // Se for um cadastro NOVO, limpa os campos
      setNome("");
      setStatus("residente");
      setNascimento("");
      setDescricao("");
      setFoto("");
    }
  }, [gatoParaEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Monta o objeto com os dados do gatinho
    const dadosGato = {
      id: gatoParaEditar ? gatoParaEditar.id : Date.now().toString(), // Mantém o ID ou cria um novo
      nome,
      status,
      nascimento,
      descricao,
      foto,
    };

    onSalvar(dadosGato);
  };

  return (
    <FormPuro onSubmit={handleSubmit}>
      <Input
        id="nome_gato"
        label="Nome do Gato:"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Ex: Oliver"
        required
      />

      <LabelSelect>
        Status:
        <SelectEstilizado
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="residente">🏠 Residente do café</option>
          <option value="adotado">🏡 Já adotado</option>
        </SelectEstilizado>
      </LabelSelect>

      <Input
        id="nasc_gato"
        label="Data de Nascimento:"
        type="date"
        value={nascimento}
        onChange={(e) => setNascimento(e.target.value)}
        required
      />
      <Input
        id="detalhe_gato"
        label="Descricao:"
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Ex: manhoso e fofinho"
        required
      />

      <Input
        id="foto_gato"
        label="URL da Foto (Opcional):"
        type="text"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
        placeholder="https://images.unsplash.com/..."
      />

      <Botao type="submit" style={{ width: "100%", marginTop: "10px" }}>
        {gatoParaEditar ? "💾 Salvar Alterações" : "✨ Cadastrar Gato"}
      </Botao>
    </FormPuro>
  );
}

export default FormularioGato;
