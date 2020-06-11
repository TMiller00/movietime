import React from 'react';
import styled from 'styled-components';
import { CapitalOne } from '../assets';

const Name = styled.h1`
  font-family: Futura;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.64);
  align-items: center;
  width: 400px;

  ${Name}, span {
    margin-right: 8px;
  }
`;

const Header = () => (
  <Container>
    <Name>MovieNight</Name><span>presented by</span><CapitalOne/>
  </Container>
)

export default Header
