import React, { Component } from 'react';

import closeButton from './close_button.svg';

import './modalWindow.css';

export default class ModalWindow extends Component {

  state = {
    labelSecondName: '',
    labelName: '',
    labelMiddleName: '',
    labelEmail: '',
    labelLogin: ''
  };

  onSubmit = (evt) => {
    evt.preventDefault();

    const {
      labelSecondName,
      labelName,
      labelMiddleName,
      labelEmail,
      labelLogin } = this.state;
    const newInfoItem = {
      secondName: labelSecondName,
      name: labelName,
      middleName: labelMiddleName,
      email: labelEmail,
      login: labelLogin
    };
    this.props.addItem(newInfoItem);
    this.setState({
      labelSecondName: '',
      labelName: '',
      labelMiddleName: '',
      labelEmail: '',
      labelLogin: ''
    });

    this.props.closeModal(false);
  };

  changeSecondName = (evt) => {
    this.setState({
      labelSecondName: evt.target.value
    });
  };

  changeName = (evt) => {
    this.setState({
      labelName: evt.target.value
    });
  };

  changeMiddleName = (evt) => {
    this.setState({
      labelMiddleName: evt.target.value
    });
  };

  changeEmail = (evt) => {
    this.setState({
      labelEmail: evt.target.value
    });
  };

  changeLogin = (evt) => {
    this.setState({
      labelLogin: evt.target.value
    });
  };

  checkInput = () => {

    const {
      labelSecondName,
      labelName,
      labelMiddleName,
      labelEmail,
      labelLogin } = this.state;

    labelEmail.search('@')

    if (labelSecondName !== '' &&
      labelName !== '' &&
      labelMiddleName !== '' &&
      labelEmail !== '' &&
      labelLogin !== '') {

      const addButton = document.querySelector('.form__button');
      addButton.disabled = false;
      addButton.style = 'color: #ffffff; opacity: 1';
    };
  };

  render() {

    this.checkInput();

    return (
      <div className="modal-window">
        <div className='modal-window__container'>
          <div className='modal-window__header'>
            <h2 className='modal-window__title'>Создание пользователя</h2>
            <button
              className='modal-window__close-button'
              style={{ backgroundImage: `url(${closeButton})` }}
              onClick={() => this.props.closeModal(false)} />
          </div>
          <form
            className='form'
            onSubmit={this.onSubmit}
            id='form' >

            <label className='form__label'>
              Фамилия
              <input
                className='form__input'
                type='text'
                placeholder=' Введите фамилию'
                required
                onChange={this.changeSecondName}
                value={this.state.labelSecondName} />
            </label>

            <label className='form__label'>
              Имя
              <input
                className='form__input'
                type='text'
                placeholder=' Введите имя'
                required
                onChange={this.changeName}
                value={this.state.labelName} />
            </label>

            <label className='form__label'>
              Отчество
              <input
                className='form__input'
                type='text'
                placeholder=' Введите отчество'
                required
                onChange={this.changeMiddleName}
                value={this.state.labelMiddleName} />
            </label>

            <label className='form__label'>
              E-mail
              <input
                className='form__input'
                type='text'
                required
                placeholder=' Введите электронную почту'
                onChange={this.changeEmail}
                value={this.state.labelEmail} />
            </label>

            <label className='form__label'>
              Логин
              <input
                className='form__input'
                type='text'
                placeholder=' Введите логин'
                required
                onChange={this.changeLogin}
                value={this.state.labelLogin} />
            </label>
          </form>
          <div className='form__button-block'>
            <button
              className='form__button'
              type='submit'
              disabled
              form='form'>
              Создать
            </button>
          </div>
        </div>
      </div>
    )
  };
};

