import styled from "styled-components";
import backgroundDevburguer from '../../assets/background-devburger.svg';
import backgroundLogin from '../../assets/background-login.svg';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
display: flex;
width: 100vw;
height: 100vh;
`

export const LeftContainer = styled.div`
background: url('${backgroundLogin}');
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;

align-items: center;
display: flex;
justify-content: center;

img {
  width: 80%;
}

`

export const RightContainer = styled.div`
background-image: url('${backgroundDevburguer}');
background-color: #363636;

height: 100%;
width: 100%;
max-width: 50%;

align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

p{
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  

  a{
    text-decoration: underline;
    }
  } 
`

export const Title = styled.h2`
font-family: "Road Rage", sans-serif;
font-size: 40px;
color: #9758a6;
text-align: center;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;

p{
  color: #cf3057;
  font-size: 10px;
  font-weight: 600;
  text-align: right;
  line-height: 80%;
  height: 10px;
}
`

export const InputContainer = styled.div`
width: 100%;
gap: 5px;
display: flex; 
flex-direction: column;

label {
  font-weight: 600;
  font-size: 18px;
  color: #fff;

}
 
input{
  width: 100%;
  height: 52px;
  border: none;
  padding: 0 16px; 
  border-radius: 5px;}

  `



export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
  
  `