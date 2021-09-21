import React, { Component } from 'react';

import actionButton from './action_button.svg';
import deleteButton from './delete_button.svg'

import './list.css';

export default class List extends Component {

  renderInfoRow = () => {

    return this.props.info.map((item) => {
      return (
        <li className='main-content__item' key={item.login}>
          <span className='main-content__item-el'>{item.secondName}</span>
          <span className='main-content__item-el'>{item.name}</span>
          <span className='main-content__item-el'>{item.middleName}</span>
          <span className='main-content__item-el'>{item.email}</span>
          <span className='main-content__item-el'>{item.login}</span>
          <div className='main-content__buttons-block'>
            <img className='main-content__info-button' src={actionButton} alt='карандаш'/>
            <img className='main-content__info-button' src={deleteButton} alt='корзина'/>
          </div>
        </li>
      )
    });
  };

  render() {

    const render = this.renderInfoRow();

    return (
      <ul className='main-content__list'>
        <li className='main-content__item'>
            <span className='main-content__item-el'>Фамилия</span>
            <span className='main-content__item-el'>Имя</span>
            <span className='main-content__item-el'>Отчество</span>
            <span className='main-content__item-el'>E-mail</span>
            <span className='main-content__item-el'>Логин</span>
        </li>
        {render}
      </ul>
    )
  };
};
