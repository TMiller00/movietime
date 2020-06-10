import React from 'react';
import styled from 'styled-components';
import { Crackle } from '../assets';

const Container = styled.div`
  width: 524px;
  height: auto;
  display: flex;
  margin-bottom: 32px;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 32px;
  color: #FFFFFF;
`;

const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 16px;
`;

const Line = styled.div`
  background: #FE7200;
  width: 1px;
  height: 100%;
  margin-top: 8px;
`;

const Summary = ({ description }) => (
  <Container>
    <Indicator>
      <Crackle/>
      <Line/>
    </Indicator>
    <Text>
      { description }
    </Text>
  </Container>
)

export default Summary
