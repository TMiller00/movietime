import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment-duration-format';
import { Button, Header, Ratings } from './';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 720px;
  margin-bottom: 40px;
`;

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 0 80px;
  top: 40px;
  bottom: 40px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-family: OpenSans, sans-serif;
  font-size: 100px;
  color: #FFFFFF;
`;

const Year = styled.div`
  line-height: 16px;
  font-family: OpenSans, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
`;


const FeaturedTitle = ({ title, posterImage, year, duration, ...movie }) => {
  const formatDuration = (duration) => {
    return moment.duration(duration, 'minutes').format('h[hr] m[m]')
  };

  return (
    <Container>
      <img alt={title} src={posterImage}/>
      <Content>
        <Header/>
        <div>
          <Ratings {...movie}/>
          <Title>{ title }</Title>
          <Info>
            <Button/>
            <Year>{ year } {'\u2022'} { formatDuration(duration) } {'\u2022'} 16+</Year>
          </Info>
        </div>
      </Content>
    </Container>
  )
}

export default FeaturedTitle
