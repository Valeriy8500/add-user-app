import React from 'react';
import { headingsItems } from '../../constans/constans';
import { ITableListProps } from '../../interfaces/interfaces';
import './tableList.css';

const TableList: React.FC<ITableListProps> = (props) => {

  const {
    info,
    onDeletebtn,
    onShowbtn
  } = props;

  const InfoRow = React.useMemo(() => {
    return info.map((item, idx) => {
      return (
        <li className='main-content__item' key={idx}>
          <span className='main-content__item-el'>{item.secondName}</span>
          <span className='main-content__item-el'>{item.name}</span>
          <span className='main-content__item-el'>{item.middleName}</span>
          <span className='main-content__item-el'>{item.email}</span>
          <span className='main-content__item-el'>{item.login}</span>
          <div className='main-content__buttons-block'>
            <button
              id={String(item.id)}
              className='main-content__show-btn far fa-edit'
              type='button'
              title='Редактировать'
              onClick={() => onShowbtn(item.id!)}
            />
            <button
              id={String(item.id)}
              className='main-content__del-btn far fa-trash-alt'
              type='button'
              onClick={() => onDeletebtn(item.id!)}
              title='Удалить' />
          </div>
        </li>
      )
    });
  }, [
    info,
    onDeletebtn,
    onShowbtn
  ]);

  return (
    <ul className='main-content__table-list'>
      <li className='main-content__item'>
        {headingsItems.map((i) => <span className='main-content__item-el' key={i}>{i}</span>)}
      </li>
      {InfoRow}
    </ul>
  )
};

export default TableList;
