import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
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
  top: 10px;
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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const ehPainelAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </MenuToggle>

      <MenuMobileContainer $isOpen={menuOpen}>
        {ehPainelAdmin ? (
          <>
            <MobileNavLink to="/admin" onClick={() => setMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink
              to="/admin/cardapio"
              onClick={() => setMenuOpen(false)}
            >
              Gerenciar Cardápio
            </MobileNavLink>
            <MobileNavLink to="/admin/gatil" onClick={() => setMenuOpen(false)}>
              Gerenciar Gatos
            </MobileNavLink>
            <MobileNavLink
              to="/"
              onClick={() => {
                sessionStorage.clear();
                setMenuOpen(false);
              }}
            >
              Sair
            </MobileNavLink>
          </>
        ) : (
          <>
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
          </>
        )}
      </MenuMobileContainer>
      <Nav>
        {ehPainelAdmin ? (
          <>
            <StyleNavLink to="/admin">Home</StyleNavLink>
            <StyleNavLink to="/admin/cardapio">Gerenciar Cardápio</StyleNavLink>
            <StyleNavLink to="/admin/gatil">Gerenciar Gatos</StyleNavLink>
            <StyleNavLink
              to="/"
              onClick={() => sessionStorage.clear()}
              style={{ color: "#e53935" }}
            >
              Sair
            </StyleNavLink>
          </>
        ) : (
          <>
            <StyleNavLink to="/">Home</StyleNavLink>
            <StyleNavLink to="/cardapio">Cardápio</StyleNavLink>
            <StyleNavLink to="/gatil">Gatil</StyleNavLink>
            <StyleNavLink to="/sobre">Sobre</StyleNavLink>
          </>
        )}
      </Nav>
    </>
  );
}

export default Navbar;
