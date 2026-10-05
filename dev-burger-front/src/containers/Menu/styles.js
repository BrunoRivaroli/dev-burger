import styled from 'styled-components';
import BannerMenu from '../../assets/banner-menu.svg';
import background from '../../assets/background-devburger.svg';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  background-color: #f0f0f0;

  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url(${background});
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background: url('${BannerMenu}') no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #1f1f1f;
  height: 480px;
  width: 100%;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #fff;
    line-height: 65px;
    position: absolute;
    right: 20%;
    top: 30;
  }

  span {
    display: block;
    font-size: 20px;
    color: #fff;
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? '#61a120' : '#9758a6')};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActive && '3px solid #61a120'};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
  gap: 60px;
`;
