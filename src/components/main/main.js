import React from "react";

import MainContent from "../main-content/main-content";

import './main.css';

const Main = () => {

  return (
    <div className='content'>
      <div className='sidebar'></div>
      <MainContent />
    </div>
  )
};

export default Main;
