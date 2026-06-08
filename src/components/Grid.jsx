import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  padding: 20px 0;
  width: 100%;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 16px 0;
  }
`;

export default Grid;
