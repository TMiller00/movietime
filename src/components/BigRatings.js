import React from 'react';
import styled from 'styled-components';
import { ImdbColor, CriticsColor } from '../assets';

const Container = styled.div`
  color: #FFFFFF;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 308px;
  height: 64px;
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  font-size: 16px;
  line-height: 16px;
  padding: 0 16px;
  box-sizing: border-box;

  svg {
    margin-right: 8px;
    margin-left: auto;
  }
`;

const Rating = styled.div`
  font-size: 24px;
  line-height: 24px;
`;

const BigRatings = ({ rottenTomatoesCritics, rottenTomatoesAudience, imdbRating }) => (
  <Container>
    <Box>
      Rotten Tomatoes
      <CriticsColor/>
      <Rating>{ rottenTomatoesCritics }%</Rating>
    </Box>
    <Box>
      IMDB
      <ImdbColor/>
      <Rating>{ imdbRating }</Rating>
    </Box>
    <Box>
      User Rating
      <Rating>{ rottenTomatoesAudience }</Rating>
    </Box>
  </Container>
)

export default BigRatings

