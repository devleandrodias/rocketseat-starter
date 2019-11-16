import React, { Fragment } from 'react';
import Routes from './routes';

import Header from './components/Header';

import './styles.css';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  );
}
