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

const categoriasMap = {
  "bebidas-quentes": "☕ Bebidas Quentes",
  "bebidas-geladas": "🧊 Bebidas Geladas",
  doces: "🍰 Doces",
  salgados: "🥐 Salgados",
  vegano: "🌱 Vegano",
};

function FormularioCardapio({ itemParaEditar, onSalvar }) {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("bebidas-quentes");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => {
    if (itemParaEditar) {
      setNome(itemParaEditar.nome || "");
      setCategoria(itemParaEditar.categoria || "bebidas-quentes");
      setPreco(itemParaEditar.preco || "");
      setDescricao(itemParaEditar.descricao || "");
      setFoto(itemParaEditar.foto || "");
    } else {
      setNome("");
      setCategoria("bebidas-quentes");
      setPreco("");
      setDescricao("");
      setFoto("");
    }
  }, [itemParaEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dadosItem = {
      id: itemParaEditar ? itemParaEditar.id : Date.now().toString(),
      nome,
      categoria,
      preco: parseFloat(preco),
      descricao,
      foto,
    };

    onSalvar(dadosItem);
  };

  return (
    <FormPuro onSubmit={handleSubmit}>
      <Input
        id="nome_item"
        label="Nome do Item:"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Ex: Cappuccino Felino"
        required
      />

      <LabelSelect>
        Categoria:
        <SelectEstilizado
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {Object.entries(categoriasMap).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </SelectEstilizado>
      </LabelSelect>

      <Input
        id="preco_item"
        label="Preço (R$):"
        type="number"
        step="0.01"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        placeholder="Ex: 14.90"
        required
      />

      <Input
        id="descricao_item"
        label="Descrição:"
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Ex: Cappuccino cremoso com arte latte de patinha"
        required
      />

      <Input
        id="foto_item"
        label="URL da Foto (Opcional):"
        type="text"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
        placeholder="https://images.unsplash.com/..."
      />

      <Botao type="submit" style={{ width: "100%", marginTop: "10px" }}>
        {itemParaEditar ? "💾 Salvar Alterações" : "✨ Adicionar Item"}
      </Botao>
    </FormPuro>
  );
}

export default FormularioCardapio;
