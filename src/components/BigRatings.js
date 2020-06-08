import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: OpenSans, sans-serif;
  color: #FFFFFF;
`;

const Box = styled.div`
  display: flex;
  width: 308;
  height: 64px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  font-size: 16px;
  line-height: 16px;
`;

const Rating = styled.div`
  font-size: 24px;
  line-height: 24px;
`;

const BigRatings = ({ rottenTomatoesCritics, rottenTomatoesAudience, imdbRating }) => (
  <Container>
    <Box>
      Rotten Tomatoes <Rating>{ rottenTomatoesCritics }</Rating>
    </Box>
    <Box>
      IMDB <Rating>{ imdbRating }</Rating>
    </Box>
    <Box>
      User Rating <Rating>{ rottenTomatoesAudience }</Rating>
    </Box>
  </Container>
)

export default BigRatings

