import React from 'react';
// react-router-dom
import { Route } from 'react-router-dom';
// components and pages
import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </>
  );
}

export default App;
