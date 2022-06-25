import React from "react";

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

export interface IConfirmModalProps {
  setShowConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirmDelete: () => void;
}

export interface IUserDetailsProps {
  closeModal: () => void;
  saveData: (newData: IInfoData) => void;
  setData: React.Dispatch<React.SetStateAction<IInfoData>>;
  data: IInfoData;
  infoData: IInfoData[];
}

export interface ITextField {
  id: string;
  className: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent) => void;
  value: string;
}