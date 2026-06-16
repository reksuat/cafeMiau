import styled from "styled-components";

const EquipeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 50px;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 40px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    gap: 30px;
    margin-top: 30px;
    flex-direction: column;
  }
`;

const MembroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 280px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const MembroFoto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${(props) => props.theme.border};

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const Cargo = styled.p`
  color: ${(props) => props.theme.highlight};
  font-weight: bold;
  font-size: 0.95rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

function EquipeCafeMiau() {
  return (
    <>
      <h2 style={{ marginTop: "50px" }}>Equipe do CafeMiau</h2>

      <EquipeContainer>
        <MembroWrapper>
          <MembroFoto src="/gatos/oliver.jpg" alt="Oliver" />
          <h3>Oliver</h3>
          <Cargo>Fundador & Dono</Cargo>
        </MembroWrapper>

        <MembroWrapper>
          <MembroFoto src="/gatos/nick.jpg" alt="Nick" />
          <h3>Nick</h3>
          <Cargo>Co-fundador & Dono</Cargo>
        </MembroWrapper>
      </EquipeContainer>
    </>
  );
}

export default EquipeCafeMiau;
