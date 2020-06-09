import React from 'react';
import styled from 'styled-components';
import { Person } from './';

const Container = styled.div`
  margin-bottom: 32px;
`;

const CastHeading = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: bold;
`;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const People = ({ category, people }) => (
  <Container>
    <CastHeading>{ category }</CastHeading>
    <CastList>
      { people && people.split(',').map((person, index) => <Person key={index} actor={person}/>) }
    </CastList>
  </Container>
);

export default People

