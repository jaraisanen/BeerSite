import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


ReactDOM.render(
  <BrowserRouter> 
    <AppContainer>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
