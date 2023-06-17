import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';
import { initialState } from './initialState';
import { addContactFULFILLED, createStatus, deleteContactFULFILLED, fetchContactsFULFILLED, handleFULFILLED, handlePENDING, handleREJECTED } from './hanlerActionsStatus';

const STATUSES = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, REJECTED, FULFILLED } = STATUSES;
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFULFILLED)
      .addCase(addContact.fulfilled, addContactFULFILLED)
      .addCase(deleteContact.fulfilled, deleteContactFULFILLED)
      .addMatcher(createStatus(PENDING), handlePENDING)
      .addMatcher(createStatus(REJECTED), handleREJECTED)
      .addMatcher(createStatus(FULFILLED),handleFULFILLED);
   },
})

export const phoneBookReducer = contactsSlice.reducer;

//  Попередній варіант без рефакторингу

 // .addCase(fetchContacts.pending, PENDING)
      // .addCase(fetchContacts.fulfilled, fetchContactsFULFILLED)
      // .addCase(fetchContacts.rejected, REJECTED)
      // .addCase(addContact.pending, PENDING)
      // .addCase(addContact.fulfilled, addContactFULFILLED)
      // .addCase(addContact.rejected, REJECTED)
      // .addCase(deleteContact.pending, PENDING)
      // .addCase(deleteContact.fulfilled, deleteContactFULFILLED)
      // .addCase(deleteContact.rejected, REJECTED)