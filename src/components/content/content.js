import React from 'react';

import SideBar from '../sideBar/sideBar';
import TableList from '../tableList/tableList';
import UserDetails from '../userDetails/userDetails';
import ConfirmModal from '../confirmModal/confirmModal';
import { info, defaultId, inputsDefaultValues } from '../../constans/constans';

import plus from './plus.svg';

import './content.css';

const storageInfo = JSON.parse(localStorage.getItem('info'));

const Content = () => {

  const [infoData, setInfoData] = React.useState(storageInfo); // Стейт элементов таблицы
  const [showModal, setShowModal] = React.useState(false); // Стейт UserDetails
  const [showConfirmModal, setShowConfirmModal] = React.useState(false); // Стейт ConfirmModal
  const [id, setId] = React.useState(defaultId); // Стейт id элемента по которому кликнули (для удаления)
  const [data, setData] = React.useState(inputsDefaultValues); // Стейт объекта (для showDetails)

  const saveData = (newData) => {
    if (!data.id) {
      // Создание строки
      setInfoData(prev => [...prev, newData]);
    } else {
      // Обновление строки
      updateItem();
    }

    return;
  };

  const closeModal = () => {
    setData(inputsDefaultValues);
    setShowModal(false);
  };

  const updateItem = () => {
    const itemId = data.id;
    let changeItem = infoData.filter((item) => {
      return Number(item.id) === Number(itemId) ? item : null;
    });
    const changeItemIdx = infoData.findIndex((item) => {
      return Number(item.id) === Number(itemId)
    });
    changeItem = data;
    const before = infoData.slice(0, changeItemIdx);
    const after = infoData.slice(changeItemIdx + 1);
    const newArray = [...before, changeItem, ...after];
    setInfoData(newArray);
  };

  const onDeletebtn = (id) => {
    setShowConfirmModal((prev) => {
      return !prev;
    });
    setId(() => ({
      id: id
    }))
  };

  const onConfirmDelete = () => {
    const idx = infoData.findIndex((item) => {
      return Number(item.id) === Number(id.id)
    });
    const before = infoData.slice(0, idx);
    const after = infoData.slice(idx + 1);
    const newArray = [...before, ...after];

    setInfoData(() => newArray);
    setShowConfirmModal(prev => !prev);
  };

  const onShowbtn = (id) => {
    const showData = infoData.filter((item) => {
      return Number(item.id) === Number(id) ? item : null;
    });

    setData(showData[0]);
    setShowModal(true);
  };

  return (
    <div className='content'>
      <SideBar />
      <div className='main-content'>
        <div className='main-content__header'>
          <h1 className='main-content__title'>Пользователи</h1>
          <button
            className='main-content__button'
            onClick={() => setShowModal(true)}>
            <img
              className='main-content__icon-plus'
              src={plus}
              alt='плюс' />
            Добавить
          </button>
        </div>

        <TableList
          info={infoData}
          onDeletebtn={onDeletebtn}
          onShowbtn={onShowbtn} />

        {showModal &&
          <UserDetails
            closeModal={closeModal}
            saveData={saveData}
            data={data}
            setData={setData} />}

        {showConfirmModal &&
          <ConfirmModal
            setShowConfirmModal={setShowConfirmModal}
            onConfirmDelete={onConfirmDelete} />}
      </div>
    </div>
  )
};

export default Content;



