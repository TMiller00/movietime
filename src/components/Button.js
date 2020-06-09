import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 48px;
  height: 48px;
  background-color: transparent;
  border-radius: 50%;
  margin-right: 24px;
  border: 1px solid #FCFFFF;
`;

const Arrow = styled.div`
  color: #FCFFFF;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  text-decoration: none;
`;

const Button = () => (
  <Container>
    <Arrow>{ '\u2192' }</Arrow>
  </Container>
)

export default Button
