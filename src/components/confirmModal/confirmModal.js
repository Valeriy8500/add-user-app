import React from 'react';
import closeButton from './close_button.svg';
import './confirmModal.css';

const ConfirmModal = ({
  setShowConfirmModal,
  onConfirmDelete
}) => {

  const onEsc = React.useCallback((evt) => {
    if (evt.key !== 'Escape') {
      return;
    }
    setShowConfirmModal(prev => !prev);
  }, [setShowConfirmModal]);

  React.useEffect(() => {
    document.addEventListener('keydown', onEsc);

    return () => {
      document.removeEventListener('keydown', onEsc)
    }
  }, [onEsc]);

  return (
    <div className="confirm-modal">
      <div className='confirm-modal__container'>
        <div className='confirm-modal__header'>
          <h2 className='confirm-modal__title'>
            Подтверждение удаления
          </h2>
          <button
            className='confirm-modal__close-button'
            style={{ backgroundImage: `url(${closeButton})` }}
            onClick={() => setShowConfirmModal(prev => !prev)} />
        </div>
        <div className='confirm-modal-content'>
          Вы точно хотите удалить запись?
        </div>
        <div className='confirm-modal__footer'>
          <button
            className='confirm-modal__button'
            type='submit'
            onClick={() => onConfirmDelete()}>
            Удалить
          </button>
          <button
            className='confirm-modal__button'
            type='button'
            onClick={() => setShowConfirmModal(prev => !prev)}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
};

export default ConfirmModal;