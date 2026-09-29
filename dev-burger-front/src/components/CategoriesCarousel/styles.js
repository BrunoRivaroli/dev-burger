import styled from "styled-components";

export const Container = styled.div`
.carousel-item {
  padding-right: 40px;
}

  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background: #9758a6;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const ContainerItems = styled.div` 
background: url('${(props) => props.imageUrl}');
display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 250px;
background-size: cover;
background-position: center;
border-radius: 20px;

p{
  font-size: 20px;
  font-weight:  bold;
  margin-top: 50px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-weight: 800;
  text-align: center;
}
`