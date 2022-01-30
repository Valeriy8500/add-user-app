import React from 'react';

import { Input } from '../../atomicComponents/input';

import closeButton from './close_button.svg';

import './modalWindow.css';

const inputsDefaultValues = {
  secondName: '',
  name: '',
  middleName: '',
  email: '',
  login: ''
};

let generationId = 7;

const ModalWindow = ({ closeModal, onCreateBtn }) => {

  const [state, setState] = React.useState(inputsDefaultValues);

  React.useEffect(() => {

    if (state.secondName !== '' &&
      state.name !== '' &&
      state.middleName !== '' &&
      state.email !== '' &&
      state.login !== '') {

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
      secondName: state.secondName,
      name: state.name,
      middleName: state.middleName,
      email: state.email,
      login: state.login,
      id: generationId++
    };

    onCreateBtn(newInfoItem);
    setState(inputsDefaultValues);
    closeModal(false);
  };

  const onChangeItem = (id, value) => {
    setState((prev) => ({
      ...prev,
      [id]: value
    }));
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
            <Input
              id='secondName'
              className='form__input'
              type='text'
              placeholder=' Введите фамилию'
              required
              onChange={(e) => onChangeItem(e.target.id, e.target.value)}
              value={state.secondName} />
          </label>

          <label className='form__label'>
            Имя
            <Input
              id='name'
              className='form__input'
              type='text'
              placeholder=' Введите имя'
              required
              onChange={(e) => onChangeItem(e.target.id, e.target.value)}
              value={state.name} />
          </label>

          <label className='form__label'>
            Отчество
            <Input
              id='middleName'
              className='form__input'
              type='text'
              placeholder=' Введите отчество'
              required
              onChange={(e) => onChangeItem(e.target.id, e.target.value)}
              value={state.middleName} />
          </label>

          <label className='form__label'>
            E-mail
            <Input
              id='email'
              className='form__input'
              type='text'
              required
              placeholder=' Введите электронную почту'
              onChange={(e) => onChangeItem(e.target.id, e.target.value)}
              value={state.email} />
          </label>

          <label className='form__label'>
            Логин
            <Input
              id='login'
              className='form__input'
              type='text'
              placeholder=' Введите логин'
              required
              onChange={(e) => onChangeItem(e.target.id, e.target.value)}
              value={state.login} />
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

