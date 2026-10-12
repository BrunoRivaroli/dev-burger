import styled from 'styled-components';

import background from '../../assets/background-devburger.svg';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
  width: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url(${background});
`;

export const Banner = styled.div`
  background-image: url(${Texture});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  position: relative;

  img {
    width: 180px;
    max-width: 100%;
    margin: 14px auto;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #61a120;
  font-weight: 800;
  font-size: 32px;
  margin-top: 31px;
  position: relative;
  padding-bottom: 12px;

  &::after {
    position: absolute;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
  gap: 40px;
`;
