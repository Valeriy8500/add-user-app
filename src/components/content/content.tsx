import React from 'react';
import SideBar from '../sideBar/sideBar';
import TableList from '../tableList/tableList';
import UserDetails from '../userDetails/userDetails';
import ConfirmModal from '../confirmModal/confirmModal';
import plus from './plus.svg';
import './content.css';
import {
  IInfoData,
  IDefaultId
} from '../../interfaces/interfaces';
import {
  defaultInfo,
  defaultId,
  inputsDefaultValues
} from '../../constans/constans';

const Content = (): React.ReactElement => {
  const [infoData, setInfoData] = React.useState<IInfoData[]>(() => {
    // При 1 загрузке в качестве начального значения рендерится
    // массив defaultInfo, а далее начальное значение,
    // при перезагрузке будет-измененный массив из localStorage
    const storageInfo = JSON.parse(localStorage.getItem('info')!);
    return storageInfo || defaultInfo;
  }); // стейт элементов таблицы

  const [showModal, setShowModal] = React.useState<boolean>(false); // стейт открытия/закрытия модального окна
  const [showConfirmModal, setShowConfirmModal] = React.useState<boolean>(false); // стейт открытия/закрытия ConfirmModal
  const [id, setId] = React.useState<IDefaultId>(defaultId); // стейт id элемента по которому кликнули (для удаления)
  const [data, setData] = React.useState<IInfoData>(inputsDefaultValues); // стейт изменяемого или добавляемого объекта

  const updateList = React.useCallback((): void => {
    // Добавление в localStorage новый массив с данными для отображения
    localStorage.setItem('info', JSON.stringify(infoData));
  }, [infoData]);

  React.useEffect(() => {
    updateList();
  }, [updateList]);

  const updateItem = React.useCallback((newData: IInfoData): void => {
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
  }, [data.id, infoData]);

  const saveData = React.useCallback((newData: IInfoData): void => {
    if (!data.id) {
      // Создание строки
      setInfoData(prev => {
        return [...prev, newData];
      });
    } else {
      // Редактирование строки
      updateItem(newData);
    }
  }, [data.id, updateItem]);

  const closeModal = React.useCallback((): void => {
    // Закрытие модального окна
    setData(inputsDefaultValues);
    setShowModal(false);
  }, []);

  const onDeletebtn = React.useCallback((id: number): void => {
    // Клик на кнопку удалить, вызов confirmModal
    setShowConfirmModal((prev) => {
      return !prev;
    });
    setId(() => ({
      id: id
    }))
  }, []);

  const onConfirmDelete = React.useCallback((): void => {
    // Клик на кнопку удалить в confirmModal
    const idx = infoData.findIndex((item) => {
      return Number(item.id) === Number(id.id)
    });
    const before = infoData.slice(0, idx);
    const after = infoData.slice(idx + 1);
    const newArray = [...before, ...after];

    const correctIdsArr = newArray.map((item, idx) => {
      return { ...item, id: idx + 1 };
    });

    setInfoData(() => correctIdsArr);
    setShowConfirmModal(prev => !prev);
  }, [id.id, infoData]);

  const onShowbtn = React.useCallback((id: number): void => {
    // Клик на кнопку редактировать
    const showData = infoData.filter((item) => {
      return Number(item.id) === Number(id) ? item : null;
    });

    setData(showData[0]);
    setShowModal(true);
  }, [infoData]);

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
            setData={setData}
            infoData={infoData} />}

        {showConfirmModal &&
          <ConfirmModal
            setShowConfirmModal={setShowConfirmModal}
            onConfirmDelete={onConfirmDelete} />}
      </div>
    </div>
  )
};

export default Content;



