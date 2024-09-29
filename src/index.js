import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import esMessages from './locales/es.json';
import enMessages from './locales/en.json';


const messages = {
  es: esMessages,
  en: enMessages
};


const language = navigator.language.split(/[-_]/)[0] || 'en'; 

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
