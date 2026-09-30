import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.svg';
import background from '../../assets/background-devburger.svg';

export const Banner = styled.div`
  background-image: url(${BannerHome});
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

export const Container = styled.section`
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(${background});
  min-height: 100%;
`;

export const Content = styled.div``;
