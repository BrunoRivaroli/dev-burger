import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  cursor: grab;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

  div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      color: #ff8c05;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      margin-top: 40px;
    }

    strong {
      font-size: 22px;
      color: #363636;
      font-weight: 800;
      line-height: 20px;
    }
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
`;
