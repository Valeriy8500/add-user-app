import React from 'react';
import { ITextField } from '../interfaces/interfaces';

export const TextField = (props: ITextField): React.ReactElement => {

  const {
    id,
    className,
    type,
    placeholder,
    onChange,
    value
  } = props;

  return (
    <div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value === null || value === undefined ? '' : value}
      />
    </div>
  );
};