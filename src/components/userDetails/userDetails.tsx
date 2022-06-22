import React from 'react';
import { Input } from '../../atomicComponents/input';
import closeButton from './close_button.svg';
import { generateId } from '../../shared/sharedFunction';
import { IUserDetailsProps } from '../../interfaces/interfaces';
import './userDetails.css';

const UserDetails = (props: IUserDetailsProps): React.ReactElement => {

  const {
    closeModal,
    saveData,
    setData,
    data,
    infoData
  } = props;

  const [disabled, setDisabled] = React.useState<boolean>(true);

  const onEsc = React.useCallback((evt: any) => {
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
    if (
      data.secondName !== '' &&
      data.name !== '' &&
      data.middleName !== '' &&
      data.email !== '' &&
      data.login !== ''
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [data]);

  const onBtnOkHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    const newId = generateId(infoData);

    const newData = {
      secondName: data.secondName.trim(),
      name: data.name.trim(),
      middleName: data.middleName.trim(),
      email: data.email.trim(),
      login: data.login.trim(),
      id: newId
    };

    saveData({ ...newData });
    closeModal();
  };

  const onChangeItem = (id: string, e: React.ChangeEvent): void => {
    const element = e.target as HTMLInputElement;
    const { value } = element;

    if (value.trim() === '') {
      setData((prev) => ({ ...prev, [id]: '' }));
    } else {
      setData((prev) => ({ ...prev, [id]: value }));
    }
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
          onSubmit={(e: React.FormEvent) => onBtnOkHandler(e)} >

          <label className='form__label'>
            Фамилия *
            <Input
              id='secondName'
              className='form__input'
              type='text'
              placeholder=' Введите фамилию'
              required
              onChange={(e: React.ChangeEvent) => onChangeItem('secondName', e)}
              value={data.secondName} />
          </label>

          <label className='form__label'>
            Имя *
            <Input
              id='name'
              className='form__input'
              type='text'
              placeholder=' Введите имя'
              required
              onChange={(e: React.ChangeEvent) => onChangeItem('name', e)}
              value={data.name} />
          </label>

          <label className='form__label'>
            Отчество *
            <Input
              id='middleName'
              className='form__input'
              type='text'
              placeholder=' Введите отчество'
              required
              onChange={(e: React.ChangeEvent) => onChangeItem('middleName', e)}
              value={data.middleName} />
          </label>

          <label className='form__label'>
            E-mail *
            <Input
              id='email'
              className='form__input'
              type='text'
              required
              placeholder=' Введите электронную почту'
              onChange={(e: React.ChangeEvent) => onChangeItem('email', e)}
              value={data.email} />
          </label>

          <label className='form__label'>
            Логин *
            <Input
              id='login'
              className='form__input'
              type='text'
              placeholder=' Введите логин'
              required
              onChange={(e: React.ChangeEvent) => onChangeItem('login', e)}
              value={data.login} />
          </label>

          <p className='form_paragraph'>
            Поля, помеченные * обязательны для заполнения
          </p>
        </form>

        <div className='form__button-block'>
          <button
            className={disabled ? 'form__button form__button-dsbl' : 'form__button'}
            disabled={disabled}
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

