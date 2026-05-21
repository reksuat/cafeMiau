import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
`;
const Titulo = styled.h1`
  font-size: 2.5rem;
  font-family: "Arial", sans-serif;
  color: ${(props) => props.theme.highlight} !important;
`;
const AlinharTitulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Nav = styled.nav`
  text-align: center;
  margin-top: 10px;
  padding: 15px;
  background-color: ${(p) => p.theme.surface};
  border-bottom: 3px solid ${(p) => p.theme.highlight};
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyleNavLink = styled(NavLink)`
  margin: 0 20px;
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 10px;
  color: ${(p) => p.theme.text};
  border: 2px solid transparent;
  transition: 0.3s;

  &:hover,
  &.active {
    color: ${(p) => p.theme.highlight};
    border-color: ${(p) => p.theme.highlight};
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  color: ${(p) => p.theme.text};
  z-index: 1001;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuMobileContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${(p) => (p.$isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100vh;
  padding-top: 80px;
  transition: 0.3s;
  z-index: 1000;
  background-color: ${(p) => p.theme.highlight};
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 15px;
  color: #fff9f4;
  text-decoration: none;
  font-size: 18px;
  &:hover,
  &.active {
    background-color: rgba(252, 228, 236, 0.2);
    color: ${(p) => p.theme.surface};
  }
`;

const ThemeButton = styled.button`
  position: absolute;
  left: 40px;
  background: none;
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 12px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.text};
  @media (max-width: 768px) {
    left: 20px;
    right: auto;
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

// --- COMPONENTE PRINCIPAL ---
function Header({ toggleTheme, currentTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <AlinharTitulo>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Titulo>CafeMiau</Titulo>
        </Link>
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? "☾" : "☀︎"}
        </ThemeButton>
      </AlinharTitulo>

      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </MenuToggle>

      <MenuMobileContainer $isOpen={menuOpen}>
        <MobileNavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/cardapio" onClick={() => setMenuOpen(false)}>
          Cardápio
        </MobileNavLink>
        <MobileNavLink to="/gatil" onClick={() => setMenuOpen(false)}>
          Gatil
        </MobileNavLink>
        <MobileNavLink to="/sobre" onClick={() => setMenuOpen(false)}>
          Sobre
        </MobileNavLink>
      </MenuMobileContainer>

      <Nav>
        <StyleNavLink to="/">Home</StyleNavLink>
        <StyleNavLink to="/cardapio">Cardápio</StyleNavLink>
        <StyleNavLink to="/gatil">Gatil</StyleNavLink>
        <StyleNavLink to="/sobre">Sobre</StyleNavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
