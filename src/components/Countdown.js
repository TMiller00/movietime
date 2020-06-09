import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.48);
  margin-bottom: 16px;
`;

const Countdown = () => (
  <Container>
    Movie expires in { moment(moment().add(1, 'months').date(0)).fromNow() }
  </Container>
)

export default Countdown
