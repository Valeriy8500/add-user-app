import { IInfoData } from '../interfaces/interfaces';

export function generateId(infoData: IInfoData[]): number {
  let newId = 0;

  if (infoData?.length) {
    newId = infoData.length + 1;
  } else {
    newId = 1;
  }
  return newId;
}
