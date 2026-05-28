import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Botao from "./Botao.jsx";
import Input from "./Input.jsx";
import { CardContainer } from "./Card.jsx";

const AlinharLogin = styled.div`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === "oliver" && senha === "123456") {
      sessionStorage.setItem("autenticado", "true");
      navigate("/admin");
    } else {
      setErro("Usuário ou senha incorretos.");
    }
  };
  return (
    <AlinharLogin>
      <CardContainer
        as="form"
        onSubmit={handleLogin}
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <Input
          id="usuario"
          label="Usuário:"
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <Input
          id="senha"
          label="Senha:"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <p style={{ color: "red", textAlign: "center" }}>{erro}</p>}
        <Botao type="submit" style={{ width: "60%", alignSelf: "center" }}>
          Entrar
        </Botao>
      </CardContainer>
    </AlinharLogin>
  );
}
export default Login;
