import { sortDirections } from '../../constants/sortDirections';

export const getAlternativeSort = (currentSort) =>
  currentSort === sortDirections.asc ? sortDirections.desc : sortDirections.asc;
