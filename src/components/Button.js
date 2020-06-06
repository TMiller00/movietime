import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 56px;
  height: 40px;
  background-color: #1a1a1b;
  border-radius: 20px;
  margin-right: 24px;
`;

const Arrow = styled.div`
  color: #FCFFFF;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

const Button = () => (
  <Container>
    <Arrow>{ '\u2192' }</Arrow>
  </Container>
)

export default Button
