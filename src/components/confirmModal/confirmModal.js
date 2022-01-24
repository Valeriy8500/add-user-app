import React from 'react';

import './confirmModal.css';

const ConfirmModal = () => {
  return (
    <div className="confirm-modal">
      <div className='confirm-modal__container'>
        <div className='confirm-modal__header'>
          <h2 className='confirm-modal__title'>
            Подтверждение удаления
          </h2>
        </div>
        <div className='confirm-modal-content'>
          Вы точно хотите удалить запись?
        </div>
        <div className='confirm-modal__footer'>
          <button
            className='confirm-modal__button'
            type='submit'>
            Удалить
          </button>
          <button
            className='confirm-modal__button'
            type='button'>
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
};

export default ConfirmModal;