import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

import WbnPlayer from './WbnPlayer';

function App() {
  return (
    <BrowserRouter>
    <Fragment>
        <Switch>
          <Route exact path="/" component={WbnPlayer} />
          <Route exact path="/:activeVideoLink" component={WbnPlayer} />
        </Switch>
        <GlobalStyle />
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
