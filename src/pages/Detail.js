import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API, graphqlOperation } from 'aws-amplify';
import { getMovie } from '../graphql/queries';
import { useParams } from 'react-router-dom';
import { Player, Information, BigRatings, Summary, People } from '../components';
import { GlobalStyle } from '../App';

const Container = styled.div`
  background-color: black;
  color: #FFFFFF;
  padding-bottom: 40px;
`;

const Content = styled.div`
  margin: 16px 80px 0;
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

  return (
    <Container>
      <GlobalStyle blackColor/>
      { movie && (
        <div>
          <Player {...movie}/>
          <Content>
            <Information {...movie}/>
            <p>{ movie.description }</p>
            <BigRatings {...movie}/>
            <Summary/>
            <People category='Cast' people={movie.cast}/>
            <People category='Creators' people={movie.creators}/>
          </Content>
        </div>
      )}
    </Container>
  )
}

export default Detail

