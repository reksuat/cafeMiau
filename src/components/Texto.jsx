import styled from "styled-components";

const Paragrafo = styled.p`
  text-align: justify;
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;

  span {
    color: ${(props) => props.theme.highlight};
    font-weight: bold;
  }

  ${(props) =>
    props.$destaque &&
    `color: ${props.theme.highlight};
       font-weight: bold;
       font-size: 1.3rem;
       margin-bottom: 25px;`}
`;

function Texto({ children, $destaque, ...props }) {
  return (
    <Paragrafo {...props} $destaque={$destaque}>
      {children}
    </Paragrafo>
  );
}
export default Texto;
