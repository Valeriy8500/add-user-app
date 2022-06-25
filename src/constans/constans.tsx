import {
  IInfoData,
  IDefaultId
} from '../interfaces/interfaces';

export const defaultInfo: IInfoData[] = [
  {
    secondName: 'Иванов',
    name: 'Иван',
    middleName: 'Иванович',
    email: 'mail1@mail.com',
    login: 'user1',
    id: 1
  },
  {
    secondName: 'Петров',
    name: 'Петр',
    middleName: 'Сергеевич',
    email: 'mail2@mail.com',
    login: 'user2',
    id: 2
  },
  {
    secondName: 'Сергеев',
    name: 'Григорий',
    middleName: 'Викторович',
    email: 'mail3@mail.com',
    login: 'user3',
    id: 3
  },
  {
    secondName: 'Федоров',
    name: 'Виктор',
    middleName: 'Федорович',
    email: 'mail4@mail.com',
    login: 'user4',
    id: 4
  },
  {
    secondName: 'Хвастунов',
    name: 'Сергей',
    middleName: 'Петрович',
    email: 'mail5@mail.com',
    login: 'user5',
    id: 5
  },
  {
    secondName: 'Григорьев',
    name: 'Федор',
    middleName: 'Григорьевич',
    email: 'mail6@mail.com',
    login: 'user6',
    id: 6
  }
];

export const headingsItems: string[] = [
  'Фамилия',
  'Имя',
  'Отчество',
  'E-mail',
  'Логин'
];

export const inputsDefaultValues: IInfoData = {
  secondName: '',
  name: '',
  middleName: '',
  email: '',
  login: '',
};

export const defaultId: IDefaultId = {
  id: null
};
