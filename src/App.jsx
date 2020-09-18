import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { Home, About, Play } from './pages';
import Nav from './components/Nav/Nav';
import './styles/base.scss';

function App() {
  
  let match = useRouteMatch();

  return (
    <>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path={`${match.url}demos/:repo-name`}>
        <Play selectedRepo={match.state}/>
      </Route>
      <Route exact path={`${match.url}about`}>
        <About />
      </Route>
    </>
  );
}

export default App;
