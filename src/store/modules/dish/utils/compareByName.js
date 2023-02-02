import { sortDirections } from '../../../../constants/sortDirections';

export const compareDishesByName = (
  { name: nameA },
  { name: nameB },
  sortDirection
) => {
  if (nameA < nameB) {
    return sortDirection === sortDirections.asc ? 1 : -1;
  }

  if (nameA > nameB) {
    return sortDirection === sortDirections.desc ? -1 : 1;
  }

  return 0;
};
