import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    body, div, section, nav, button, input, a {
transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}
    body {
    font-family: "Arial", sans-serif;
    background-color: ${(props) => props.theme.bg};       
    color: ${(props) => props.theme.text};            
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    }

    main.conteudo {
    padding: 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
    h1 {font-size: 2rem;}
    h2 {font-size: 1.5rem;}
    h3 {font-size: 1.4rem;}
    h1,h2, h3 {
    color: ${(props) => props.theme.border};
    font-family:"Comic Sans MS", cursive, sans-serif;
    margin-bottom: 10px;
    text-align: center;
  }
`;
export default EstiloGlobal;
