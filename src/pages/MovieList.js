import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listMovies } from '../graphql/queries';
import { Thumbnail, FeaturedTitle, SignUp, Footer } from '../components';
import { GlobalStyle } from '../App';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 80px;
  box-sizing: border-box;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    try {
      const movieData = await API.graphql(graphqlOperation(listMovies))
      const movies = movieData.data.listMovies.items
      setMovies(movies)
    } catch (err) { console.log('error fetching movies') }
  }

  const trackClicks = ({ id, title }) => {
    window.analytics.track('Link Clicked', {
      id, title
    })
  }

  return (
    <>
      <GlobalStyle/>
      <Link to={movies[0] && movies[0].id} onClick={() => trackClicks(movies[0])} >
        <FeaturedTitle {...movies[0]}/>
      </Link>
      <Container>
        {
          movies.map((movie, index) => {
            return (
              <Link key={index} to={movie.id} onClick={() => trackClicks(movie)}>
                <Thumbnail {...movie}/>
              </Link>
            )
          })
        }
        <SignUp/>
        <Footer/>
      </Container>
    </>
  );
}

export default MovieList;
