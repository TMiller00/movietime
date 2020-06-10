import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 304px;
  color: #FFFFFF;
  margin-right: 16px;
  position: relative;
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

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  bottom: 16px;
  left: 18px;
  font-weight: bold;
`;

const Name = styled.div`
  font-size: 20px;
  line-height: 24px;
`;

const Role = styled.div`
  font-size: 12px;
  line-height: 14px;
`;

const Person = ({ firstName, lastName, role, thumbnailImage }) => (
  <Container>
    <Image src={thumbnailImage} alt={`${firstName} ${lastName}`}/>
    <Gradient/>
    <Content>
      <Name>{ firstName } { lastName }</Name>
      <Role>{ role }</Role>
    </Content>
  </Container>
)

export default Person
