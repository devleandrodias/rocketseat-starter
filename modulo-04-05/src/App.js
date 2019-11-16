import React, { Fragment } from 'react';

import Header from './components/Header';
import Main from './pages/main';

import './styles.css';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}
