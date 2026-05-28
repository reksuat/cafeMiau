import styled from "styled-components";
const CampoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  background-color: ${(p) => p.theme.surface};
  border-radius: 8px;
  transition: background-color 0.3s ease;
`;

const LabelEstilizada = styled.label`
  font-weight: bold;
  font-size: 0.95rem;
  color: ${(p) => p.theme.text};
`;

const InputEstilizado = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 2px solid ${(p) => p.theme.border};
  background-color: #fdf6f0;
  color: #4b2e2e;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${(p) => p.theme.highlight};
  }
`;

function Input({ label, id, ...props }) {
  return (
    <CampoContainer>
      {label && <LabelEstilizada htmlFor={id}>{label}</LabelEstilizada>}
      <InputEstilizado id={id} {...props} />
    </CampoContainer>
  );
}
export default Input;
