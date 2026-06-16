import { createContext, useContext } from "react";
import cardapioData from "../data/Cardapio.json";
import gatosData from "../data/Gatos.json";

const DadosContext = createContext();

export function DadosProvider({ children }) {
  const value = {
    cardapio: cardapioData,
    gatos: gatosData,
  };

  return (
    <DadosContext.Provider value={value}>{children}</DadosContext.Provider>
  );
}

export function useDados() {
  const context = useContext(DadosContext);
  if (!context) {
    throw new Error("useDados deve ser usado dentro de DadosProvider");
  }
  return context;
}
