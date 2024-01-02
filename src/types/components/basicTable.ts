export type Columns = {
  enName: string;
  chName: string;
};
export type Props = {
  columns: Columns[];
  tableInfo: any[];
  addBtn?: boolean,
  editBtn?: boolean,
  delBtn?: boolean,
};
