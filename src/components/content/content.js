import React from 'react';

import SideBar from '../sideBar/sideBar';
import TableList from '../tableList/tableList';
import UserDetails from '../userDetails/userDetails';
import ConfirmModal from '../confirmModal/confirmModal';
import { info, defaultId, inputsDefaultValues } from '../../constans/constans';

import plus from './plus.svg';

import './content.css';

const Content = () => {

  const [infoData, setInfoData] = React.useState(info); // Стейт элементов таблицы
  const [showModal, setShowModal] = React.useState(false); // Стейт UserDetails
  const [showConfirmModal, setShowConfirmModal] = React.useState(false); // Стейт ConfirmModal
  const [id, setId] = React.useState(defaultId); // Стейт id элемента по которому кликнули (для удаления)
  const [data, setData] = React.useState(inputsDefaultValues); // Стейт объекта (для showDetails)

  const onCreateBtn = (newItem) => {
    setInfoData(prev => [...prev, newItem]);
  };

  const closeModal = () => {
    setData(inputsDefaultValues);
    setShowModal(false);
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
    setShowModal(prev => !prev);
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
          setShowModal={setShowModal}
          setShowConfirmModal={setShowConfirmModal}
          setId={setId}
          onDeletebtn={onDeletebtn}
          onShowbtn={onShowbtn} />

        {showModal &&
          <UserDetails
            closeModal={closeModal}
            onCreateBtn={onCreateBtn}
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



