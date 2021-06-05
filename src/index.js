import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <App />
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

reportWebVitals();
