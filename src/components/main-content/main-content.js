import React, { Component } from 'react';

import List from '../list/list';
import ModalWindow from '../modal-window/modal-window';
import info from '../../utils/utils';

import plus from './plus.svg';

import './main-content.css';

export default class MainContent extends Component {

  state = {
    infoData: info,
    modalWindow: false
  };

  addItem = (newItem) => {

    this.setState(({ infoData }) => {

      const newArray = [newItem, ...infoData];

      return {
        infoData: newArray
      };
    });
  };

  openModalWindow = () => {
    this.setState({
      modalWindow: true
    });
  };

  closeModalWindow = () => {
    this.setState({
      modalWindow: false
    });
  };

  render() {

    const { infoData, modalWindow } = this.state;

    if (modalWindow) {
      return (
        <div className='main-content'>
          <div className='main-content__title-button-block'>
            <h1 className='main-content__title'>Пользователи</h1>
            <button
              className='main-content__button'>
              <img
                className='main-content__plus'
                src={plus}
                alt='плюс' />
              Добавить
            </button>
          </div>

          <List info={infoData} />
          <ModalWindow
            closeModal={this.closeModalWindow}
            add={this.addItem} />
        </div>
      )
    };

    return (
      <div className='main-content'>
        <div className='main-content__title-button-block'>
          <h1 className='main-content__title'>Пользователи</h1>
          <button
            className='main-content__button'
            onClick={() => this.openModalWindow()}>
            <img
              className='main-content__plus'
              src={plus}
              alt='плюс' />
            Добавить
          </button>
        </div>

        <List info={infoData} />
      </div>
    )
  };
};



