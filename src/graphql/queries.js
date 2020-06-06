/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      title
      description
      backgroundImage
      posterImage
      thumbnailImage
      logo
      year
      duration
      likes
      videoSource
      trailerSource
      rottenTomatoesCritics
      rottenTomatoesAudience
      imdbRating
      cast
      creators
      createdAt
      updatedAt
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        backgroundImage
        posterImage
        thumbnailImage
        logo
        year
        duration
        likes
        videoSource
        trailerSource
        rottenTomatoesCritics
        rottenTomatoesAudience
        imdbRating
        cast
        creators
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
