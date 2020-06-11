import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listMovies } from '../graphql/queries';
import { Thumbnail, FeaturedTitle, SignUp, Footer } from '../components';
import { GlobalStyle } from '../App';
import { Parallax } from 'react-spring/renderprops-addons'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 80px;
  box-sizing: border-box;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const parallaxRef = useRef();

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
    <Parallax pages={4} scrolling={true} ref={parallaxRef}>
      <GlobalStyle/>
      <Link to={(movies[0] && movies[0].id) || "/"} onClick={() => trackClicks(movies[0])} >
        <FeaturedTitle {...movies[0]}/>
      </Link>
      <Container>
        {
          movies.slice(1).sort((a, b) => a.position - b.position).map((movie, index) => {
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
    </Parallax>
  );
}

export default MovieList;
