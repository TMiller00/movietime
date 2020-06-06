import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getMovie } from '../graphql/queries';
import { useParams } from 'react-router-dom';
import { Player } from '../components';

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
    <>
      { movie && (
        <div>
          <Player {...movie}/>
          <p>{ movie.description }</p>
          <p>Starring: { movie.cast }</p>
          <p>Directed by: { movie.creators }</p>
        </div>
      )}
    </>
  )
}

export default Detail

