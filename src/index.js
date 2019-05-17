import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import App from './App';
import { theme, GlobalStyle } from './theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  </ThemeProvider>
, document.getElementById('root'));

serviceWorker.unregister();
