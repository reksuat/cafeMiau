import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import EstiloGlobal from "./styles/estiloGlobal.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/Header.jsx";

import { useState } from "react";
import Home from "./paginas/Home.jsx";
import Sobre from "./paginas/Sobre.jsx";
import Gatil from "./paginas/Gatil.jsx";
import Cardapio from "./paginas/Cardapio.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <EstiloGlobal />
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <main className="conteudo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/gatil" element={<Gatil />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<h2>Página não encontrada 🐾</h2>} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
