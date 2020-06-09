import React from 'react';
import styled from 'styled-components';
import { Person } from './';

const CastHeading = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const People = ({ category, people }) => (
  <>
    <CastHeading>{ category }</CastHeading>
    <CastList>
      { people && people.split(',').map((person, index) => <Person key={index} actor={person}/>) }
    </CastList>
  </>
);

export default People

