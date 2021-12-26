import React from 'react';

import closeButton from './close_button.svg';

import './modalWindow.css';

const ModalWindow = ({ closeModal, addItem }) => {

  const [state, setState] = React.useState({
    labelSecondName: '',
    labelName: '',
    labelMiddleName: '',
    labelEmail: '',
    labelLogin: ''
  });

  React.useEffect(() => {

    if (state.labelSecondName !== '' &&
      state.labelName !== '' &&
      state.labelMiddleName !== '' &&
      state.labelEmail !== '' &&
      state.labelLogin !== '') {

      const addButton = document.querySelector('.form__button');
      addButton.disabled = false;
      addButton.style = 'color: #ffffff; opacity: 1';
    } else {
      const addButton = document.querySelector('.form__button');
      addButton.style = 'color: rgba(255, 255, 255, 0.4); opacity: 0.5';
    }
  }, [state]);

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newInfoItem = {
      secondName: state.labelSecondName,
      name: state.labelName,
      middleName: state.labelMiddleName,
      email: state.labelEmail,
      login: state.labelLogin
    };
    addItem(newInfoItem);

    setState({
      labelSecondName: '',
      labelName: '',
      labelMiddleName: '',
      labelEmail: '',
      labelLogin: ''
    });
    closeModal(false);
  };

  const changeSecondName = (evt) => {
    setState((prev) => {
      return {
        ...prev,
        labelSecondName: evt.target.value
      }
    });
  };

  const changeName = (evt) => {
    setState((prev) => {
      return {
        ...prev,
        labelName: evt.target.value
      }
    });
  };

  const changeMiddleName = (evt) => {
    setState((prev) => {
      return {
        ...prev,
        labelMiddleName: evt.target.value
      }
    });
  };

  const changeEmail = (evt) => {
    setState((prev) => {
      return {
        ...prev,
        labelEmail: evt.target.value
      }
    });
  };

  const changeLogin = (evt) => {
    setState((prev) => {
      return {
        ...prev,
        labelLogin: evt.target.value
      }
    });
  };

  return (
    <div className="modal-window">
      <div className='modal-window__container'>
        <div className='modal-window__header'>
          <h2 className='modal-window__title'>Создание пользователя</h2>
          <button
            className='modal-window__close-button'
            style={{ backgroundImage: `url(${closeButton})` }}
            onClick={() => closeModal(false)} />
        </div>
        <form
          className='form'
          onSubmit={onSubmit}
          id='form' >

          <label className='form__label'>
            Фамилия
            <input
              className='form__input'
              type='text'
              placeholder=' Введите фамилию'
              required
              onChange={changeSecondName}
              value={state.labelSecondName} />
          </label>

          <label className='form__label'>
            Имя
            <input
              className='form__input'
              type='text'
              placeholder=' Введите имя'
              required
              onChange={changeName}
              value={state.labelName} />
          </label>

          <label className='form__label'>
            Отчество
            <input
              className='form__input'
              type='text'
              placeholder=' Введите отчество'
              required
              onChange={changeMiddleName}
              value={state.labelMiddleName} />
          </label>

          <label className='form__label'>
            E-mail
            <input
              className='form__input'
              type='text'
              required
              placeholder=' Введите электронную почту'
              onChange={changeEmail}
              value={state.labelEmail} />
          </label>

          <label className='form__label'>
            Логин
            <input
              className='form__input'
              type='text'
              placeholder=' Введите логин'
              required
              onChange={changeLogin}
              value={state.labelLogin} />
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

export default ModalWindow;

