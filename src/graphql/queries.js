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
      cast {
        items {
          id
          movieID
          firstName
          lastName
          role
          thumbnailImage
          createdAt
          updatedAt
        }
        nextToken
      }
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
        cast {
          nextToken
        }
        creators
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      movieID
      firstName
      lastName
      role
      thumbnailImage
      createdAt
      updatedAt
    }
  }
`;
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        movieID
        firstName
        lastName
        role
        thumbnailImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
