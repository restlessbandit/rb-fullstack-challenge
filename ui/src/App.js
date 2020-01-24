import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { css } from 'styled-components';

import Header from './components/Header';
import JobList from './components/JobList';

const App = () => (
  <div
    css={css`
      font-family: Avenir, sans-serif;

      height: 100vh;
      width: 100vw;
    `}
  >
    <Header />
    <main
      css={css`
        min-height: calc(100vh - 83px);
      `}
    >
      <Switch>
        <Route component={JobList} exact path="/" />
        {/* TODO: Add a route! */}
      </Switch>
    </main>
  </div>
);

export default App;
