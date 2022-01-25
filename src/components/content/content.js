import React from 'react';

import SideBar from '../sideBar/sideBar';
import TableList from '../tableList/tableList';
import ModalWindow from '../modalWindow/modalWindow';
import ConfirmModal from '../confirmModal/confirmModal';
import { info } from '../../utils/utils';

import plus from './plus.svg';

import './content.css';

const Content = () => {

  const [infoData, setInfoData] = React.useState(info);
  const [showModal, setShowModal] = React.useState(false);

  const addItem = (newItem) => {
    setInfoData(prev => [...prev, newItem]);
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

        <TableList info={infoData} />

        {showModal &&
          <ModalWindow
            closeModal={setShowModal}
            addItem={addItem} />}

        {/* <ConfirmModal /> */}
      </div>
    </div>
  )
};

export default Content;



