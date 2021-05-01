import { combineReducers } from 'redux';
// import types from './ContactForm-types';
import { createReducer } from '@reduxjs/toolkit';
import actions from './ContactForm-actions';
const {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} = actions;

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       if (state.find(contact => contact.name === payload.name)) {
//         alert(`${payload.name} is already in contacts.`);
//         return state;
//       }
//       return [...state, payload];
//     case types.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const findContact = (state, payload) => {
//   if (state.find(contact => contact.name === payload.name)) {
//     alert(`${payload.name} is already in contacts.`);
//     return state;
//   }
// };

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.find(contact => contact.name === payload.name)) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CHANGE:
//       return payload;
//     default:
//       return state;
//   }
// };

const filterReducer = createReducer('', {
  'ContactForm/FilterChange': (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
});

export default contactsReducer;
