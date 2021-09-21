import React, { Component } from 'react';

import Main from '../main/main';

import './app.css';

export default class App extends Component {

  render() {

    return(
      <div className='app'>
        <header className='header'></header>
        <Main />
      </div>
    )
  };
};
