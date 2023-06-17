import { isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";


export const arrActions = [addContact, fetchContacts, deleteContact];
export const createStatus = status =>
  isAnyOf(...arrActions.map(action => action[status]));

export const handlePENDING = state => {
  state.isLoading = true;
};

export const handleREJECTED = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFULFILLED = state => {
  state.isLoading = false;
  state.error = null;
};
export const addContactFULFILLED = (state, action) => {
  state.items.push(action.payload);
};
export const fetchContactsFULFILLED = (state, action) => {
  state.items = action.payload;
};
export const deleteContactFULFILLED = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload.id);
};
