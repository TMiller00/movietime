/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
      id
      position
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
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
      id
      position
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
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
      id
      position
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
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
