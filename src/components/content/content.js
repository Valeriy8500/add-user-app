import React, { Component } from 'react';

import SideBar from '../sideBar/sideBar';
import List from '../list/list';
import ModalWindow from '../modal-window/modal-window';
import info from '../../utils/utils';

import plus from './plus.svg';

import './content.css';

export default class Content extends Component {

  state = {
    infoData: info,
    showModal: false
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
      showModal: true
    });
  };

  closeModalWindow = () => {
    this.setState({
      showModal: false
    });
  };

  render() {

    const { infoData, showModal } = this.state;

    return (
      <div className='content'>
        <SideBar />
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
          {showModal &&
            <ModalWindow
              closeModal={this.closeModalWindow}
              add={this.addItem} />}
        </div>
      </div>
    )
  };
};



