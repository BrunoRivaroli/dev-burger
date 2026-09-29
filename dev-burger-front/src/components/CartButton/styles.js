import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: #9758a6;
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 30px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #6f357c;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
