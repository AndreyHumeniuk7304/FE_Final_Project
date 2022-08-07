import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider,createTheme} from '@material-ui/core';

const theme = createTheme({
    pallete: {
        primary: {
            light: '#FFFFFF',
            main: '#847A7A',
            dark: '#000000'

        },
        secondary: {
            light: '#E2DFDF',
            main: '#847A7A',
            dark: '#595959'

        }
    },
    typography: {
        fontFamily: [
            'Josefin Sans',
            'Open Sans',
        ].join(','),
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
