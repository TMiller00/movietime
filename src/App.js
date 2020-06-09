import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Detail, MovieList } from './pages';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: OpenSans, sans-serif;
    background-color: ${ props => (props.blackColor ? '#000000' : '#2A2A2A') };
    box-sizing: border-box;
  }
`;

const App = () => (
  <Router>
    <GlobalStyle/>
    <Switch>
      <Route exact path="/">
        <MovieList/>
      </Route>
      <Route path="/:id">
        <Detail/>
      </Route>
    </Switch>
  </Router>
)

export default App;
