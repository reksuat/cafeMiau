import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    body {
    font-family: "Arial", sans-serif;
    background-color: ${(props) => props.theme.bg};       
    color: ${(props) => props.theme.text};            
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    }

    main.conteudo {
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
    h1 {font-size: 2rem;}
    h2 {font-size: 1.5rem;}
    h3 {font-size: 1.4rem;}
    h1,h2, h3 {
    color: ${(props) => props.theme.border};
    font-family:"Comic Sans MS", cursive, sans-serif;
    margin-top: 10px;
    text-align: center;
  }
    p {
    justify-content: center;
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;
export default EstiloGlobal;
