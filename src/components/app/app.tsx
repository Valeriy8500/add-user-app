import React from 'react';
import Header from '../header/header';
import Content from '../content/content';
import './app.css';

const App = (): React.ReactElement => {

  return (
    <div className='app'>
      <Header />
      <Content />
    </div>
  )
};

export default App;