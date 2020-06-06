import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  font-family: OpenSans, sans-serif;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.48);
`;

const Countdown = () => (
  <Container>
    Movie expires in { moment(moment().add('months', 1).date(0)).fromNow() }
  </Container>
)

export default Countdown
