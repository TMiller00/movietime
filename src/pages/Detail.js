import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API, graphqlOperation } from 'aws-amplify';
import { getMovie } from '../graphql/queries';
import { useParams } from 'react-router-dom';
import { Player, Information, BigRatings, Summary } from '../components';

const Container = styled.div`
  background-color: black;
  font-family: OpenSans, sans-serif;
  color: #FFFFFF;
`;

const Content = styled.div`
  margin: 0 80px;
`;

const Detail = () => {
  const [movie, setMovie] = useState()
  const { id } = useParams();

  useEffect(() => {
    fetchMovie()
  }, [])

  const fetchMovie = async () => {
    try {
      const movieData = await API.graphql(graphqlOperation(getMovie, { id }))
      const movie = movieData.data.getMovie
      setMovie(movie)
    } catch (err) { console.log('error fetching movies') }
  }

  return (
    <Container>
      { movie && (
        <div>
          <Player {...movie}/>
            <Content>
              <Information {...movie}/>
              <p>{ movie.description }</p>
              <BigRatings {...movie}/>
              <Summary/>
              <p>Starring: { movie.cast }</p>
              <p>Directed by: { movie.creators }</p>
            </Content>
        </div>
      )}
    </Container>
  )
}

export default Detail

