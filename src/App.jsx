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
      <Route path={`${match.url}play`}>
        <Play />
      </Route>
      <Route path={`${match.url}help`}>
        <About />
      </Route>
    </>
  );
}

export default App;
