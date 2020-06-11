import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-bottom: 16px;
  height: 550px;
  width: 416px;
  overflow: hidden;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0,190,220);
  background: linear-gradient(0deg, rgba(0,190,220,1) 0%, rgba(0,190,220,0) 33%);
`;

const Info = styled.div`
  position: absolute;
  bottom: 28px;
  margin: 0 22px 0 26px;
  color: #FFFFFF;
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  margin: 0;
`;

const Year = styled.div`
  font-size: 12px;
  line-height: 16px;
`;

const Image = styled.img`
  width: 100%;
`;

const Thumbnail = ({ title, year, description, thumbnailImage }) => (
  <Container>
    <Image alt={title} src={thumbnailImage}/>
    <Gradient/>
    <Info>
      <Title>{ title }</Title>
      <Year>{ year }</Year>
    </Info>
  </Container>
)

export default Thumbnail

