import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getItems = state => state.contacts.items;

// const getContacts = state => {
//   const filter = getFilter(state);
//   const items = getItems(state);

//   const normalizedFilter = filter.toLowerCase();
//   return items.filter(({ name }) =>
//     name ? name.toLowerCase().includes(normalizedFilter) : false,
//   );
// };

const getContacts = createSelector([getFilter, getItems], (filter, items) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
    name ? name.toLowerCase().includes(normalizedFilter) : false,
  );
});

export default { getFilter, getContacts };
