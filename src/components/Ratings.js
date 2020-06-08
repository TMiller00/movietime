import React from 'react';
import styled from 'styled-components';
import { Imdb, Critics, Audience } from '../assets';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
  margin-bottom: 16px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const Rating = styled.span`
  margin-left: 8px;
`;

const Ratings = ({ rottenTomatoesCritics, rottenTomatoesAudience, imdbRating }) => (
  <Container>
    <Box>
      <Critics/><Rating>{ rottenTomatoesCritics }</Rating>
    </Box>
    <Box>
      <Audience/><Rating>{ rottenTomatoesAudience }</Rating>
    </Box>
    <Box>
      <Imdb/><Rating>{ imdbRating }</Rating>
    </Box>
  </Container>
)

export default Ratings
