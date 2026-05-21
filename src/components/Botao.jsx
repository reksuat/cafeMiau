import Styled from "styled-components";

const StyledButton = Styled.button`
background-color: ${(props) =>
  props.$variant === "secondary" ? props.theme.border : props.theme.highlight};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.bg};
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

function Botao({ children, $variant, ...props }) {
  return (
    <StyledButton className="botao" $variant={$variant} {...props}>
      {children}
    </StyledButton>
  );
}
export default Botao;
