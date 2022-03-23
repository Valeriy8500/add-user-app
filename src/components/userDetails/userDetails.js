import React from 'react';

import { Input } from '../../atomicComponents/input';

import closeButton from './close_button.svg';

import './userDetails.css';

let generationId = 7;

const UserDetails = ({
  closeModal,
  saveData,
  setData,
  data
}) => {

  const onEsc = React.useCallback((evt) => {
    if (evt.key !== 'Escape') {
      return;
    }
    closeModal();
  }, [closeModal]);

  React.useEffect(() => {
    document.addEventListener('keydown', onEsc);

    return () => {
      document.removeEventListener('keydown', onEsc)
    }
  }, [onEsc]);

  React.useEffect(() => {
    if (data.secondName !== '' &&
      data.name !== '' &&
      data.middleName !== '' &&
      data.email !== '' &&
      data.login !== '') {

      const addButton = document.querySelector('.form__button');
      addButton.disabled = false;
      addButton.style = 'color: #ffffff; opacity: 1';
    } else {
      const addButton = document.querySelector('.form__button');
      addButton.style = 'color: rgba(255, 255, 255, 0.4); opacity: 0.5';
      addButton.disabled = true;
    }
  }, [data]);

  const onBtnOkHandler = (evt) => {
    evt.preventDefault();

    const newData = {
      secondName: data.secondName,
      name: data.name,
      middleName: data.middleName,
      email: data.email,
      login: data.login,
      id: generationId++
    };

    saveData({ ...newData });
    closeModal();
  };

  const onChangeItem = (id, value) => {
    setData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="user-details">
      <div className='user-details__container'>
        <div className='user-details__header'>
          <h2 className='user-details__title'>Создание пользователя</h2>
          <button
            className='user-details__close-button'
            style={{ backgroundImage: `url(${closeButton})` }}
            onClick={() => closeModal()} />
        </div>
        <form
          className='form'
          id='form'
          onSubmit={onBtnOkHandler} >

          <label className='form__label'>
            Фамилия
            <Input
              id='secondName'
              className='form__input'
              type='text'
              placeholder=' Введите фамилию'
              required
              onChange={(e) => onChangeItem(e.target.id, e.target.value)}
              value={data.secondName} />
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
              value={data.name} />
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
              value={data.middleName} />
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
              value={data.email} />
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
              value={data.login} />
          </label>
        </form>

        <div className='form__button-block'>
          <button
            className='form__button'
            disabled
            form='form'>
            Готово
          </button>
          <button
            className='form__button'
            form='form'
            onClick={closeModal}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
};

export default UserDetails;

