import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  padding: 20px 0;
  width: 100%;
  justify-items: center;
  max-width: 100%;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 16px 0;
  }
`;

export default Grid;
