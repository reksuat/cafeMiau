import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$variant === "secondary"
      ? props.theme.border
      : props.theme.highlight};
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
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  &:hover {
    background-color: ${(props) =>
      props.$variant === "secondary"
        ? props.theme.highlight
        : props.theme.border};
    transform: translateY(-2px);
  }
  ${(p) =>
    p.$variant === "icon" &&
    `
      background-color: transparent;
      border: 2px solid ${p.theme.border};
      color: ${p.theme.text};
      width: 32px;
      height: 32px;
      border-radius: 50%;
      padding: 0;
      font-size: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

function Botao({ children, $variant, ...props }) {
  return (
    <StyledButton className="botao" $variant={$variant} {...props}>
      {children}
    </StyledButton>
  );
}
export default Botao;
