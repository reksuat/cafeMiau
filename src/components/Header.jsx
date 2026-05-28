import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav.jsx";
import Botao from "./Botao.jsx";
import userClaro from "../icones/userClaro.png";
import userEscuro from "../icones/userEscuro.png";

const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
`;
const Titulo = styled.h1`
  font-size: 2.5rem;
  font-family: "Arial", sans-serif;
  color: ${(props) => props.theme.highlight} !important;
  a & {
    text-decoration: none;
    color: inherit;
  }
`;
const AlinharTitulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const ThemeButton = styled.button`
  position: absolute;
  left: 25px;
  background: none;
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 12px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
  color: ${(p) => p.theme.text};
  @media (max-width: 768px) {
    left: 20px;
    right: auto;
    width: 40px;
    height: 40px;
  }
`;
const UserButton = styled(ThemeButton)`
  left: auto;
  right: 25px;
  @media (max-width: 768px) {
    right: 60px;
    left: auto;
  }
  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    transition: all 0.3s ease-in-out;
  }
`;

// --- COMPONENTE PRINCIPAL ---
function Header({ toggleTheme, currentTheme }) {
  const navigate = useNavigate(); //iniciando hook de rota

  return (
    <HeaderContainer>
      <AlinharTitulo>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Titulo>CafeMiau</Titulo>
        </Link>
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? "☾" : "☀︎"}
        </ThemeButton>
        <UserButton onClick={() => navigate("/admin")}>
          <img
            key={currentTheme}
            src={currentTheme === "light" ? userEscuro : userClaro}
            alt="Usuário"
          />
        </UserButton>
      </AlinharTitulo>
      <Nav />
    </HeaderContainer>
  );
}

export default Header;
