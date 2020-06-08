import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment-duration-format';
import { Button } from './';

const Info = styled.div`
  display: flex;
  align-items: center;
`;


const Year = styled.div`
  line-height: 16px;
  font-family: OpenSans, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
`;

const Information = ({ year, duration }) => {
  const formatDuration = (duration) => {
    return moment.duration(duration, 'minutes').format('h[hr] m[m]')
  };

  return (
    <Info>
      <Button/>
      <Year>{ year } {'\u2022'} { formatDuration(duration) } {'\u2022'} 16+</Year>
    </Info>
  )
};

export default Information
