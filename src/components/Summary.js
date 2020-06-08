import React from 'react';
import styled from 'styled-components';
import { Crackle } from '../assets';

const Container = styled.div`
  width: 524px;
  height: auto;
  display: flex;
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

const Summary = () => (
  <Container>
    <Indicator>
      <Crackle/>
      <Line/>
    </Indicator>
    <Text>
      During one night on patrol, a veteran cop and his rookie partner chase down violent suspects while searching for a missing girl and hunting two cop killers on the loose in Los Angeles.
    </Text>
  </Container>
)

export default Summary
