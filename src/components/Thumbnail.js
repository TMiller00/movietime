import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-bottom: 16px;
  height: 550px;
  width: 416px;
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

const Thumbnail = ({ title, year, description, thumbnailImage }) => (
  <Container>
    <img alt={title} src={thumbnailImage}/>
    <Info>
      <Title>{ title }</Title>
      <Year>{ year }</Year>
    </Info>
  </Container>
)

export default Thumbnail

