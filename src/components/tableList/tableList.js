import React from 'react';

import { headingsItems } from '../../utils/utils';

import './tableList.css';

const TableList = ({ info }) => {

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
            <button className='main-content__show-btn far fa-edit' type='button' />
            <button className='main-content__del-btn far fa-trash-alt' type='button' />
          </div>
        </li>
      )
    });
  }, [info]);

  return (
    <ul className='main-content__table-list'>
      <li className='main-content__item'>
        {headingsItems.map((item) => <span className='main-content__item-el' key={item}>{item}</span>)}
      </li>
      {InfoRow}
    </ul>
  )
};

export default TableList;
