import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API, graphqlOperation } from 'aws-amplify';
import { getMovie } from '../graphql/queries';
import { useParams } from 'react-router-dom';
import { Player, Information, BigRatings, Summary, Person } from '../components';

const Container = styled.div`
  background-color: black;
  color: #FFFFFF;
`;

const Content = styled.div`
  margin: 0 80px;
`;

const CastHeading = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Detail = () => { const [movie, setMovie] = useState()
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

  console.log(movie && movie.cast.split(','))

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
              <CastHeading>Cast</CastHeading>
              <CastList>
                { movie.cast.split(',').map((actor, index) => <Person key={index} actor={actor}/>) }
              </CastList>
              <CastHeading>Director</CastHeading>
              <CastList>
                { movie.creators.split(',').map((actor, index) => <Person key={index} actor={actor}/>) }
              </CastList>
            </Content>
        </div>
      )}
    </Container>
  )
}

export default Detail

