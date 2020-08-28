import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { Home, Help, Play } from './pages';
import Nav from './components/Nav/Nav';

function App() {
  
  let match = useRouteMatch();
  console.log(match.url)

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
        <Help />
      </Route>
    </>
  );
}

export default App;
