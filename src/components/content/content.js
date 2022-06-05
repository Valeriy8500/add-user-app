import React from 'react';
import SideBar from '../sideBar/sideBar';
import TableList from '../tableList/tableList';
import UserDetails from '../userDetails/userDetails';
import ConfirmModal from '../confirmModal/confirmModal';
import plus from './plus.svg';
import './content.css';
import {
  defaultInfo,
  defaultId,
  inputsDefaultValues
} from '../../constans/constans';

const Content = () => {
  const [infoData, setInfoData] = React.useState(() => {
    // При 1 загрузке в качестве начального значения рендерится
    // массив defaultInfo, а далее начальное значение,
    // при перезагрузке будет-измененный массив из localStorage
    const storageInfo = JSON.parse(localStorage.getItem('info'));  // Todo: посмотреть как сделано в todo-list-2
    return storageInfo || defaultInfo;
  }); // стейт элементов таблицы

  const [showModal, setShowModal] = React.useState(false); // стейт открытия/закрытия модального окна
  const [showConfirmModal, setShowConfirmModal] = React.useState(false); // стейт ConfirmModal
  const [id, setId] = React.useState(defaultId); // стейт id элемента по которому кликнули (для удаления)
  const [data, setData] = React.useState(inputsDefaultValues); // стейт изменяемого или добавляемого объекта

  const updateList = React.useCallback(() => {
    // Добавление в localStorage новый массив с данными для отображения
    localStorage.setItem('info', JSON.stringify(infoData));
  }, [infoData]);

  React.useEffect(() => {
    updateList();
  }, [updateList]);

  const saveData = (newData) => {
    if (!data.id) {
      // Создание строки
      setInfoData(prev => {
        return [...prev, newData];
      });
    } else {
      // Редактирование строки
      updateItem(newData);
    }
    return;
  };

  const closeModal = () => {
    // Закрытие модального окна
    setData(inputsDefaultValues);
    setShowModal(false);
  };

  const updateItem = (newData) => {
    // Редактирование строки
    const itemId = data.id;
    const changeItemIdx = infoData.findIndex((item) => {
      return Number(item.id) === Number(itemId)
    });
    const finalData = { ...newData, id: itemId };
    const before = infoData.slice(0, changeItemIdx);
    const after = infoData.slice(changeItemIdx + 1);
    const newArray = [...before, finalData, ...after];
    setInfoData(newArray);
  };

  const onDeletebtn = (id) => {
    // Клик на кнопку удалить, вызов confirmModal
    setShowConfirmModal((prev) => {
      return !prev;
    });
    setId(() => ({
      id: id
    }))
  };

  const onConfirmDelete = () => {
    // Клик на кнопку удалить в confirmModal
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
    // Клик на кнопку редактировать
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



