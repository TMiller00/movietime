import React from 'react';
import styled from 'styled-components';
import { Header, Ratings, Countdown, Information, Button } from './';

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

const Poster = styled.img`
  width: 1439px;
`;

export const Title = styled.div`
  font-size: 100px;
  color: #FFFFFF;
`;

const Box = styled.div`
  display: flex;
`;

const FeaturedTitle = ({ title, posterImage, ...movie }) => (
  <Container>
    <Poster alt={title} src={posterImage}/>
    <Content>
      <Header/>
      <div>
        <Ratings {...movie}/>
        <Title>{ title }</Title>
        <Countdown/>
        <Box>
          <Button/><Information {...movie}/>
        </Box>
      </div>
    </Content>
  </Container>
);


export default FeaturedTitle
