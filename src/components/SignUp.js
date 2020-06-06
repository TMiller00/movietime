import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 506px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 16px;
`

const Title = styled.div`
  font-family: OpenSans, sans-serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 48px;
  color: #FFFFFF;
  margin-bottom: 24px;
`;

const Copy = styled.div`
  font-family: OpenSans, sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: rgba(255, 255, 255, 0.64);
  margin-bottom: 48px;
`;


const SignUp = () => (
  <Container>
    <Title>New Month, New Movies!</Title>
    <Copy>Subscribe for updates about new movies next month</Copy>
    <Input/>
  </Container>
)

export default SignUp
