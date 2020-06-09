import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.64);
  align-items: center;
  width: 400px;
  justify-content: space-evenly;
`;

const Name = styled.h1`
  font-family: Futura;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin: 0;
`;

const Logo = styled.img.attrs({
  src: 'https://img.pngio.com/capital-one-logo-png-transparent-svg-vector-freebie-supply-capital-one-logo-png-2400_867.png'
})`
  width: 96px;
  height: 36px;
`;

const Header = () => (
  <Container>
    <Name>MovieNight</Name> presented by <Logo/>
  </Container>
)

export default Header
