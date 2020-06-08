import React from 'react';
import styled from 'styled-components';
import { Header, Ratings, Countdown, Information } from './';

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

export const Title = styled.div`
  font-family: OpenSans, sans-serif;
  font-size: 100px;
  color: #FFFFFF;
`;

const FeaturedTitle = ({ title, posterImage, ...movie }) => {

  return (
    <Container>
      <img alt={title} src={posterImage}/>
      <Content>
        <Header/>
        <div>
          <Ratings {...movie}/>
          <Title>{ title }</Title>
          <Countdown/>
          <Information {...movie}/>
        </div>
      </Content>
    </Container>
  )
}

export default FeaturedTitle
