export interface IInfoData {
  secondName: string;
  name: string;
  middleName: string;
  email: string;
  login: string;
  id?: number;
}

export interface IDefaultId {
  id: number | null
}

export interface ITableListProps {
  info: IInfoData[];
  onDeletebtn: (id: number) => void;
  onShowbtn: (id: number) => void;
}